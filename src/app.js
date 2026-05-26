const sources = [
  {
    key: "portal",
    title: "TUM Application Info Portal",
    url: "https://www.tum.de/en/studies/application/application-info-portal/",
    note: "TUM 申请与录取信息入口，覆盖 deadlines、admission requirements、online application、documents、VPD 等主题。"
  },
  {
    key: "international",
    title: "TUM International Applicants",
    url: "https://www.tum.de/en/studies/application/application-info-portal/application-international",
    note: "解释 international applicants 的定义和国际学历申请者需要注意的事项。"
  },
  {
    key: "vpd",
    title: "TUM uni-assist / VPD",
    url: "https://www.tum.de/en/studies/application/application-info-portal/uni-assist",
    note: "VPD 适用人群、申请步骤、Bachelor/Master 时限、确认表、宽限期和 TUMonline 关系。"
  },
  {
    key: "documents",
    title: "TUM Document Requirements",
    url: "https://www.tum.de/studium/bewerbung/infoportal-bewerbung/anforderungen-an-dokumente",
    note: "authentic documents、翻译、在线验证、公证副本和文件上传要求。"
  },
  {
    key: "glossary",
    title: "TUM Dokumentenglossar",
    url: "https://www.tum.de/studium/bewerbung/infoportal-bewerbung/dokumentenglossar/",
    note: "官方材料术语库，解释 Transcript、Modulhandbuch、Notenskala、Pass、VPD 等文件。"
  },
  {
    key: "language",
    title: "TUM Language Certificates",
    url: "https://www.tum.de/studium/bewerbung/infoportal-bewerbung/zulassungsvoraussetzungen/sprachnachweise/",
    note: "德语/英语语言证明、项目差异、Sprachnachweisfinder 和截止前提交要求。"
  },
  {
    key: "aps",
    title: "TUM APS",
    url: "https://www.tum.de/studium/bewerbung/infoportal-bewerbung/aps/",
    note: "中国、印度、越南学历申请者的 APS 适用范围、例外和提交说明。"
  },
  {
    key: "dates",
    title: "TUM Dates and Deadlines",
    url: "https://www.tum.de/en/studies/application/application-info-portal/dates-periods-and-deadlines/",
    note: "学期结构、申请、注册、缴费和 enrollment deadlines。"
  },
  {
    key: "online",
    title: "TUMonline Application",
    url: "https://www.tum.de/en/studies/application/application-info-portal/online-application/onlineapplication-bachelor-master",
    note: "TUMonline 申请步骤、状态查看、文件上传和提交后限制。"
  },
  {
    key: "admission",
    title: "TUM Admission Procedures",
    url: "https://www.tum.de/en/studies/application/application-info-portal/admission-procedures",
    note: "unrestricted、NC、Bachelor aptitude assessment、Master aptitude assessment 和 soft transition。"
  },
  {
    key: "enrollment",
    title: "TUM Immatrikulation",
    url: "https://www.tum.de/studium/bewerbung/infoportal-einschreibung/immatrikulation/",
    note: "录取后接受学位、补充数据、上传注册申请、健康保险状态、缴费和注册步骤。"
  },
  {
    key: "higherSemester",
    title: "TUM Bewerbung in ein hoeheres Fachsemester",
    url: "https://www.tum.de/studium/im-studium/das-studium-organisieren/studienfachwechsel/bewerbung-in-ein-hoeheres-fachsemester",
    note: "申请更高 Fachsemester、credit transfer report、Studienfachberatung、upstream/downstream process。"
  }
];

const faq = [
  {
    question: "VPD 是不是等于已经申请 TUM？",
    answer: "不是。VPD 是 uni-assist 对学历材料的预审文件。TUM 官方说明明确：即使需要 VPD，也必须另外通过 TUMonline 申请具体专业。"
  },
  {
    question: "没有最终 VPD 可以先提交 TUMonline 吗？",
    answer: "如果你已经按时、完整地向 uni-assist 申请 VPD，可以在 TUMonline 上传 TUM 的 VPD 确认表作为占位。TUMonline 中显示 not ok 多数情况下只是提醒之后要替换为最终 VPD。"
  },
  {
    question: "uni-assist 里应该选具体专业吗？",
    answer: "TUM 官方 VPD 页面说明：在 uni-assist 中选择 Technische Universität München、all degree courses 和目标学位类型，不选择具体专业。"
  },
  {
    question: "申请材料要不要公证？",
    answer: "TUM 要求 authentic documents，通常不要求把申请/注册文件做官方公证。文件应有签名和印章，或数字签章、验证码、二维码等在线验证信息。"
  },
  {
    question: "语言证明什么时候交？",
    answer: "TUM 说明德语授课项目需要在申请结束前证明足够德语能力；英语/德语要求取决于具体项目页面。若用学位证书证明语言，证书必须在申请截止前可用。"
  },
  {
    question: "提交 TUMonline 后还能换文件吗？",
    answer: "TUMonline 说明：提交在线申请后，已上传的申请文件通常不能再交换；如果材料有问题，TUM 会在审核后通知如何处理。"
  },
  {
    question: "录取后怎么注册？",
    answer: "TUM 的 Immatrikulation 流程包括：查看录取、接受学位、补充数据、上传注册申请和 authentic documents、确认健康保险状态、缴纳 semester fee，之后完成注册。"
  },
  {
    question: "申请更高 Fachsemester 要先做什么？",
    answer: "TUM 强调申请前一定先联系目标专业的 Studienfachberatung，并确认适用 upstream 还是 downstream process；没有 credit transfer report 不能注册进入更高 Fachsemester。"
  }
];

const documentGlossary = [
  {
    term: "Hochschulzugangsberechtigung",
    zh: "大学入学资格证明",
    text: "用于证明你有资格进入高校学习，例如 Abitur、A-levels、Matura 等。Bachelor 申请通常会涉及。"
  },
  {
    term: "Masterzugangsberechtigung",
    zh: "硕士入学资格",
    text: "通常是已完成的 Bachelor 学位；如果申请时尚未毕业，部分项目可能接受当前 Transcript，具体看项目规定。"
  },
  {
    term: "Transcript of Records",
    zh: "成绩单",
    text: "由高校出具，列出已完成模块、学分和成绩。Master 申请、VPD 和高年级入学都经常需要。"
  },
  {
    term: "Modulhandbuch / Modulbeschreibung",
    zh: "模块手册 / 课程描述",
    text: "说明课程内容、学习成果、学分和考核形式。申请更高 Fachsemester 或课程认可时尤其重要。"
  },
  {
    term: "Notenskala",
    zh: "评分体系说明",
    text: "说明最高分、最低及格分和评分规则。若成绩不是德国评分体系，高年级入学或成绩认定时可能需要。"
  },
  {
    term: "Vorprüfungsdokumentation (VPD)",
    zh: "uni-assist 预审文件",
    text: "由 uni-assist 出具，用于 TUM 判断国际学历和成绩换算。VPD 不等于 TUM 专业申请。"
  },
  {
    term: "Personalausweis oder Reisepass",
    zh: "身份证或护照",
    text: "可以上传有效身份证件；如无德国身份证，可用国际护照。部分非必要号码信息可遮盖。"
  },
  {
    term: "Antrag auf Einschreibung",
    zh: "注册申请表",
    text: "录取并接受学位后，在 TUMonline 生成、签名并上传的注册文件。"
  },
  {
    term: "Bescheinigung zur Semestereinstufung",
    zh: "学期认定 / 学分转换证明",
    text: "申请更高 Fachsemester 的核心文件。没有 credit transfer report，不能注册进入更高 Fachsemester。"
  }
];

const baseTimeline = [
  {
    title: "1. 选择目标专业",
    text: "先确认专业页面上的申请截止日期、授课语言、admission procedure、required documents 和 aptitude assessment 规则。"
  },
  {
    title: "2. 准备申请材料",
    text: "整理学历证明、成绩单、语言证明、身份文件、动机信、essay、课程描述或项目要求的额外文件。"
  },
  {
    title: "3. 处理 VPD / APS",
    text: "德国以外学历通常要检查 VPD；中国、印度、越南学历背景通常还要关注 APS。"
  },
  {
    title: "4. 在 TUMonline 提交申请",
    text: "TUMonline 才是申请具体 TUM 专业的地方。按系统清单上传材料，并在截止日期前提交。提交后文件通常不能再交换。"
  },
  {
    title: "5. 等待审核和录取流程",
    text: "关注 TUMonline 状态和邮件。结果可能是录取、拒绝、邀请参加 aptitude assessment，或要求处理不正确文件。"
  },
  {
    title: "6. 录取后完成 Immatrikulation",
    text: "接受学位、补充数据、上传注册申请和 authentic documents、确认健康保险状态、缴纳 semester fee。"
  }
];

const selectors = {
  degree: document.querySelector("#degreeSelect"),
  applicationType: document.querySelector("#applicationTypeSelect"),
  qualification: document.querySelector("#qualificationSelect"),
  country: document.querySelector("#countrySelect"),
  language: document.querySelector("#languageSelect"),
  vpd: document.querySelector("#vpdSelect"),
  semester: document.querySelector("#semesterSelect")
};

const elements = {
  navItems: document.querySelectorAll(".nav-item"),
  questionForm: document.querySelector("#questionForm"),
  questionInput: document.querySelector("#questionInput"),
  quickQuestions: document.querySelectorAll("[data-question]"),
  answerBox: document.querySelector("#answerBox"),
  actionList: document.querySelector("#actionList"),
  checklistItems: document.querySelector("#checklistItems"),
  timelineItems: document.querySelector("#timelineItems"),
  glossaryList: document.querySelector("#glossaryList"),
  faqList: document.querySelector("#faqList"),
  sourceList: document.querySelector("#sourceList"),
  readinessBadge: document.querySelector("#readinessBadge"),
  intentBadge: document.querySelector("#intentBadge"),
  resetBtn: document.querySelector("#resetBtn")
};

init();

function init() {
  Object.values(selectors).forEach((select) => select.addEventListener("change", render));

  elements.navItems.forEach((button) => {
    button.addEventListener("click", () => {
      elements.navItems.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      document.querySelector(`#${button.dataset.target}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  elements.quickQuestions.forEach((button) => {
    button.addEventListener("click", () => {
      elements.questionInput.value = button.dataset.question;
      elements.questionInput.focus();
    });
  });

  elements.questionForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const question = elements.questionInput.value.trim();
    if (!question) return;
    answerQuestion(question);
  });

  elements.resetBtn.addEventListener("click", () => {
    selectors.degree.value = "master";
    selectors.applicationType.value = "first-semester";
    selectors.qualification.value = "outside-germany";
    selectors.country.value = "china";
    selectors.language.value = "english";
    selectors.vpd.value = "not-started";
    selectors.semester.value = "winter";
    elements.questionInput.value = "";
    elements.answerBox.className = "answer-card empty";
    elements.answerBox.innerHTML = "<h3>还没有问题</h3><p>选择你的申请画像，然后输入问题。系统会给出简化版建议、下一步行动和官方链接。</p>";
    elements.intentBadge.textContent = "等待提问";
    elements.intentBadge.className = "badge muted";
    render();
  });

  render();
}

function getProfile() {
  return {
    degree: selectors.degree.value,
    applicationType: selectors.applicationType.value,
    qualification: selectors.qualification.value,
    country: selectors.country.value,
    language: selectors.language.value,
    vpd: selectors.vpd.value,
    semester: selectors.semester.value
  };
}

function render() {
  const profile = getProfile();
  const checklist = buildChecklist(profile);
  const completed = checklist.filter((item) => item.status === "ready").length;
  const readiness = Math.round((completed / checklist.length) * 100);

  elements.readinessBadge.textContent = `准备度 ${readiness}%`;
  elements.checklistItems.innerHTML = checklist.map(renderChecklistItem).join("");
  elements.timelineItems.innerHTML = buildTimeline(profile).map(renderTimelineItem).join("");
  elements.glossaryList.innerHTML = documentGlossary.map(renderGlossaryItem).join("");
  elements.actionList.innerHTML = buildActions(profile).map((item) => `<article>${escapeHtml(item)}</article>`).join("");
  elements.faqList.innerHTML = faq.map(renderFaq).join("");
  elements.sourceList.innerHTML = sources.map(renderSource).join("");
}

function buildChecklist(profile) {
  const items = [
    {
      title: profile.degree === "master" ? "Bachelor 学位文件或当前成绩单" : "大学入学资格证明",
      detail: profile.degree === "master" ? "Master 申请通常需要学位证书；尚未毕业时，部分项目可先提交当前 Transcript。" : "Bachelor 申请通常需要 Hochschulzugangsberechtigung，即大学入学资格证明。",
      status: "todo"
    },
    {
      title: "TUMonline 专业申请",
      detail: "必须在 TUMonline 申请具体专业；uni-assist 的 VPD 不等于申请 TUM。",
      status: "todo"
    },
    {
      title: "语言证明",
      detail: languageDetail(profile.language),
      status: profile.language === "mixed" ? "warning" : "todo"
    },
    {
      title: "身份文件",
      detail: "上传有效身份证件或护照。按 TUM Dokumentenglossar，部分非必要号码信息可以遮盖。",
      status: "todo"
    },
    {
      title: "Authentic documents",
      detail: "文件应有官方签名和印章，或数字签章、验证码、二维码等在线验证信息；非德语/英语文件通常需要宣誓翻译。",
      status: "todo"
    }
  ];

  if (profile.applicationType === "higher-semester") {
    items.unshift(
      {
        title: "Credit transfer report / Semestereinstufung",
        detail: "申请更高 Fachsemester 必须关注 credit transfer report 或 Semestereinstufung；没有它不能注册进入更高 Fachsemester。",
        status: "todo"
      },
      {
        title: "Modulbeschreibungen",
        detail: "提交希望被认可课程的模块描述，说明内容、学分、学习成果和考试形式。",
        status: "todo"
      }
    );

    if (profile.qualification === "outside-germany") {
      items.unshift({
        title: "Notenskala",
        detail: "如果已有成绩来自德国以外，申请更高 Fachsemester 时通常要提供评分体系说明。",
        status: "todo"
      });
    }
  }

  if (profile.qualification === "outside-germany") {
    items.unshift({
      title: "VPD / uni-assist",
      detail: vpdDetail(profile),
      status: profile.vpd === "received" ? "ready" : profile.vpd === "submitted" ? "warning" : "todo"
    });
  }

  if (["china", "india", "vietnam"].includes(profile.country) && profile.qualification === "outside-germany") {
    items.unshift({
      title: "APS 证书",
      detail: "中国、印度、越南学历背景申请德国高校时，通常需要关注 APS；博士申请除外，另有个别例外。",
      status: "todo"
    });
  }

  if (profile.degree === "master") {
    items.push({
      title: "项目特定材料",
      detail: "很多 Master 项目会要求动机信、essay、课程描述、专业背景表或 aptitude assessment 相关材料，具体看项目页面。",
      status: "warning"
    });
  }

  return items;
}

function buildTimeline(profile) {
  const timeline = [...baseTimeline];

  if (profile.applicationType === "higher-semester") {
    timeline.splice(1, 0, {
      title: "高年级入学前置咨询",
      text: "申请前先联系目标专业 Studienfachberatung，确认是否可申请更高 Fachsemester，以及适用 upstream 还是 downstream process。"
    });
    timeline.splice(3, 0, {
      title: "准备 Semestereinstufung 材料",
      text: "根据流程准备 credit transfer report 或申请表、模块描述；德国以外成绩通常还要准备 Notenskala。"
    });
  }

  if (profile.vpd === "not-started" && profile.qualification === "outside-germany") {
    timeline.splice(3, 0, {
      title: "VPD 关键提醒",
      text:
        profile.degree === "bachelor"
          ? "Bachelor 的 VPD 时限通常是冬季学期 7 月 15 日、夏季学期 1 月 15 日。"
          : "Master 的 VPD 通常需要在目标项目申请期结束前提交给 uni-assist。"
    });
  }

  return timeline;
}

function buildActions(profile) {
  const actions = ["打开目标专业页面，确认该专业自己的 deadline、required documents 和 admission procedure。"];

  if (profile.qualification === "outside-germany") {
    actions.push("确认你是否需要 TUM 专属 VPD，不要使用其他大学的 VPD。");
  }
  if (profile.vpd === "not-started" && profile.qualification === "outside-germany") {
    actions.push("尽快在 uni-assist 申请 VPD；若最终 VPD 未及时出具，在 TUMonline 上传 TUM 的 VPD 确认表。");
  }
  if (["china", "india", "vietnam"].includes(profile.country)) {
    actions.push("检查 APS 证书是否适用于你的学历背景，并预留办理时间。");
  }
  if (profile.applicationType === "higher-semester") {
    actions.push("联系目标专业 Studienfachberatung，确认更高 Fachsemester 流程和学期认定材料。");
  }
  if (profile.language === "mixed") {
    actions.push("确认项目是否同时要求英语和德语证明。");
  } else {
    actions.push(`准备${profile.language === "english" ? "英语" : "德语"}语言证明，并按项目要求在截止前上传。`);
  }

  return actions;
}

function answerQuestion(question) {
  const profile = getProfile();
  const intent = detectIntent(question);
  const actions = buildActions(profile).slice(0, 4);
  const answer = generateAnswer(intent, profile);

  elements.intentBadge.textContent = intent.label;
  elements.intentBadge.className = "badge";
  elements.answerBox.className = "answer-card";
  elements.answerBox.innerHTML = `
    <div class="answer-meta">
      <span>${profile.degree === "master" ? "Master" : "Bachelor"}</span>
      <span>${profile.qualification === "outside-germany" ? "国际学历" : "德国学历"}</span>
      <span>${profile.applicationType === "higher-semester" ? "高年级入学" : "第一学期"}</span>
      <span>${intent.label}</span>
    </div>
    <h3>${escapeHtml(question)}</h3>
    <p>${escapeHtml(answer)}</p>
    <h4>建议下一步</h4>
    <ul>
      ${actions.map((action) => `<li>${escapeHtml(action)}</li>`).join("")}
    </ul>
    <h4>相关官方页面</h4>
    <div class="inline-links">
      ${intent.sources.map((key) => renderSourceLink(getSource(key))).join("")}
    </div>
  `;
}

function detectIntent(question) {
  const value = normalize(question);
  if (containsAny(value, ["vpd", "uniassist", "uni-assist", "预审", "占位", "notok"])) {
    return { label: "VPD / uni-assist", sources: ["vpd", "online"] };
  }
  if (containsAny(value, ["aps", "中国", "印度", "越南"])) {
    return { label: "APS", sources: ["aps", "vpd"] };
  }
  if (containsAny(value, ["语言", "英语", "德语", "雅思", "托福", "sprachnachweis"])) {
    return { label: "语言证明", sources: ["language", "glossary"] };
  }
  if (containsAny(value, ["材料", "公证", "翻译", "上传", "authentic", "文件", "二维码", "验证"])) {
    return { label: "材料格式", sources: ["documents", "glossary", "online"] };
  }
  if (containsAny(value, ["高年级", "fachsemester", "semestereinstufung", "转学", "认可", "课程描述", "学分转换"])) {
    return { label: "高年级入学", sources: ["higherSemester", "glossary"] };
  }
  if (containsAny(value, ["录取", "注册", "immatrikulation", "缴费", "保险", "semesterfee", "enrollment"])) {
    return { label: "录取后注册", sources: ["enrollment", "dates", "documents"] };
  }
  if (containsAny(value, ["eignung", "aptitude", "面试", "笔试", "nc", "录取方式", "assessment", "softtransition"])) {
    return { label: "录取程序", sources: ["admission", "online"] };
  }
  if (containsAny(value, ["截止", "deadline", "时间", "日期", "冬季", "夏季"])) {
    return { label: "截止日期", sources: ["dates", "vpd"] };
  }
  if (containsAny(value, ["签证", "visa", "居留", "residence"])) {
    return { label: "签证提醒", sources: ["online", "vpd"] };
  }
  return { label: "申请流程", sources: ["portal", "online", "documents"] };
}

function generateAnswer(intent, profile) {
  const degreeName = profile.degree === "master" ? "Master" : "Bachelor";
  const international = profile.qualification === "outside-germany";

  if (intent.label === "VPD / uni-assist") {
    if (!international) return "如果你的入学资格是在德国获得的，通常不属于国际学历路径。你仍应以 TUMonline 的材料清单为准。";
    return `你申请的是 ${degreeName}，且学历来源是德国以外，因此要重点检查 VPD。TUM 官方说明：VPD 由 uni-assist 预审学历和成绩，但它不等于 TUM 专业申请；你仍必须在 TUMonline 申请具体项目。uni-assist 中通常选择 TUM、all degree courses 和学位类型，不选择具体专业。即使申请更高 Fachsemester，VPD 也按第一 Fachsemester 申请。`;
  }

  if (intent.label === "APS") {
    if (!["china", "india", "vietnam"].includes(profile.country)) return "APS 主要和中国、印度、越南学历背景相关。你的国家选项不在这个范围内，但仍建议查看 TUM 官方 APS 页面确认特殊情况。";
    return `你的学历国家/地区选择了${countryName(profile.country)}，因此 APS 是重点风险项。TUM 官方说明中，APS 用于检查中国、印度、越南学历申请者材料真实性和学习成绩是否满足赴德学习要求。Bachelor、Master、Studienkolleg、交换学习通常都可能涉及；博士申请不需要 APS。`;
  }

  if (intent.label === "语言证明") {
    return `${languageName(profile.language)}项目通常需要在申请期结束前提交对应语言证明。TUM 说明不同项目要求不同，必须看具体 degree program 页面。若想用已完成的语言授课学位作为证明，最终毕业证书必须在申请截止前可用；临时文件或 Transcript 通常不能替代语言证明。`;
  }

  if (intent.label === "材料格式") {
    return "TUM 要求申请和注册时上传 authentic documents：通常需要官方签名和印章，或数字签章、验证码、二维码等可在线验证信息。机器生成但没有签名、印章或验证方式的文件通常不够。非德语或英语文件需要由宣誓译员翻译，并与原文件合并为一个 PDF 上传。TUM 说明自 2025 夏季学期起申请和注册流程完全数字化，不再邮寄纸质材料。";
  }

  if (intent.label === "高年级入学") {
    return "如果你已经在其他专业或高校完成相关课程，可以考虑申请更高 Fachsemester。TUM 强调申请前应联系目标专业的 Studienfachberatung。相同或相关专业的学习时间可能会被自动考虑；非相关专业需要申请课程认可。不同 School 可能采用 upstream 或 downstream process。通常需要 credit transfer report 或申请表、模块描述；德国以外成绩还可能需要 Notenskala。";
  }

  if (intent.label === "录取后注册") {
    return "录取后不等于已经注册。TUM 的注册流程包括：在 TUMonline 查看录取并下载录取通知，接受学位，补充注册数据，上传签名后的 Antrag auf Einschreibung 和 authentic documents，数字确认健康保险状态，缴纳 semester fee，之后等待完成 Immatrikulation。若申请时使用过 VPD，注册时还要上传你当时提交给 uni-assist 的相关学历材料。";
  }

  if (intent.label === "录取程序") {
    return "TUM 的录取程序取决于具体项目。可能是 unrestricted program、NC 限制名额项目、Bachelor aptitude assessment、Bachelor aptitude recommendation，或 Master aptitude assessment。Master aptitude assessment 通常会评估 Bachelor 成绩和书面材料，部分项目可能有面试、线上测试、笔试或 essay。最终规则必须看具体项目页面和考试/评估条例。";
  }

  if (intent.label === "截止日期") {
    return "TUM 的 Bachelor 和 Master 申请截止日期通常以具体项目页面为准。VPD 有额外时限：Bachelor 冬季学期通常到 7 月 15 日、夏季学期通常到 1 月 15 日；Master 通常要在项目申请期结束前提交给 uni-assist。Enrollment 和缴费也有单独期限，录取后要看 TUMonline 和 Dates and Deadlines 页面。";
  }

  if (intent.label === "签证提醒") {
    return "TUM 提醒很多国际学生需要签证和居留许可，而且不一定要等录取后才开始了解签证流程。你可以提前了解 student applicant visa 或学生签证要求，并尽早联系德国使领馆。签证政策不是 TUM 单独决定，最终以德国使领馆和外管局要求为准。";
  }

  return `建议按这个顺序处理：先选定 ${degreeName} 专业并查看 deadline、required documents 和 admission procedure；再准备 TUMonline 材料清单；如果你是德国以外学历，检查 VPD；如果来自中国、印度或越南，检查 APS；最后在 TUMonline 截止前提交完整申请。`;
}

function renderChecklistItem(item) {
  return `
    <article class="check-item ${item.status}">
      <span>${statusLabel(item.status)}</span>
      <div>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.detail)}</p>
      </div>
    </article>
  `;
}

function renderTimelineItem(item) {
  return `
    <article class="timeline-item">
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.text)}</p>
    </article>
  `;
}

function renderFaq(item) {
  return `
    <details>
      <summary>${escapeHtml(item.question)}</summary>
      <p>${escapeHtml(item.answer)}</p>
    </details>
  `;
}

function renderGlossaryItem(item) {
  return `
    <article class="glossary-item">
      <div>
        <strong>${escapeHtml(item.term)}</strong>
        <span>${escapeHtml(item.zh)}</span>
      </div>
      <p>${escapeHtml(item.text)}</p>
    </article>
  `;
}

function renderSource(source) {
  return `
    <article>
      <a href="${source.url}" target="_blank" rel="noreferrer">${escapeHtml(source.title)}</a>
      <p>${escapeHtml(source.note)}</p>
    </article>
  `;
}

function renderSourceLink(source) {
  return `<a href="${source.url}" target="_blank" rel="noreferrer">${escapeHtml(source.title)}</a>`;
}

function getSource(key) {
  return sources.find((source) => source.key === key) || sources[0];
}

function languageDetail(language) {
  if (language === "english") return "英语授课项目通常需要英语证明，具体认可证书和最低要求看项目页面。";
  if (language === "german") return "德语授课项目通常需要德语证明，具体证书和最低要求看项目页面。";
  return "混合授课项目可能需要英语和德语证明。";
}

function vpdDetail(profile) {
  if (profile.vpd === "received") return "你已收到最终 VPD，下一步是在 TUMonline 对应申请中上传。";
  if (profile.vpd === "submitted") return "如果已按时、完整地向 uni-assist 提交，通常要在 TUMonline 上传 TUM 的 VPD 确认表作为占位，并在宽限期内替换为最终 VPD。";
  return profile.degree === "master"
    ? "Master 申请通常要在项目申请期结束前向 uni-assist 提交 VPD 申请。"
    : "Bachelor 申请通常要注意冬季学期 7 月 15 日、夏季学期 1 月 15 日的 VPD 节点。";
}

function countryName(country) {
  return { china: "中国", india: "印度", vietnam: "越南", eu: "欧盟/欧洲经济区", other: "其他国家/地区" }[country];
}

function languageName(language) {
  return { english: "英语授课", german: "德语授课", mixed: "英德混合授课" }[language];
}

function statusLabel(status) {
  return { ready: "已准备", warning: "需确认", todo: "待准备" }[status];
}

function containsAny(value, terms) {
  return terms.some((term) => value.includes(normalize(term)));
}

function normalize(text) {
  return String(text).toLowerCase().replace(/\s+/g, "");
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
