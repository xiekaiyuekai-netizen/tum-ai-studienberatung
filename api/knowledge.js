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

const chunks = [
  {
    key: "portal",
    keywords: ["application", "bewerbung", "流程", "申请流程", "材料", "online", "tumonline"],
    text:
      "TUM applicants should use the official application info portal and TUMonline as the authoritative workflow. A program application depends on the selected degree program, application semester, admission procedure, required documents and deadlines shown in the program page and TUMonline."
  },
  {
    key: "vpd",
    keywords: ["vpd", "uni-assist", "uniassist", "预审", "占位", "国外学历", "international"],
    text:
      "For many applicants with non-German educational qualifications, TUM may require a VPD from uni-assist. The VPD checks educational certificates and grade conversion, but it is not the same as submitting the TUM application. Applicants still need to apply to the selected TUM degree program in TUMonline."
  },
  {
    key: "aps",
    keywords: ["aps", "中国", "印度", "越南", "china", "india", "vietnam", "审核"],
    text:
      "TUM provides APS guidance for applicants with educational qualifications from China, India and Vietnam. These applicants often need APS verification documents to prove the authenticity and evaluation of their academic records."
  },
  {
    key: "documents",
    keywords: ["材料", "文件", "公证", "翻译", "上传", "pdf", "authentic", "二维码", "验证"],
    text:
      "TUM document requirements emphasize authentic documents. Documents may need official signatures, stamps, digital verification, QR codes or comparable verification features. Documents not issued in German or English usually require certified translation and should be uploaded in the required format."
  },
  {
    key: "glossary",
    keywords: ["document", "glossary", "dokumentenglossar", "材料说明", "notenskala", "transcript", "certificate"],
    text:
      "The TUM document glossary explains application documents such as transcripts, degree certificates, grading scale, translations, proof of language proficiency and other supporting documents. Applicants should match their uploads to the document names shown in TUMonline."
  },
  {
    key: "language",
    keywords: ["语言", "英语", "德语", "ielts", "toefl", "雅思", "托福", "sprachnachweis"],
    text:
      "Language certificates are program-specific. Applicants should check whether the program requires German, English or mixed language proof. Proof normally needs to satisfy the official program requirements and be available by the relevant application deadline."
  },
  {
    key: "dates",
    keywords: ["deadline", "截止", "日期", "时间", "winter", "summer", "semester", "冬季", "夏季"],
    text:
      "TUM deadlines differ by degree program, semester and application type. Application deadlines, VPD processing deadlines and enrollment deadlines may be separate. The selected program page and official dates and deadlines page should be checked independently."
  },
  {
    key: "online",
    keywords: ["tumonline", "online", "提交", "申请表", "upload", "application"],
    text:
      "TUMonline is the central system for applying to TUM degree programs. Applicants upload documents and submit the selected program application there. Required document lists in TUMonline should be treated as binding for the specific application."
  },
  {
    key: "admission",
    keywords: ["录取", "admission", "aptitude", "assessment", "nc", "面试", "笔试", "eignung"],
    text:
      "Admission procedures vary by program. TUM programs may use unrestricted admission, NC, Bachelor aptitude assessment, Master aptitude assessment, interviews, tests, essays or document-based evaluation. The exact admission procedure must be checked on the selected program page."
  },
  {
    key: "enrollment",
    keywords: ["注册", "immatrikulation", "enrollment", "保险", "缴费", "semester fee", "录取后"],
    text:
      "Admission does not equal enrollment. After admission, applicants must complete enrollment steps such as accepting the study place, uploading enrollment documents, confirming health insurance status where applicable, and paying the semester fee."
  },
  {
    key: "higherSemester",
    keywords: ["高年级", "fachsemester", "higher semester", "转学", "semestereinstufung", "学分", "课程认可", "credit transfer"],
    text:
      "For application to a higher Fachsemester, TUM states that applicants should clarify placement and credit transfer requirements with the responsible academic advising or program office. Extra documents may include transcripts, module descriptions, grading scale and credit transfer or semester classification documents."
  }
];

function retrieveKnowledge({ question, project }, limit = 5) {
  const query = normalize(
    [
      question,
      project?.programName,
      project?.degree,
      project?.applicationType,
      project?.qualification,
      project?.country,
      project?.language,
      project?.vpd,
      project?.semester,
      project?.notes
    ].join(" ")
  );

  return chunks
    .map((chunk) => ({
      ...chunk,
      source: sources.find((source) => source.key === chunk.key),
      score: scoreChunk(query, chunk)
    }))
    .filter((chunk) => chunk.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

function scoreChunk(query, chunk) {
  return chunk.keywords.reduce((score, keyword) => {
    const normalizedKeyword = normalize(keyword);
    return query.includes(normalizedKeyword) ? score + Math.max(1, normalizedKeyword.length / 4) : score;
  }, 0);
}

function normalize(value) {
  return String(value || "").toLowerCase().replace(/\s+/g, "");
}

module.exports = { sources, chunks, retrieveKnowledge };
