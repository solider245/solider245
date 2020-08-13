(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{484:function(n,t,s){"use strict";s.r(t);var a=s(25),e=Object(a.a)({},(function(){var n=this,t=n.$createElement,s=n._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h1",{attrs:{id:"_1-概述"}},[n._v("1. 概述")]),n._v(" "),s("p",[n._v("本文记录在 Ubuntu 16.04 上将 python 升级为 3.8 版本，并配置为系统默认 python3 的过程。")]),n._v(" "),s("p",[n._v("在 Ubuntu 16.04 中，python3 的默认版本为 3.5：")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("$ python3 -V\nPython 3.5.2\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br")])]),s("p",[n._v("本文以在 Ubuntu 16.04 中安装为例，方法同样适用于 Ubuntu 18.04 。")]),n._v(" "),s("h1",{attrs:{id:"_2-通过-apt-安装"}},[n._v("2. 通过 Apt 安装")]),n._v(" "),s("p",[n._v("Ubuntu 官方 apt 库中还未收录 python 3.8，这里使用 "),s("a",{attrs:{href:"https://launchpad.net/~deadsnakes/+archive/ubuntu/ppa",target:"_blank",rel:"noopener noreferrer"}},[n._v("deadsnakes"),s("OutboundLink")],1),n._v(" PPA 库安装。")]),n._v(" "),s("h2",{attrs:{id:"_2-1-安装依赖包"}},[n._v("2.1. 安装依赖包")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("$ sudo apt update\n$ sudo apt install software-properties-common\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br")])]),s("h2",{attrs:{id:"_2-2-添加-deadsnakes-ppa-源"}},[n._v("2.2. 添加 deadsnakes PPA 源")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("$ sudo add-apt-repository ppa:deadsnakes/ppa\n\nPress [ENTER] to continue or Ctrl-c to cancel adding it.\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br")])]),s("h2",{attrs:{id:"_2-3-安装-python-3-8"}},[n._v("2.3. 安装 python 3.8")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("$ sudo apt install python3.8\n\n$ python3.8 -V\nPython 3.8.2\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br")])]),s("h1",{attrs:{id:"_3-配置-python3-8-为系统默认-python3"}},[n._v("3. 配置 python3.8 为系统默认 python3")]),n._v(" "),s("p",[s("strong",[n._v("修改默认 python3 会导致打不开 Terminal 等各种问题，解决方法见 "),s("a",{attrs:{href:"https://blog.csdn.net/threeyearsago/article/details/80276579",target:"_blank",rel:"noopener noreferrer"}},[n._v("Ubuntu16.04TLS 中终端（Terminal）无法打开的解决办法"),s("OutboundLink")],1)])]),n._v(" "),s("h2",{attrs:{id:"_3-1-将-python-各版本添加到-update-alternatives"}},[n._v("3.1. 将 python 各版本添加到 update-alternatives")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("$ which python3.8\n/usr/bin/python3.8\n\n$ sudo update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.8 1\n\n$ which python3.5\n/usr/bin/python3.5\n\n$ sudo update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.5 2\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br")])]),s("h2",{attrs:{id:"_3-2-配置-python3-默认指向-python3-8"}},[n._v("3.2. 配置 python3 默认指向 python3.8")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("$ sudo update-alternatives --config python3\n\nThere are 2 choices for the alternative python3 (providing /usr/bin/python3).\n\n  Selection    Path                Priority   Status\n------------------------------------------------------------\n* 0            /usr/bin/python3.5   2         auto mode\n  1            /usr/bin/python3.5   2         manual mode\n  2            /usr/bin/python3.8   1         manual mode\n\nPress <enter> to keep the current choice[*], or type selection number: 2\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br")])]),s("p",[n._v("选择/输入 2, 回车。")]),n._v(" "),s("h2",{attrs:{id:"_3-3-测试-python-版本"}},[n._v("3.3 测试 python 版本")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("$ python3 -V\n\nPython 3.8.2\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br")])]),s("h1",{attrs:{id:"资源"}},[n._v("资源")]),n._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://linuxize.com/post/how-to-install-python-3-8-on-ubuntu-18-04/",target:"_blank",rel:"noopener noreferrer"}},[n._v("How to Install Python 3.8 on Ubuntu 18.04"),s("OutboundLink")],1)]),n._v(" "),s("li",[s("a",{attrs:{href:"https://www.itsupportwale.com/blog/how-to-upgrade-to-python-3-7-on-ubuntu-18-10/",target:"_blank",rel:"noopener noreferrer"}},[n._v("How to upgrade to python 3.7 on Ubuntu 18.10"),s("OutboundLink")],1)]),n._v(" "),s("li",[s("a",{attrs:{href:"https://segmentfault.com/a/1190000021967408",target:"_blank",rel:"noopener noreferrer"}},[n._v("如何将 Ubuntu 16 和 18 上的 python 升级到最新 3.8 版 - 个人文章 - SegmentFault 思否"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=e.exports}}]);