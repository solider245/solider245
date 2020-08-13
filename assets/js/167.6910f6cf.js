(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{423:function(s,t,a){"use strict";a.r(t);var n=a(25),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#快速开始"}},[s._v("快速开始")])]),a("li",[a("a",{attrs:{href:"#术语"}},[s._v("术语")])]),a("li",[a("a",{attrs:{href:"#配置"}},[s._v("配置")]),a("ul",[a("li",[a("a",{attrs:{href:"#on"}},[s._v("on")])]),a("li",[a("a",{attrs:{href:"#jobs"}},[s._v("jobs")])]),a("li",[a("a",{attrs:{href:"#jobs-job-id-needs"}},[s._v("jobs."),a("job_id",[s._v(".needs")])],1)]),a("li",[a("a",{attrs:{href:"#jobs-job-id-runs-on"}},[s._v("jobs."),a("job_id",[s._v(".runs\\-on")])],1)]),a("li",[a("a",{attrs:{href:"#jobs-job-id-steps"}},[s._v("jobs."),a("job_id",[s._v(".steps")])],1)]),a("li",[a("a",{attrs:{href:"#jobs-job-id-steps-name"}},[s._v("jobs."),a("job_id",[s._v(".steps.name")])],1)]),a("li",[a("a",{attrs:{href:"#jobs-job-id-steps-run"}},[s._v("jobs."),a("job_id",[s._v(".steps.run")])],1)]),a("li",[a("a",{attrs:{href:"#jobs-job-id-steps-uses"}},[s._v("jobs."),a("job_id",[s._v(".steps.uses")])],1)])])]),a("li",[a("a",{attrs:{href:"#secret-and-context"}},[s._v("secret and context")])]),a("li",[a("a",{attrs:{href:"#实践自动部署"}},[s._v("实践自动部署")])]),a("li",[a("a",{attrs:{href:"#关注我"}},[s._v("关注我")])])])]),s._v("\n自从 "),a("code",[s._v("github")]),s._v(" 提供了 "),a("code",[s._v("github actions")]),s._v(" 后，个人或者依赖于 "),a("code",[s._v("github")]),s._v(" 的公司可以考虑把持续集成方案迁到 "),a("code",[s._v("github actions")]),s._v("。"),a("p"),s._v(" "),a("p",[a("code",[s._v("github")]),s._v(" 会提供一个以下配置的服务器做为 runner，可以说相当良心了。")]),s._v(" "),a("ul",[a("li",[s._v("2-core CPU")]),s._v(" "),a("li",[s._v("7 GB of RAM memory")]),s._v(" "),a("li",[s._v("14 GB of SSD disk space")])]),s._v(" "),a("p",[s._v("另外如果你有网络时延的需求，（比如推送及拉取镜像时产生的网络时延），你也可以自建 runner。")]),s._v(" "),a("p",[s._v("本文将介绍 "),a("code",[s._v("github actions")]),s._v(" 的用法，以及如何使用它自动部署个人博客或者前端应用")]),s._v(" "),a("h2",{attrs:{id:"快速开始"}},[a("strong",[s._v("快速开始")])]),s._v(" "),a("p",[s._v("在 "),a("code",[s._v("github")]),s._v(" 上进入个人仓库，找到 "),a("code",[s._v("Actions")]),s._v(" 的标签页")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://pic1.zhimg.com/v2-cf553a1068953c1f2865f620baa95c4a_b.jpg",alt:""}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://pic1.zhimg.com/80/v2-cf553a1068953c1f2865f620baa95c4a_720w.jpg",alt:""}})]),s._v(" "),a("p",[s._v("如果你是一个前端项目，可以使用 "),a("code",[s._v("Node.js")]),s._v(" 的模板，点击 "),a("code",[s._v("Set up this workflow")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://pic4.zhimg.com/v2-93f521330d963d903561c0575d2d8fac_b.jpg",alt:""}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://pic4.zhimg.com/80/v2-93f521330d963d903561c0575d2d8fac_720w.jpg",alt:""}})]),s._v(" "),a("p",[s._v("此时生成了一个文件 "),a("code",[s._v(".github/workflows/nodejs.yaml")]),s._v("，修改内容如下")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Git Action Test\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("push"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("jobs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("runs-on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ubuntu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("latest\n\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("steps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" actions/checkout@v1\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Use Node.js 10.x\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" actions/setup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("node@v1\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("node-version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 10.x\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" npm install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" build\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token scalar string"}},[s._v("\n        npm install\n        npm run build --if-present")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("env")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("CI")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("p",[s._v("执行 "),a("code",[s._v("git push")]),s._v(" 操作，此时可以在 "),a("code",[s._v("github")]),s._v(" 的 "),a("code",[s._v("Actions")]),s._v(" 标签页看到执行结果")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://picb.zhimg.com/v2-19ad2451d928d22e14a714e3f8c24a80_b.jpg",alt:""}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://picb.zhimg.com/80/v2-19ad2451d928d22e14a714e3f8c24a80_720w.jpg",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"术语"}},[a("strong",[s._v("术语")])]),s._v(" "),a("ul",[a("li",[a("code",[s._v("runner")]),s._v(": github 分配的用来执行 CI/CD 的构建服务器 (也可以自建 runner)")]),s._v(" "),a("li",[a("code",[s._v("workflow")]),s._v(": CI/CD 的工作流")]),s._v(" "),a("li",[a("code",[s._v("job")]),s._v(": 任务，比如构建，测试和部署。每个 "),a("code",[s._v("workflow")]),s._v(" 由多个 "),a("code",[s._v("job")]),s._v(" 组成")]),s._v(" "),a("li",[a("code",[s._v("step")]),s._v(": 每个 "),a("code",[s._v("job")]),s._v(" 由多个 "),a("code",[s._v("step")]),s._v(" 组成")])]),s._v(" "),a("h2",{attrs:{id:"配置"}},[a("strong",[s._v("配置")])]),s._v(" "),a("p",[s._v("参考官方文档: "),a("strong",[s._v("Workflow syntax for GitHub Actions[1]")])]),s._v(" "),a("h3",{attrs:{id:"on"}},[a("strong",[s._v("on")])]),s._v(" "),a("p",[s._v("该 CI/CD 触发时的事件。如果需要上传代码自动部署的功能时，应该选择 "),a("code",[s._v("on: push")])]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" push\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("更多事件可以参考官方文档 "),a("strong",[s._v("Events that trigger workflows[2]")])]),s._v(" "),a("p",[s._v("另外，我们可以利用 "),a("code",[s._v("issues")]),s._v(" 事件做很多事情，如邮件通知之类")]),s._v(" "),a("blockquote",[a("p",[s._v("如果是 Issue 类博客，则可以通过监听 "),a("code",[s._v("issues.opened")]),s._v(" 事件，调用 "),a("code",[s._v("github api")]),s._v("，自动生成网址博客")])]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("issues")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("types")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("opened"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" edited"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" milestoned"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"jobs"}},[a("strong",[s._v("jobs")])]),s._v(" "),a("p",[s._v("一个 CI/CD 的工作流有许多 "),a("code",[s._v("jobs")]),s._v(" 组成，比如最典型的 job 是 "),a("code",[s._v("lint")]),s._v("，"),a("code",[s._v("test")]),s._v("，"),a("code",[s._v("build")]),s._v(" 或者 "),a("code",[s._v("deploy")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("jobs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("deploy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("所有的 "),a("code",[s._v("job")]),s._v(" 都是并行的，但往往会有依赖关系："),a("strong",[s._v("你总得通过测试了，才能再去部署吧")])]),s._v(" "),a("h3",{attrs:{id:"jobs-job-id-needs"}},[a("strong",[s._v("jobs.<job_id>.needs")])]),s._v(" "),a("p",[a("code",[s._v("needs")]),s._v(" 确定 "),a("code",[s._v("job")]),s._v(" 的依赖关系")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("jobs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("deploy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("needs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" test\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"jobs-job-id-runs-on"}},[a("strong",[s._v("jobs.<job_id>.runs-on")])]),s._v(" "),a("p",[s._v("当你使用 "),a("code",[s._v("github actions")]),s._v(" 时，github 会十分大方的给你分配一个配置还不错的服务器作为构建服务器，用来跑你的 "),a("code",[s._v("workflow")])]),s._v(" "),a("ul",[a("li",[s._v("2-core CPU")]),s._v(" "),a("li",[s._v("7 GB of RAM memory")]),s._v(" "),a("li",[s._v("14 GB of SSD disk space")])]),s._v(" "),a("p",[s._v("恩，比我自己的服务器要强")]),s._v(" "),a("p",[s._v("使用 "),a("code",[s._v("runs-on")]),s._v(" 指定服务器系统，用的最多的应该就是 "),a("code",[s._v("ubuntu-latest")]),s._v(" 了")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("runs-on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ubuntu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("latest\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("runs-on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" windows"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("latest\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"jobs-job-id-steps"}},[a("strong",[s._v("jobs.<job_id>.steps")])]),s._v(" "),a("p",[s._v("即某个任务的一系列动作，如部署一个前端需要安装依赖，编译代码等等")]),s._v(" "),a("h3",{attrs:{id:"jobs-job-id-steps-name"}},[a("strong",[s._v("jobs.<job_id>.steps.name")])]),s._v(" "),a("p",[s._v("为 step 指定一个名称，将会在 "),a("code",[s._v("github action")]),s._v(" 的控制台中显示")]),s._v(" "),a("h3",{attrs:{id:"jobs-job-id-steps-run"}},[a("strong",[s._v("jobs.<job_id>.steps.run")])]),s._v(" "),a("p",[s._v("该 step 需要在 "),a("code",[s._v("shell")]),s._v(" 中执行的命令")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 单行")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Install Dependencies\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" npm install\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 多行")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Install and Build\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token scalar string"}},[s._v("\n    npm install\n    npm run build")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h3",{attrs:{id:"jobs-job-id-steps-uses"}},[a("strong",[s._v("jobs.<job_id>.steps.uses")])]),s._v(" "),a("p",[s._v("选择一个 "),a("code",[s._v("action")]),s._v("，可以理解为若干 "),a("code",[s._v("steps.run")]),s._v("，有利于代码复用。这也是 "),a("code",[s._v("github action")]),s._v(" 最主要的功能。")]),s._v(" "),a("p",[s._v("如果你想找一个好用的 "),a("code",[s._v("github action")]),s._v("，可以在 "),a("code",[s._v("github marketplace")]),s._v(" 浏览并检索")]),s._v(" "),a("p",[s._v("这是一个在当前操作系统中安装 "),a("code",[s._v("node:10")]),s._v(" 的 action 示例")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" use Node.js 10.x\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" actions/setup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("node@v1\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("node-version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 10.x\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("当然，这里怎么能少得了 "),a("code",[s._v("docker")]),s._v(" 的身影呢，在 "),a("code",[s._v("actions")]),s._v(" 中也可以使用 "),a("code",[s._v("docker")]),s._v("。如果对 "),a("code",[s._v("docker")]),s._v(" 不太了解，可以看我的文章: "),a("strong",[s._v("docker 简易入门[3]")])]),s._v(" "),a("p",[s._v("以下是 "),a("code",[s._v("npm install")]),s._v(" 的一个示例")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("jobs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("steps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Install\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" docker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("alpine\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("args")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" npm install\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"secret-and-context"}},[a("strong",[s._v("secret and context")])]),s._v(" "),a("p",[s._v("如何在 "),a("code",[s._v("github action")]),s._v(" 上访问敏感数据？如使用 "),a("code",[s._v("ssh")]),s._v(" 登录时如何维护密码。")]),s._v(" "),a("p",[s._v("我们可以在 github repo 上依次点击 "),a("code",[s._v("Settings")]),s._v(" -> "),a("code",[s._v("Secrets")]),s._v(" 设置 "),a("code",[s._v("secret")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://pic1.zhimg.com/v2-51c0ee11b4bc61312d8e1af14d906432_b.jpg",alt:""}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://pic1.zhimg.com/80/v2-51c0ee11b4bc61312d8e1af14d906432_720w.jpg",alt:""}})]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" setup aliyun oss\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" manyuanrong/setup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("ossutil@master\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("endpoint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" oss"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("cn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("beijing.aliyuncs.com\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("access-key-id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" secrets.OSS_KEY_ID "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("access-key-secret")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" secrets.OSS_KEY_SECRET "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("这里的 "),a("code",[s._v("secret")]),s._v(" 就是一种 "),a("code",[s._v("context")]),s._v("，描述 CI/CD 一个 "),a("code",[s._v("workflow")]),s._v(" 中的上下文信息，使用 "),a("code",[s._v("$"+s._s(s.expression))]),s._v(" 语法表示。除了 "),a("code",[s._v("secret")]),s._v("，还有")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("github")]),s._v(": "),a("code",[s._v("workflow")]),s._v(" 的信息，如 "),a("code",[s._v("github.sha")]),s._v(" 可以获取当前的 "),a("code",[s._v("commit SHA")]),s._v("，我们可以利用它为 "),a("code",[s._v("sentry")]),s._v(" 或者 "),a("code",[s._v("docker image")]),s._v(" 打入版本号")]),s._v(" "),a("li",[a("code",[s._v("env")]),s._v(": 环境变量")]),s._v(" "),a("li",[a("code",[s._v("job")]),s._v(": 当前执行 "),a("code",[s._v("job")]),s._v(" 的信息，如 "),a("code",[s._v("job.status")]),s._v(" 表示当前 "),a("code",[s._v("job")]),s._v(" 的执行状态")]),s._v(" "),a("li",[a("code",[s._v("matrix")]),s._v(": 描述一些构建信息，如 "),a("code",[s._v("node")]),s._v(" 以及 "),a("code",[s._v("os")]),s._v(" 版本号")])]),s._v(" "),a("p",[s._v("更多 "),a("code",[s._v("context")]),s._v(" 信息可以参考官方文档 "),a("strong",[s._v("Contexts and expression syntax for GitHub Actions[4]")])]),s._v(" "),a("h2",{attrs:{id:"实践自动部署"}},[a("strong",[s._v("实践自动部署")])]),s._v(" "),a("p",[s._v("我的博客目前托管在阿里云 OSS 上，以下 "),a("code",[s._v("action.yaml")]),s._v(" 描述了自动部署的流程。可以参考我的配置 "),a("strong",[s._v("shfshanyue/blog[5]")])]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" deploy to aliyun oss\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("push"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("jobs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("runs-on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ubuntu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("latest\n\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("steps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切代码到 runner")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" actions/checkout@v1\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("submodules")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载 git submodule")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" srt32/git"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("actions@v0.0.3\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("args")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" git submodule update "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("init "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("recursive\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用 node:10")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" use Node.js 10.x\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" actions/setup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("node@v1\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("node-version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 10.x\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# npm install")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" npm install and build\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token scalar string"}},[s._v("\n        npm install\n        npm run build")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("env")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("CI")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置阿里云OSS的 id/secret，存储到 github 的 secrets 中")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" setup aliyun oss\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" manyuanrong/setup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("ossutil@master\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("endpoint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" oss"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("cn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("beijing.aliyuncs.com\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("access-key-id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" secrets.OSS_KEY_ID "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("access-key-secret")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" secrets.OSS_KEY_SECRET "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" cp files to aliyun\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ossutil cp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("rf .vuepress/dist oss"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//shanyue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("blog/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br")])]),a("p",[s._v("部署成功")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://pic1.zhimg.com/v2-eb8d8c879343cb39b102b7ebcabcda0a_b.jpg",alt:""}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://pic1.zhimg.com/80/v2-eb8d8c879343cb39b102b7ebcabcda0a_720w.jpg",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"关注我"}},[a("strong",[s._v("关注我")])])])}),[],!1,null,null,null);t.default=e.exports}}]);