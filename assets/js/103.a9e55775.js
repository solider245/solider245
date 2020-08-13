(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{463:function(n,s,e){"use strict";e.r(s);var a=e(25),t=Object(a.a)({},(function(){var n=this,s=n.$createElement,e=n._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("p",[n._v("在使用 "),e("code",[n._v("npm")]),n._v(" 命令安装组件的时候，经常会报 "),e("code",[n._v("权限不足")]),n._v(" 的错误："),e("code",[n._v("Error: EACCES: permission denied")]),n._v(" ，虽然用 "),e("code",[n._v("sudo")]),n._v(" 可以解决问题，但都只是暂时的；")]),n._v(" "),e("h2",{attrs:{id:"错误信息"}},[n._v("错误信息")]),n._v(" "),e("div",{staticClass:"language-markdown line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-markdown"}},[e("code",[n._v("npm WARN checkPermissions Missing write access to /usr/local/lib/node"),e("span",{pre:!0,attrs:{class:"token italic"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("_")]),e("span",{pre:!0,attrs:{class:"token content"}},[n._v("modules\nnpm ERR! path /usr/local/lib/node")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("_")])]),n._v("modules\nnpm ERR! code EACCES\nnpm ERR! errno -13\nnpm ERR! syscall access\nnpm ERR! Error: EACCES: permission denied, access '/usr/local/lib/node"),e("span",{pre:!0,attrs:{class:"token italic"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("_")]),e("span",{pre:!0,attrs:{class:"token content"}},[n._v("modules'\nnpm ERR!  { [Error: EACCES: permission denied, access '/usr/local/lib/node")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("_")])]),n._v("modules']\nnpm ERR!   stack:\nnpm ERR!    'Error: EACCES: permission denied, access \\'/usr/local/lib/node"),e("span",{pre:!0,attrs:{class:"token italic"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("_")]),e("span",{pre:!0,attrs:{class:"token content"}},[n._v("modules\\'',\nnpm ERR!   errno: -13,\nnpm ERR!   code: 'EACCES',\nnpm ERR!   syscall: 'access',\nnpm ERR!   path: '/usr/local/lib/node")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("_")])]),n._v("modules' }\nnpm ERR!\nnpm ERR! The operation was rejected by your operating system.\nnpm ERR! It is likely you do not have the permissions to access this file as the current user\nnpm ERR!\nnpm ERR! If you believe this might be a permissions issue, please double-check the\nnpm ERR! permissions of the file and its containing directories, or try running\nnpm ERR! the command again as root/Administrator (though this is not recommended).\n\nnpm ERR! A complete log of this run can be found in:\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br")])]),e("h2",{attrs:{id:"解决方法"}},[n._v("解决方法")]),n._v(" "),e("ul",[e("li",[n._v("官方的"),e("a",{attrs:{href:"https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally",target:"_blank",rel:"noopener noreferrer"}},[n._v("解决方案"),e("OutboundLink")],1)]),n._v(" "),e("li",[n._v("里面有"),e("code",[n._v("两种")]),n._v("方法")])]),n._v(" "),e("ol",[e("li",[n._v("重装 version manager")]),n._v(" "),e("li",[n._v("改变 npm 的默认路径")])]),n._v(" "),e("h2",{attrs:{id:"全局安装软件包时解决eacces权限错误"}},[e("a",{attrs:{href:"https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally",target:"_blank",rel:"noopener noreferrer"}},[n._v("全局安装软件包时解决EACCES权限错误"),e("OutboundLink")],1)]),n._v(" "),e("p",[n._v("如果 "),e("code",[n._v("EACCES")]),n._v(" 在尝试 "),e("a",{attrs:{href:"https://docs.npmjs.com/downloading-and-installing-packages-globally",target:"_blank",rel:"noopener noreferrer"}},[n._v("全局安装软件包"),e("OutboundLink")],1),n._v(" 时 看到 错误 ，则可以：")]),n._v(" "),e("ul",[e("li",[n._v("使用节点版本管理器重新安装npm（推荐），")])]),n._v(" "),e("p",[n._v("要么")]),n._v(" "),e("ul",[e("li",[n._v("手动更改npm的默认目录")])]),n._v(" "),e("h2",{attrs:{id:"重新安装npm与节点版本管理-§"}},[e("a",{attrs:{href:"#reinstall-npm-with-a-node-version-manager"}},[n._v("重新安装NPM与节点版本管理 §")])]),n._v(" "),e("p",[n._v("这是避免权限问题的最佳方法。 要使用节点版本管理器重新安装npm，请按照“ "),e("a",{attrs:{href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm",target:"_blank",rel:"noopener noreferrer"}},[n._v("下载并安装Node.js和npm"),e("OutboundLink")],1),n._v(" ”中 的步骤进行操作 。 在安装节点版本管理器之前，不需要删除当前版本的npm或Node.js。")]),n._v(" "),e("h2",{attrs:{id:"手动更改npm的默认目录-§"}},[e("a",{attrs:{href:"#manually-change-npms-default-directory"}},[n._v("手动更改npm的默认目录 §")])]),n._v(" "),e("p",[n._v("注意： 本部分不适用于Microsoft Windows。")]),n._v(" "),e("p",[n._v("为了最大程度地减少权限错误的可能性，您可以将npm配置为使用其他目录。 在此示例中，您将在主目录中创建并使用隐藏目录。")]),n._v(" "),e("ol",[e("li",[e("p",[n._v("备份您的计算机。")])]),n._v(" "),e("li",[e("p",[n._v("在命令行的主目录中，为全局安装创建目录：")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v(" mkdir ~/.npm-global\n\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br")])])]),n._v(" "),e("li",[e("p",[n._v("配置npm以使用新的目录路径：")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v(" npm config set prefix '~/.npm-global'\n\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br")])])]),n._v(" "),e("li",[e("p",[n._v("在您喜欢的文本编辑器中，打开或创建一个 "),e("code",[n._v("~/.profile")]),n._v(" 文件并添加以下行：")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v(" export PATH=~/.npm-global/bin:$PATH\n\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br")])])]),n._v(" "),e("li",[e("p",[n._v("在命令行上，更新系统变量：")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v(" source ~/.profile\n\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br")])])]),n._v(" "),e("li",[e("p",[n._v("要测试新配置，请在不使用的情况下全局安装软件包 "),e("code",[n._v("sudo")]),n._v(" ：")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v(" npm install -g jshint\n\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br")])])])]),n._v(" "),e("p",[n._v("可以使用相应的ENV变量代替步骤2-4（例如，如果您不想修改 "),e("code",[n._v("~/.profile")]),n._v(" ）：")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("    NPM_CONFIG_PREFIX=~/.npm-global\n\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br")])]),e("h2",{attrs:{id:"npx：运行全局命令的替代方法"}},[n._v("npx：运行全局命令的替代方法")]),n._v(" "),e("p",[n._v("如果使用的是npm 5.2或更高版本，则可能要考虑 "),e("a",{attrs:{href:"https://www.npmjs.com/package/npx",target:"_blank",rel:"noopener noreferrer"}},[n._v("使用npx"),e("OutboundLink")],1),n._v(" 作为运行全局命令的替代方法，尤其是在偶尔仅需要一个命令的情况下。 有关更多信息，请参见 "),e("a",{attrs:{href:"https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b",target:"_blank",rel:"noopener noreferrer"}},[n._v("有关npx的本文"),e("OutboundLink")],1),n._v(" 。")])])}),[],!1,null,null,null);s.default=t.exports}}]);