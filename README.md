# TUM AI 申请咨询助手

这是一个中文 TUM 申请咨询 Demo：面向准备申请 TUM 的学生，提供申请路径判断、材料清单自查、VPD、APS、语言证明、高年级入学和 TUMonline 常见问题答疑。

它不是官方工具，也不直接代表 TUM。项目里的内容基于 TUM 官网公开信息整理，最终要求必须以 TUM 官网、具体专业页面和 TUMonline 材料清单为准。

在线 Demo：

https://tum-ai-studienberatung-nez9.vercel.app

## 为什么比 RAG 项目更适合入门

这个项目不用向量数据库、不用文档切片、不用复杂后端。核心是：

```text
申请画像 -> 申请路径判断 -> 风险提示 -> 个性化材料清单 -> 问答建议 -> 官方链接
```

简历上可以写：

> Built a Chinese TUM applicant advising assistant with profile-based route selection, document checklist self-check, rule-based Q&A, VPD/APS guidance, higher-semester application support, official-source citations, and Vercel deployment.

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

- 申请画像选择：Bachelor / Master、学历来源、学历国家、授课语言、VPD 状态、目标学期
- 申请路径总览：TUMonline、VPD、特殊流程和准备度摘要
- 重点风险提示：VPD、APS、高年级入学、语言证明等风险自动识别
- 中文申请问答助手
- 常见问题快捷提问
- 个性化材料清单
- 每个材料项附带相关 TUM 官方来源入口
- TUM 官方 Dokumentenglossar 术语库摘要
- 更高 Fachsemester 申请提醒
- 申请准备度估算
- 申请流程地图
- 复制申请计划：把当前申请画像、下一步和风险点复制成文字
- 本地保存申请画像：刷新页面后保留上次选择
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
