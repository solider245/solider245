(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{502:function(s,t,a){"use strict";a.r(t);var e=a(25),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#官方仓库，国内镜像仓库，私有仓库应该如何选择？"}},[s._v("官方仓库，国内镜像仓库，私有仓库应该如何选择？")])]),a("li",[a("a",{attrs:{href:"#发布到dockerhub"}},[s._v("发布到dockerhub")]),a("ul",[a("li",[a("a",{attrs:{href:"#注册账号"}},[s._v("注册账号")])]),a("li",[a("a",{attrs:{href:"#登录帐号"}},[s._v("登录帐号")])]),a("li",[a("a",{attrs:{href:"#镜像命名规范"}},[s._v("镜像命名规范")])]),a("li",[a("a",{attrs:{href:"#镜像改名"}},[s._v("镜像改名")])])])])])]),a("p"),s._v(" "),a("blockquote",[a("p",[s._v("最近制作镜像，发现了这个问题，写下来防止忘记")])]),s._v(" "),a("h2",{attrs:{id:"官方仓库，国内镜像仓库，私有仓库应该如何选择？"}},[s._v("官方仓库，国内镜像仓库，私有仓库应该如何选择？")]),s._v(" "),a("p",[s._v("如果没有强烈的发布需求，建议直接使用国内各个云服务的共有仓库。比如腾讯云就发布到腾讯云仓库。阿里云就发布到阿里云仓库。如果制作了镜像想发布到官方仓库，那就发。国内链接速度比较慢。一旦镜像比较大，推送的速度会让你抓狂。")]),s._v(" "),a("h2",{attrs:{id:"发布到dockerhub"}},[s._v("发布到dockerhub")]),s._v(" "),a("h3",{attrs:{id:"注册账号"}},[s._v("注册账号")]),s._v(" "),a("p",[s._v("先到"),a("a",{attrs:{href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("dockerhub"),a("OutboundLink")],1),s._v("官方注册一个帐号。这样的话，你帐号下面就会有一个以你的名字命名的公有仓库。因为如果你要将镜像推送到dockerhub，那么你所有的镜像都要符合仓库的命名规范。")]),s._v(" "),a("h3",{attrs:{id:"登录帐号"}},[s._v("登录帐号")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker login\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("然后依次输入你注册时的名字和密码，链接成功后就可以了。")]),s._v(" "),a("h3",{attrs:{id:"镜像命名规范"}},[s._v("镜像命名规范")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("dokcer push solider245/ubuntu:20.04-CN \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker push 你的名字/镜像名字:镜像标签")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("如上所示，上面就是一个标准的，符合推送的命名规范的镜像。给大家解析下：")]),s._v(" "),a("ul",[a("li",[s._v("docker push  镜像推送命令")]),s._v(" "),a("li",[s._v("solider245 你的用户名")]),s._v(" "),a("li",[s._v("ubuntu 镜像名字")]),s._v(" "),a("li",[s._v("tag 镜像标签")])]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("用户名和镜像名用/隔开")])]),s._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("DETAILS")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("▶ docker push --help\n\nUsage:  docker push "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OPTIONS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" NAME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(":TAG"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\nPush an image or a repository to a registry\n\nOptions:\n      --disable-content-trust   Skip image signing "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])])]),s._v(" "),a("blockquote",[a("p",[s._v("你也可以查看官方的的解释")])]),s._v(" "),a("h3",{attrs:{id:"镜像改名"}},[s._v("镜像改名")]),s._v(" "),a("p",[s._v("如果我们的镜像名称不符合推送的规范，那么我们就需要来改名了。\n改名我们使用\n"),a("code",[s._v("docker tag")])]),s._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("DETAILS")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v(" docker tag --help                                    \n\nUsage:  docker tag SOURCE_IMAGE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(":TAG"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" TARGET_IMAGE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(":TAG"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\nCreate a tag TARGET_IMAGE that refers to SOURCE_IMAGE\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])]),s._v(" "),a("p",[s._v("上面就是官方的用法.")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("docker tag ubuntu:20.04-CN solider245/ubuntu:20.04-CN\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("如上所示。")]),s._v(" "),a("p",[s._v("其他仓库部署可以参考这篇文章\n"),a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/88200038",target:"_blank",rel:"noopener noreferrer"}},[s._v("震惊 | 只需3分钟！极速部署个人Docker云平台 - 知乎"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);