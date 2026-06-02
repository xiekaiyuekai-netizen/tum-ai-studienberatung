const { retrieveKnowledge } = require("./knowledge");

const defaultModel = "gpt-5-mini";

module.exports = async function handler(request, response) {
  setCorsHeaders(response);

  if (request.method === "OPTIONS") {
    response.statusCode = 204;
    response.end();
    return;
  }

  if (request.method !== "POST") {
    sendJson(response, 405, { error: "Only POST requests are supported." });
    return;
  }

  try {
    const body = await readJsonBody(request);
    const question = String(body.question || "").trim();
    const project = body.project || {};
    const history = Array.isArray(body.history) ? body.history.slice(-8) : [];

    if (!question) {
      sendJson(response, 400, { error: "Question is required." });
      return;
    }

    if (!process.env.OPENAI_API_KEY) {
      sendJson(response, 500, {
        error: "OPENAI_API_KEY is not configured.",
        hint: "请在 Vercel 环境变量里配置 OPENAI_API_KEY。"
      });
      return;
    }

    const retrievedChunks = retrieveKnowledge({ question, project });
    const context = retrievedChunks
      .map((chunk, index) => {
        return `[${index + 1}] ${chunk.source.title}\nURL: ${chunk.source.url}\n${chunk.text}`;
      })
      .join("\n\n");

    const apiResponse = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || defaultModel,
        input: [
          {
            role: "developer",
            content:
              "你是一个中文 TUM 申请咨询助手。只基于提供的 TUM 官方资料摘要和用户 Project 信息回答。不要编造专业特殊要求；不确定时要求用户核对具体专业页面和 TUMonline。回答要清晰、具体、适合申请者。"
          },
          {
            role: "user",
            content: buildPrompt({ question, project, history, context })
          }
        ],
        max_output_tokens: 900
      })
    });

    const data = await apiResponse.json();

    if (!apiResponse.ok) {
      sendJson(response, apiResponse.status, {
        error: data?.error?.message || "OpenAI API request failed."
      });
      return;
    }

    sendJson(response, 200, {
      answer: extractOutputText(data),
      actions: buildActions(project, question).slice(0, 5),
      sources: dedupeSources(retrievedChunks.map((chunk) => chunk.source)),
      model: data.model || process.env.OPENAI_MODEL || defaultModel,
      mode: "openai-rag"
    });
  } catch (error) {
    sendJson(response, 500, { error: error.message || "Server error." });
  }
};

function buildPrompt({ question, project, history, context }) {
  return `
Project 信息：
- 申请专业：${project.programName || "未填写"}
- 学位阶段：${project.degree || "未填写"}
- 申请类型：${project.applicationType || "未填写"}
- 学历来源：${project.qualification || "未填写"}
- 学历国家/地区：${project.country || "未填写"}
- 授课语言：${project.language || "未填写"}
- VPD 状态：${project.vpd || "未填写"}
- 目标学期：${project.semester || "未填写"}
- 申请截止日期：${project.deadline || "未填写"}
- 备注：${project.notes || "无"}

最近聊天：
${history.map((message) => `${message.role}: ${message.text}`).join("\n") || "无"}

检索到的 TUM 官方资料摘要：
${context || "没有检索到足够相关的资料。"}

用户问题：
${question}

请用中文回答，结构如下：
1. 直接结论
2. 申请者应该怎么做
3. 需要核对的风险点
4. 官方来源依据
`;
}

function buildActions(project, question) {
  const actions = [`打开「${project.programName || "目标专业"}」专业页面，核对 deadline、required documents 和 admission procedure。`];
  const value = `${question} ${project.applicationType || ""} ${project.qualification || ""} ${project.country || ""}`.toLowerCase();

  if (project.qualification === "outside-germany") {
    actions.push("确认该专业是否要求 TUM 专属 VPD，并预留 uni-assist 处理时间。");
  }
  if (["china", "india", "vietnam"].includes(project.country)) {
    actions.push("核对 APS 是否适用，并尽早准备审核证明。");
  }
  if (value.includes("higher-semester") || value.includes("fachsemester") || value.includes("高年级")) {
    actions.push("联系目标专业 Studienfachberatung，确认 Semestereinstufung / credit transfer 要求。");
  }
  actions.push("用 TUMonline 的最终材料清单逐项检查上传文件。");
  return actions;
}

function extractOutputText(data) {
  if (data.output_text) return data.output_text.trim();

  const pieces = [];
  for (const item of data.output || []) {
    for (const content of item.content || []) {
      if (content.type === "output_text" && content.text) pieces.push(content.text);
    }
  }
  return pieces.join("\n").trim() || "我暂时没有生成有效回答，请稍后重试。";
}

function dedupeSources(items) {
  const seen = new Set();
  return items.filter((item) => {
    if (!item || seen.has(item.url)) return false;
    seen.add(item.url);
    return true;
  });
}

function readJsonBody(request) {
  return new Promise((resolve, reject) => {
    let raw = "";
    request.on("data", (chunk) => {
      raw += chunk;
      if (raw.length > 1024 * 1024) {
        reject(new Error("Request body is too large."));
        request.destroy();
      }
    });
    request.on("end", () => {
      try {
        resolve(raw ? JSON.parse(raw) : {});
      } catch {
        reject(new Error("Invalid JSON body."));
      }
    });
    request.on("error", reject);
  });
}

function setCorsHeaders(response) {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  response.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

function sendJson(response, statusCode, payload) {
  response.statusCode = statusCode;
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.end(JSON.stringify(payload));
}
