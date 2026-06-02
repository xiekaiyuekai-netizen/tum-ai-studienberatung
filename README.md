# TUM AI 申请咨询助手

这是一个中文 TUM 申请咨询 Demo：把申请咨询做成类似 ChatGPT 的 Project 工作区。申请者先为目标专业新建 Project，填写专业、学位阶段、申请类型、学历背景、授课语言、VPD 状态等信息，然后在该 Project 内进行连续问答。

如果申请不同专业，用户应创建不同 Project。每个 Project 会保存独立的专业信息和聊天记录，避免不同专业的材料要求、截止日期和申请流程混在一起。

它不是官方工具，也不直接代表 TUM。项目里的内容基于 TUM 官网公开信息整理，最终要求必须以 TUM 官网、具体专业页面和 TUMonline 材料清单为准。

在线 Demo：

https://tum-ai-studienberatung-nez9.vercel.app

## 为什么比 RAG 项目更适合入门

这个项目不用向量数据库、不用文档切片、不用复杂后端。核心是：

```text
新建 Project -> 填写专业信息 -> 基于 Project 背景提问 -> 生成建议 -> 官方来源链接
```

简历上可以写：

> Built a ChatGPT-style Chinese TUM application advising assistant with project-based application profiles, independent chat histories for different programs, rule-based Q&A, VPD/APS and higher-semester guidance, official-source links, and Vercel deployment.

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
6. Build Command 留空
7. Output Directory 使用 `public`
8. 点击 `Deploy`

这个项目是静态页面，不依赖后端 API。仓库里提交了 `public/` 静态产物，Vercel 只需要托管 `public`。本地的开发服务器放在 `scripts/local-server.js`，不会作为 Vercel Serverless Function 运行。

## 功能

- ChatGPT 风格单窗口对话界面
- Project 管理：不同申请专业使用不同 Project
- 每个 Project 独立保存专业信息和聊天记录
- 申请专业输入支持 TUM 专业选项搜索，输入关键词即可匹配常见 TUM Bachelor / Master 项目
- Project 信息包含：Bachelor / Master、专业名称、申请类型、学历来源、国家/地区、授课语言、VPD 状态、目标学期、deadline 和备注
- 基于当前 Project 背景回答 VPD、APS、语言证明、材料格式、高年级入学、录取程序和 Immatrikulation 问题
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
