(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{426:function(s,t,a){"use strict";a.r(t);var n=a(25),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[a("img",{attrs:{src:"https://rock-it.pl/content/images/2017/05/compose.png",alt:"借助Dockerize更好的Docker体验"}})]),s._v(" "),a("p",[s._v("我的Docker映像和docker-compose配置遇到一些问题。 让我们分析以下 "),a("code",[s._v("docker-compose.yml")]),s._v(" 文件：")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("database")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" postgres\n\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("application")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" registry.example.com/our"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("application\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("command")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" node\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token datetime number"}},[s._v("80:80")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("您在这里看到任何问题吗？ 可能不是，因为文件完全可以。 但是有问题！")]),s._v(" "),a("p",[s._v("当您运行时 "),a("code",[s._v("docker-compose up")]),s._v(" ，docker会同时启动所有容器。 而且 "),a("strong",[s._v("还有一场比赛")]),s._v(" -应用程序试图连接到数据库，这可能是仍在初始化。 对不可用数据库的典型反应是崩溃。 而且由于比赛，您可能不会每次都看到这个。 中间解决方案是将其添加 "),a("code",[s._v("restart: always")]),s._v(" 到我们的应用程序配置中，然后重试直到数据库开始响应为止。 我们可以做得更好吗？ 当然。")]),s._v(" "),a("h2",{attrs:{id:"dockerize"}},[s._v("Dockerize")]),s._v(" "),a("p",[s._v("我找到了一个很好的小工具来解决此类问题。 它称为Dockerize，可以在 "),a("a",{attrs:{href:"https://github.com/jwilder/dockerize",target:"_blank",rel:"noopener noreferrer"}},[s._v("Github"),a("OutboundLink")],1),s._v(" 上找到 。")]),s._v(" "),a("p",[s._v("首先，我们需要添加到我们的应用程序中 "),a("code",[s._v("Dockerfile")]),s._v(" （从README复制）：")]),s._v(" "),a("div",{staticClass:"language-docker line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-docker"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENV")]),s._v(" DOCKERIZE_VERSION v0.4.0\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" wget https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("linux"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("amd64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("$DOCKERIZE_VERSION.tar.gz \\\n    && tar "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("C /usr/local/bin "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("xzvf dockerize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("linux"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("amd64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("$DOCKERIZE_VERSION.tar.gz \\\n    && rm dockerize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("linux"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("amd64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("$DOCKERIZE_VERSION.tar.gz\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("接下来，让我们修改 "),a("code",[s._v("docker-compose.yml")]),s._v(" 文件：")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("...")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("application")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" registry.example.com/our"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("application\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("command")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" dockerize "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("wait tcp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//database"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("5432 node\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("...")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("没有更多的种族！ Dockerize将命令的启动延迟到数据库 "),a("strong",[s._v("可用")]),s._v(" 为止 。 不仅仅是开始-它正在等待连接。 这是Dockerize和 "),a("a",{attrs:{href:"https://docs.docker.com/compose/compose-file/#dependson",target:"_blank",rel:"noopener noreferrer"}},[s._v("depends_on"),a("OutboundLink")],1),s._v(" 之间的 "),a("a",{attrs:{href:"https://docs.docker.com/compose/compose-file/#dependson",target:"_blank",rel:"noopener noreferrer"}},[s._v("区别"),a("OutboundLink")],1),s._v(" 。")]),s._v(" "),a("p",[s._v("在其核心中，Dockerize是一个包装器。 "),a("code",[s._v("dockerize our_normal_command")]),s._v(" 只是调用我们的命令。 但是，可选地，我们可以添加参数以 "),a("strong",[s._v("延迟执行")]),s._v(" ， "),a("strong",[s._v("执行文件模板化")]),s._v(" 或 "),a("strong",[s._v("将输出从文件重定向到STDOUT / STDERR")]),s._v(" 。 在Docker世界中非常常见且有用的操作。")]),s._v(" "),a("p",[s._v("例子：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# redirect files to stdout and stderr")]),s._v("\ndockerize "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -stdout info.log "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -stdout perf.log "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# wait for 2 services with 10s timeout")]),s._v("\ndockerize "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -wait tcp://db:5432 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -wait http://web:80 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -timeout 10s "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# template option")]),s._v("\ndockerize "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -template nginx.tmpl:nginx.conf "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("p",[s._v("模板示例（使用GO "),a("a",{attrs:{href:"https://golang.org/pkg/text/template/",target:"_blank",rel:"noopener noreferrer"}},[s._v("模板语法"),a("OutboundLink")],1),s._v(" ）：")]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[s._v("http "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n server_name "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("HOST "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n port "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("PORT "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n location "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  proxy_pass http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("UPSTREAM "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"结论"}},[s._v("结论")]),s._v(" "),a("p",[s._v("我长期使用Dockerize，这确实使我的生活更轻松。 如果您有类似的问题，建议您尝试一下。")])])}),[],!1,null,null,null);t.default=e.exports}}]);