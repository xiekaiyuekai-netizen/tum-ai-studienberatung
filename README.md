# TUM AI 申请咨询助手

这是一个相对简单的中文 Demo：面向准备申请 TUM 的学生，提供申请流程、材料清单、VPD、APS、语言证明和 TUMonline 常见问题答疑。

它不是官方工具，也不直接代表 TUM。项目里的内容基于 TUM 官网公开信息整理，最终要求必须以 TUM 官网、具体专业页面和 TUMonline 材料清单为准。

## 为什么比 RAG 项目更适合入门

这个项目不用向量数据库、不用文档切片、不用复杂后端。核心是：

```text
申请画像 -> 规则匹配 -> 个性化材料清单 -> 问答建议 -> 官方链接
```

简历上可以写：

> Built a Chinese applicant advising assistant for TUM prospective students, with profile-based checklists, rule-based Q&A, application timeline, VPD/APS guidance, and official-source linking.

## 本地运行

```bash
node server.js
```

然后打开：

```text
http://localhost:4273
```

也可以运行：

```bash
npm.cmd start
```

## 在线部署

推荐使用 Vercel：

1. 打开 https://vercel.com
2. 使用 GitHub 登录
3. 点击 `Add New Project`
4. 选择 `xiekaiyuekai-netizen/tum-ai-studienberatung`
5. Framework Preset 选择 `Other`
6. Build Command 留空
7. Output Directory 留空
8. 点击 `Deploy`

这个项目是静态页面，不依赖后端 API。Vercel 会直接托管 `index.html`、`src/app.js` 和 `src/styles.css`。

## 功能

- 申请画像选择：Bachelor / Master、学历来源、学历国家、授课语言、VPD 状态、目标学期
- 中文申请问答助手
- 常见问题快捷提问
- 个性化材料清单
- TUM 官方 Dokumentenglossar 术语库摘要
- 更高 Fachsemester 申请提醒
- 申请准备度估算
- 申请流程地图
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
