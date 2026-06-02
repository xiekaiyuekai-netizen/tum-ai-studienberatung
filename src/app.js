const sources = [
  {
    key: "portal",
    title: "TUM Application Info Portal",
    url: "https://www.tum.de/en/studies/application/application-info-portal/"
  },
  {
    key: "vpd",
    title: "TUM uni-assist / VPD",
    url: "https://www.tum.de/en/studies/application/application-info-portal/uni-assist"
  },
  {
    key: "documents",
    title: "TUM Document Requirements",
    url: "https://www.tum.de/studium/bewerbung/infoportal-bewerbung/anforderungen-an-dokumente"
  },
  {
    key: "glossary",
    title: "TUM Dokumentenglossar",
    url: "https://www.tum.de/studium/bewerbung/infoportal-bewerbung/dokumentenglossar/"
  },
  {
    key: "language",
    title: "TUM Language Certificates",
    url: "https://www.tum.de/studium/bewerbung/infoportal-bewerbung/zulassungsvoraussetzungen/sprachnachweise/"
  },
  {
    key: "aps",
    title: "TUM APS",
    url: "https://www.tum.de/studium/bewerbung/infoportal-bewerbung/aps/"
  },
  {
    key: "dates",
    title: "TUM Dates and Deadlines",
    url: "https://www.tum.de/en/studies/application/application-info-portal/dates-periods-and-deadlines/"
  },
  {
    key: "online",
    title: "TUMonline Application",
    url: "https://www.tum.de/en/studies/application/application-info-portal/online-application/onlineapplication-bachelor-master"
  },
  {
    key: "admission",
    title: "TUM Admission Procedures",
    url: "https://www.tum.de/en/studies/application/application-info-portal/admission-procedures"
  },
  {
    key: "enrollment",
    title: "TUM Immatrikulation",
    url: "https://www.tum.de/studium/bewerbung/infoportal-einschreibung/immatrikulation/"
  },
  {
    key: "higherSemester",
    title: "TUM Bewerbung in ein hoeheres Fachsemester",
    url: "https://www.tum.de/studium/im-studium/das-studium-organisieren/studienfachwechsel/bewerbung-in-ein-hoeheres-fachsemester"
  }
];

const tumPrograms = [
  { name: "Electrical Engineering and Information Technology - Bachelor of Science (B.Sc.)", degree: "bachelor", language: "german" },
  { name: "Electrical Engineering and Information Technology - Master of Science (M.Sc.)", degree: "master", language: "german" },
  { name: "Informatics - Bachelor of Science (B.Sc.)", degree: "bachelor", language: "german" },
  { name: "Informatics - Master of Science (M.Sc.)", degree: "master", language: "english" },
  { name: "Information Engineering - Bachelor of Science (B.Sc.)", degree: "bachelor", language: "english" },
  { name: "Information Engineering - Master of Science (M.Sc.)", degree: "master", language: "english" },
  { name: "Information Systems - Bachelor of Science (B.Sc.)", degree: "bachelor", language: "german" },
  { name: "Data Engineering and Analytics - Master of Science (M.Sc.)", degree: "master", language: "english" },
  { name: "Robotics, Cognition, Intelligence - Master of Science (M.Sc.)", degree: "master", language: "mixed" },
  { name: "Mechatronics, Robotics and Biomechanical Engineering - Master of Science (M.Sc.)", degree: "master", language: "mixed" },
  { name: "Management and Technology - Bachelor of Science (B.Sc.)", degree: "bachelor", language: "english" },
  { name: "Management and Technology - Master of Science (M.Sc.)", degree: "master", language: "english" },
  { name: "Management and Digital Technology - Master of Science (M.Sc.)", degree: "master", language: "english" },
  { name: "Aerospace - Bachelor of Science (B.Sc.)", degree: "bachelor", language: "german" },
  { name: "Aerospace - Master of Science (M.Sc.)", degree: "master", language: "english" },
  { name: "Aerospace Engineering - Master of Science (M.Sc.)", degree: "master", language: "english" },
  { name: "Mechanical Engineering - Bachelor of Science (B.Sc.)", degree: "bachelor", language: "german" },
  { name: "Mechanical Engineering - Master of Science (M.Sc.)", degree: "master", language: "german" },
  { name: "Automotive Engineering - Master of Science (M.Sc.)", degree: "master", language: "german" },
  { name: "Energy and Process Engineering - Master of Science (M.Sc.)", degree: "master", language: "german" },
  { name: "Civil Engineering - Bachelor of Science (B.Sc.)", degree: "bachelor", language: "german" },
  { name: "Civil Engineering - Master of Science (M.Sc.)", degree: "master", language: "german" },
  { name: "Environmental Engineering - Bachelor of Science (B.Sc.)", degree: "bachelor", language: "german" },
  { name: "Environmental Engineering - Master of Science (M.Sc.)", degree: "master", language: "english" },
  { name: "Architecture - Bachelor of Arts (B.A.)", degree: "bachelor", language: "german" },
  { name: "Architecture - Master of Arts (M.A.)", degree: "master", language: "german" },
  { name: "Computational Mechanics - Master of Science (M.Sc.)", degree: "master", language: "english" },
  { name: "Transportation Systems - Master of Science (M.Sc.)", degree: "master", language: "english" },
  { name: "Logistics Engineering and Management - Master of Science (M.Sc.)", degree: "master", language: "english" },
  { name: "Biomedical Engineering and Medical Physics - Master of Science (M.Sc.)", degree: "master", language: "english" },
  { name: "Mathematics - Bachelor of Science (B.Sc.)", degree: "bachelor", language: "german" },
  { name: "Mathematics - Master of Science (M.Sc.)", degree: "master", language: "english" },
  { name: "Physics - Bachelor of Science (B.Sc.)", degree: "bachelor", language: "german" },
  { name: "Physics - Master of Science (M.Sc.)", degree: "master", language: "english" },
  { name: "Chemistry - Bachelor of Science (B.Sc.)", degree: "bachelor", language: "german" },
  { name: "Chemistry - Master of Science (M.Sc.)", degree: "master", language: "english" },
  { name: "Biology - Bachelor of Science (B.Sc.)", degree: "bachelor", language: "german" },
  { name: "Biology - Master of Science (M.Sc.)", degree: "master", language: "english" },
  { name: "Sustainable Resource Management - Master of Science (M.Sc.)", degree: "master", language: "english" },
  { name: "Politics and Technology - Master of Science (M.Sc.)", degree: "master", language: "english" }
];

const storageKey = "tum-gpt-projects-v1";
const activeKey = "tum-gpt-active-project-v1";

let projects = loadProjects();
let activeProjectId = localStorage.getItem(activeKey) || projects[0]?.id || null;
let editingProjectId = null;

const elements = {
  projectList: document.querySelector("#projectList"),
  newProjectBtn: document.querySelector("#newProjectBtn"),
  emptyCreateBtn: document.querySelector("#emptyCreateBtn"),
  emptyState: document.querySelector("#emptyState"),
  chatView: document.querySelector("#chatView"),
  projectTitle: document.querySelector("#projectTitle"),
  projectMeta: document.querySelector("#projectMeta"),
  editProjectBtn: document.querySelector("#editProjectBtn"),
  messageList: document.querySelector("#messageList"),
  suggestionButtons: document.querySelectorAll("[data-question]"),
  chatForm: document.querySelector("#chatForm"),
  chatInput: document.querySelector("#chatInput"),
  projectDialog: document.querySelector("#projectDialog"),
  projectForm: document.querySelector("#projectForm"),
  dialogTitle: document.querySelector("#dialogTitle"),
  programOptions: document.querySelector("#programOptions"),
  closeDialogBtn: document.querySelector("#closeDialogBtn"),
  cancelProjectBtn: document.querySelector("#cancelProjectBtn")
};

const fields = {
  projectName: document.querySelector("#projectNameInput"),
  programName: document.querySelector("#programNameInput"),
  degree: document.querySelector("#degreeInput"),
  applicationType: document.querySelector("#applicationTypeInput"),
  qualification: document.querySelector("#qualificationInput"),
  country: document.querySelector("#countryInput"),
  language: document.querySelector("#languageInput"),
  vpd: document.querySelector("#vpdInput"),
  semester: document.querySelector("#semesterInput"),
  deadline: document.querySelector("#deadlineInput"),
  notes: document.querySelector("#notesInput")
};

init();

function init() {
  elements.newProjectBtn.addEventListener("click", () => openProjectDialog());
  elements.emptyCreateBtn.addEventListener("click", () => openProjectDialog());
  elements.editProjectBtn.addEventListener("click", () => openProjectDialog(getActiveProject()));
  elements.closeDialogBtn.addEventListener("click", closeProjectDialog);
  elements.cancelProjectBtn.addEventListener("click", closeProjectDialog);
  elements.projectForm.addEventListener("submit", saveProjectFromDialog);
  fields.programName.addEventListener("change", applySelectedProgram);
  fields.programName.addEventListener("input", applySelectedProgram);
  elements.chatForm.addEventListener("submit", handleChatSubmit);
  elements.chatInput.addEventListener("input", autosizeComposer);

  elements.suggestionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      elements.chatInput.value = button.dataset.question;
      autosizeComposer();
      elements.chatInput.focus();
    });
  });

  renderProgramOptions();
  render();
}

function loadProjects() {
  try {
    return JSON.parse(localStorage.getItem(storageKey) || "[]");
  } catch {
    localStorage.removeItem(storageKey);
    return [];
  }
}

function persist() {
  localStorage.setItem(storageKey, JSON.stringify(projects));
  if (activeProjectId) localStorage.setItem(activeKey, activeProjectId);
  else localStorage.removeItem(activeKey);
}

function getActiveProject() {
  return projects.find((project) => project.id === activeProjectId) || null;
}

function render() {
  renderProjectList();
  const activeProject = getActiveProject();

  elements.emptyState.hidden = Boolean(activeProject);
  elements.chatView.hidden = !activeProject;

  if (!activeProject) return;

  elements.projectTitle.textContent = activeProject.programName;
  elements.projectMeta.textContent = buildProjectMeta(activeProject);
  elements.messageList.innerHTML = activeProject.messages.map(renderMessage).join("");
  elements.messageList.scrollTop = elements.messageList.scrollHeight;
}

function renderProjectList() {
  if (!projects.length) {
    elements.projectList.innerHTML = '<div class="project-empty">还没有 Project</div>';
    return;
  }

  elements.projectList.innerHTML = projects
    .map((project) => {
      const active = project.id === activeProjectId ? "active" : "";
      return `
        <article class="project-item ${active}" data-project-id="${project.id}">
          <button class="project-select-button" type="button" data-select-project-id="${project.id}">
            <span>${escapeHtml(project.name)}</span>
            <small>${escapeHtml(project.programName)}</small>
          </button>
          <button class="project-delete-button" type="button" data-delete-project-id="${project.id}" aria-label="删除 ${escapeHtml(project.name)}"></button>
        </article>
      `;
    })
    .join("");

  elements.projectList.querySelectorAll("[data-select-project-id]").forEach((button) => {
    button.addEventListener("click", () => {
      activeProjectId = button.dataset.selectProjectId;
      persist();
      render();
    });
  });

  elements.projectList.querySelectorAll("[data-delete-project-id]").forEach((button) => {
    button.addEventListener("click", () => deleteProject(button.dataset.deleteProjectId));
  });
}

function openProjectDialog(project = null) {
  editingProjectId = project?.id || null;
  elements.dialogTitle.textContent = project ? "编辑申请 Project" : "新建申请 Project";

  fields.projectName.value = project?.name || "";
  fields.programName.value = project?.programName || "";
  fields.degree.value = project?.degree || "master";
  fields.applicationType.value = project?.applicationType || "first-semester";
  fields.qualification.value = project?.qualification || "outside-germany";
  fields.country.value = project?.country || "china";
  fields.language.value = project?.language || "english";
  fields.vpd.value = project?.vpd || "not-started";
  fields.semester.value = project?.semester || "winter";
  fields.deadline.value = project?.deadline || "";
  fields.notes.value = project?.notes || "";

  elements.projectDialog.showModal();
  fields.projectName.focus();
}

function closeProjectDialog() {
  elements.projectDialog.close();
  editingProjectId = null;
}

function saveProjectFromDialog(event) {
  event.preventDefault();

  const data = {
    name: fields.projectName.value.trim(),
    programName: fields.programName.value.trim(),
    degree: fields.degree.value,
    applicationType: fields.applicationType.value,
    qualification: fields.qualification.value,
    country: fields.country.value,
    language: fields.language.value,
    vpd: fields.vpd.value,
    semester: fields.semester.value,
    deadline: fields.deadline.value.trim(),
    notes: fields.notes.value.trim()
  };

  if (!data.name || !data.programName) return;

  if (editingProjectId) {
    projects = projects.map((project) =>
      project.id === editingProjectId ? { ...project, ...data, updatedAt: new Date().toISOString() } : project
    );
  } else {
    const project = {
      id: crypto.randomUUID(),
      ...data,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      messages: [buildWelcomeMessage(data)]
    };
    projects.unshift(project);
    activeProjectId = project.id;
  }

  persist();
  closeProjectDialog();
  render();
}

function buildWelcomeMessage(project) {
  return {
    role: "assistant",
    text: `我已经为「${project.programName}」建立了申请 Project。之后你在这里问的问题，都会默认基于这个专业、${degreeName(project.degree)}、${applicationTypeName(project.applicationType)}和你的学历背景来回答。`,
    actions: buildActions(project).slice(0, 4),
    sourceKeys: buildPrioritySources(project),
    createdAt: new Date().toISOString()
  };
}

function deleteActiveProject() {
  const activeProject = getActiveProject();
  if (activeProject) deleteProject(activeProject.id);
}

function deleteProject(projectId) {
  const activeProject = projects.find((project) => project.id === projectId);
  if (!activeProject) return;
  const confirmed = window.confirm(`确定删除「${activeProject.name}」吗？这个 Project 的聊天记录也会删除。`);
  if (!confirmed) return;

  projects = projects.filter((project) => project.id !== projectId);
  activeProjectId = projects[0]?.id || null;
  persist();
  render();
}

function renderProgramOptions() {
  elements.programOptions.innerHTML = tumPrograms
    .map((program) => `<option value="${escapeHtml(program.name)}"></option>`)
    .join("");
}

function applySelectedProgram() {
  const selected = tumPrograms.find((program) => program.name === fields.programName.value.trim());
  if (!selected) return;

  fields.degree.value = selected.degree;
  fields.language.value = selected.language;

  if (!fields.projectName.value.trim()) {
    fields.projectName.value = selected.name
      .replace(/\s-\s(Bachelor|Master).+$/, "")
      .replace("Electrical Engineering and Information Technology", "TUM EI")
      .replace("Information Engineering", "TUM IE");
  }
}

function handleChatSubmit(event) {
  event.preventDefault();
  const activeProject = getActiveProject();
  const question = elements.chatInput.value.trim();
  if (!activeProject || !question) return;

  const userMessage = {
    role: "user",
    text: question,
    createdAt: new Date().toISOString()
  };

  const assistantMessage = answerQuestion(question, activeProject);
  activeProject.messages.push(userMessage, assistantMessage);
  activeProject.updatedAt = new Date().toISOString();
  elements.chatInput.value = "";
  autosizeComposer();
  persist();
  render();
}

function answerQuestion(question, project) {
  const intent = detectIntent(question);
  return {
    role: "assistant",
    text: generateAnswer(intent, project),
    actions: buildActions(project, intent.label).slice(0, 5),
    sourceKeys: intent.sources,
    createdAt: new Date().toISOString()
  };
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
  if (containsAny(value, ["aptitude", "assessment", "面试", "笔试", "nc", "录取方式", "eignung"])) {
    return { label: "录取程序", sources: ["admission", "online"] };
  }
  if (containsAny(value, ["截止", "deadline", "时间", "日期", "冬季", "夏季"])) {
    return { label: "截止日期", sources: ["dates", "vpd"] };
  }
  return { label: "申请流程", sources: ["portal", "online", "documents"] };
}

function generateAnswer(intent, project) {
  const program = project.programName;
  const degree = degreeName(project.degree);
  const international = project.qualification === "outside-germany";

  if (intent.label === "VPD / uni-assist") {
    if (!international) {
      return `针对「${program}」，你填写的是德国学历来源，通常不走国际学历 VPD 路径。但具体仍要看该专业页面和 TUMonline 清单。如果系统要求 VPD，再按 TUM VPD 页面处理。`;
    }
    return `针对「${program}」这个 ${degree} Project，你需要重点确认 VPD。TUM 的逻辑是：VPD 由 uni-assist 预审学历和成绩，但它不是 TUM 专业申请。你仍然要在 TUMonline 申请「${program}」。如果最终 VPD 还没出，通常要看是否能上传 TUM 的 VPD 确认表作为占位。`;
  }

  if (intent.label === "APS") {
    if (!["china", "india", "vietnam"].includes(project.country) || !international) {
      return `你当前 Project 的学历背景不是典型 APS 适用场景。APS 主要和中国、印度、越南学历背景相关；建议仍用 TUM APS 页面核对例外情况。`;
    }
    return `你这个 Project 的学历国家/地区是${countryName(project.country)}，申请「${program}」时 APS 是高优先级材料。TUM APS 页面说明，中国、印度、越南学历申请者通常需要 APS 来验证学历材料真实性和成绩。建议不要等到 TUMonline 提交前才处理 APS。`;
  }

  if (intent.label === "语言证明") {
    return `「${program}」的语言要求要以专业页面为准。你当前设置是${languageName(project.language)}。一般来说，语言证明应在申请截止前满足并上传；如果想用已完成学位证明授课语言，最终毕业文件通常必须在截止前可用。`;
  }

  if (intent.label === "材料格式") {
    return `针对「${program}」，材料上传时要注意 TUM 的 authentic documents 要求：文件通常需要官方签名和印章，或数字签章、验证码、二维码等可在线验证信息。非德语/英语材料通常需要宣誓翻译，并和原件合并为一个 PDF 上传。`;
  }

  if (intent.label === "高年级入学") {
    return `如果你要把「${program}」作为更高 Fachsemester 申请，不能只按普通第一学期流程处理。TUM 高年级入学页面强调：先联系目标专业 Studienfachberatung，并确认 credit transfer report / Semestereinstufung 方式。通常还要准备模块描述、成绩单，德国以外成绩可能需要 Notenskala。`;
  }

  if (intent.label === "录取后注册") {
    return `拿到「${program}」录取后，还需要完成 Immatrikulation。通常包括接受学位、补充注册数据、上传签名后的 Antrag auf Einschreibung 和 authentic documents、确认健康保险状态、缴纳 semester fee。录取不等于已经注册。`;
  }

  if (intent.label === "录取程序") {
    return `「${program}」的录取程序要看该专业页面。TUM 可能采用 unrestricted admission、NC、Bachelor aptitude assessment 或 Master aptitude assessment。Master 项目常见做法是评估 Bachelor 成绩和书面材料，部分项目可能有面试、测试或 essay。`;
  }

  if (intent.label === "截止日期") {
    const deadline = project.deadline ? `你在 Project 里记录的截止日期是 ${project.deadline}。` : "你还没有在 Project 里记录截止日期。";
    return `${deadline} TUM 的申请截止、VPD 截止和 enrollment deadline 可能不是同一天。建议分别核对「${program}」专业页面、TUM Dates and Deadlines 和 VPD 页面。`;
  }

  return `针对「${program}」，建议按这个顺序处理：先看专业页面的 deadline、required documents 和 admission procedure；再确认 VPD / APS 是否适用；然后在 TUMonline 提交具体专业申请；最后录取后完成 Immatrikulation。这个回答基于你当前 Project 的申请背景生成。`;
}

function buildActions(project, intentLabel = "") {
  const actions = [`打开「${project.programName}」专业页面，确认 deadline、required documents 和 admission procedure。`];

  if (project.qualification === "outside-germany") {
    actions.push("确认是否需要 TUM 专属 VPD；VPD 不等于 TUMonline 专业申请。");
  }
  if (project.qualification === "outside-germany" && project.vpd === "not-started") {
    actions.push("尽早处理 uni-assist / VPD，避免卡在申请截止前。");
  }
  if (["china", "india", "vietnam"].includes(project.country) && project.qualification === "outside-germany") {
    actions.push("核对 APS 是否适用，并预留办理时间。");
  }
  if (project.applicationType === "higher-semester" || intentLabel === "高年级入学") {
    actions.push("联系目标专业 Studienfachberatung，确认更高 Fachsemester 和课程认可流程。");
  }
  actions.push(`准备${languageName(project.language)}证明，并按该专业要求上传。`);

  return actions;
}

function buildPrioritySources(project) {
  const keys = new Set(["online", "documents"]);
  if (project.qualification === "outside-germany") keys.add("vpd");
  if (["china", "india", "vietnam"].includes(project.country)) keys.add("aps");
  if (project.applicationType === "higher-semester") keys.add("higherSemester");
  keys.add("language");
  keys.add("dates");
  return Array.from(keys);
}

function renderMessage(message) {
  if (message.role === "user") {
    return `
      <article class="message user-message">
        <div class="message-content">${escapeHtml(message.text)}</div>
      </article>
    `;
  }

  return `
    <article class="message assistant-message">
      <div class="avatar">T</div>
      <div class="message-body">
        <div class="message-content">${escapeHtml(message.text)}</div>
        ${message.actions?.length ? renderActions(message.actions) : ""}
        ${message.sourceKeys?.length ? renderSources(message.sourceKeys) : ""}
      </div>
    </article>
  `;
}

function renderActions(actions) {
  return `
    <div class="answer-block">
      <strong>建议下一步</strong>
      <ul>${actions.map((action) => `<li>${escapeHtml(action)}</li>`).join("")}</ul>
    </div>
  `;
}

function renderSources(sourceKeys) {
  return `
    <div class="source-row">
      ${sourceKeys.map((key) => renderSourceLink(getSource(key))).join("")}
    </div>
  `;
}

function renderSourceLink(source) {
  return `<a href="${source.url}" target="_blank" rel="noreferrer">${escapeHtml(source.title)}</a>`;
}

function getSource(key) {
  return sources.find((source) => source.key === key) || sources[0];
}

function buildProjectMeta(project) {
  const parts = [
    degreeName(project.degree),
    applicationTypeName(project.applicationType),
    countryName(project.country),
    languageName(project.language)
  ];
  if (project.deadline) parts.push(`Deadline: ${project.deadline}`);
  return parts.join(" · ");
}

function autosizeComposer() {
  elements.chatInput.style.height = "auto";
  elements.chatInput.style.height = `${Math.min(elements.chatInput.scrollHeight, 180)}px`;
}

function degreeName(value) {
  return { master: "Master", bachelor: "Bachelor" }[value] || value;
}

function applicationTypeName(value) {
  return { "first-semester": "第一学期入学", "higher-semester": "更高 Fachsemester" }[value] || value;
}

function countryName(value) {
  return { china: "中国", india: "印度", vietnam: "越南", eu: "欧盟/欧洲经济区", other: "其他国家/地区" }[value] || value;
}

function languageName(value) {
  return { english: "英语授课", german: "德语授课", mixed: "英德混合授课" }[value] || value;
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
