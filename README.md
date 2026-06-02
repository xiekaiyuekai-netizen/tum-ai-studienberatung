# TUM AI 申请咨询助手

这是一个中文 TUM 申请咨询 Demo：把申请咨询做成类似 ChatGPT 的 Project 工作区。申请者先为目标专业新建 Project，填写专业、学位阶段、申请类型、学历背景、授课语言、VPD 状态等信息，然后在该 Project 内进行连续问答。

如果申请不同专业，用户应创建不同 Project。每个 Project 会保存独立的专业信息和聊天记录，避免不同专业的材料要求、截止日期和申请流程混在一起。

它不是官方工具，也不直接代表 TUM。项目里的内容基于 TUM 官网公开信息整理，最终要求必须以 TUM 官网、具体专业页面和 TUMonline 材料清单为准。

在线 Demo：

https://tum-ai-studienberatung-nez9.vercel.app

## 为什么比 RAG 项目更适合入门

这个项目使用轻量 RAG，不接向量数据库，先用本地 TUM 官方资料摘要做关键词检索，再把检索结果和 Project 信息交给 DeepSeek / OpenAI 兼容的 LLM API 生成回答。核心是：

```text
新建 Project -> 填写专业信息 -> 检索 TUM 资料 -> OpenAI 生成回答 -> 官方来源链接
```

简历上可以写：

> Built a ChatGPT-style Chinese TUM application advising assistant with project-based application profiles, lightweight RAG over official TUM guidance, DeepSeek/OpenAI-compatible API-backed Q&A, independent chat histories, VPD/APS and higher-semester guidance, source-grounded responses, and Vercel deployment.

## 本地运行

```bash
npm.cmd start
```

然后打开：

```text
http://localhost:4273
```

也可以运行：

```bash
node scripts/local-server.js
```

## 在线部署

推荐使用 Vercel：

1. 打开 https://vercel.com
2. 使用 GitHub 登录
3. 点击 `Add New Project`
4. 选择 `xiekaiyuekai-netizen/tum-ai-studienberatung`
5. Framework Preset 选择 `Other`
6. Build Command 填 `npm run build`
7. Output Directory 使用 `public`
8. 点击 `Deploy`

这个项目包含静态页面和 Vercel Serverless Function：

- 页面入口在 `public/`
- AI 接口在 `/api/chat`
- OpenAI API key 必须放在 Vercel 环境变量里，不能写进前端代码或提交到 GitHub

DeepSeek 默认环境变量：

```text
DEEPSEEK_API_KEY=你的 DeepSeek API key
LLM_MODEL=deepseek-v4-flash
```

`LLM_MODEL` 可以不填，默认使用 `deepseek-v4-flash`。

如果以后要切回 OpenAI，可以改成：

```text
LLM_PROVIDER=openai
OPENAI_API_KEY=你的 OpenAI API key
LLM_MODEL=gpt-5-mini
```

也可以接其他 OpenAI Chat Completions 兼容接口：

```text
LLM_PROVIDER=deepseek
DEEPSEEK_API_KEY=你的兼容接口 key
LLM_API_BASE_URL=https://api.deepseek.com
LLM_MODEL=deepseek-v4-flash
```

## 功能

- ChatGPT 风格单窗口对话界面
- Project 管理：不同申请专业使用不同 Project
- 每个 Project 独立保存专业信息和聊天记录
- 申请专业输入支持 TUM 专业选项搜索，输入关键词即可匹配常见 TUM Bachelor / Master 项目
- Project 信息包含：Bachelor / Master、专业名称、申请类型、学历来源、国家/地区、授课语言、VPD 状态、目标学期、deadline 和备注
- 基于当前 Project 背景回答 VPD、APS、语言证明、材料格式、高年级入学、录取程序和 Immatrikulation 问题
- `/api/chat` 调用 DeepSeek / OpenAI 兼容 Chat Completions API 生成中文申请咨询回答
- 轻量 RAG：先从本地 TUM 官方资料摘要里检索相关内容，再交给模型回答
- API 不可用时自动回退到本地规则答案
- 回答附带建议下一步
- 回答附带 TUM 官方来源链接
- 常见问题快捷提问
- 零依赖静态项目，浏览器 localStorage 保存数据
- VPD / uni-assist 提醒
- APS 提醒
- 语言证明提醒
- TUMonline 提交流程提醒
- Admission procedures / aptitude assessment 解释
- 录取后 Immatrikulation 流程提醒
- 官方链接面板
- 零依赖静态项目

## 推荐测试问题

```text
我在中国读本科，申请 TUM Master 需要 VPD 和 APS 吗？
```

```text
申请 TUM 是先做 uni-assist，还是先在 TUMonline 提交？
```

```text
语言证明什么时候上传？可以之后补交吗？
```

```text
我需要上传公证件吗？
```

```text
我已经在别的大学读过相关课程，可以申请 TUM 更高 Fachsemester 吗？
```

```text
TUM 的 aptitude assessment 是什么？会面试吗？
```

```text
拿到 Zulassung 以后怎么完成 Immatrikulation？
```

## 官方信息来源

- TUM International Applicants
- TUM uni-assist / VPD
- TUM Document Requirements
- TUM Dokumentenglossar
- TUM Language Certificates
- TUM APS
- TUM Dates and Deadlines
- TUM Online Application
- TUM Admission Procedures
- TUM Immatrikulation
- TUM Bewerbung in ein hoeheres Fachsemester
