(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{449:function(s,t,a){"use strict";a.r(t);var e=a(25),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#chpasswd命令"}},[s._v("chpasswd命令")]),a("ul",[a("li",[a("a",{attrs:{href:"#语法"}},[s._v("语法")])]),a("li",[a("a",{attrs:{href:"#选项"}},[s._v("选项")])]),a("li",[a("a",{attrs:{href:"#实例"}},[s._v("实例")])])])])])]),a("p"),s._v(" "),a("h2",{attrs:{id:"chpasswd命令"}},[s._v("chpasswd命令")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("blockquote",[a("p",[s._v("chpasswd命令是批量更新用户口令的工具，是把一个文件内容重新定向添加到/etc/shadow中。")])])]),s._v(" "),a("h3",{attrs:{id:"语法"}},[s._v("语法")]),s._v(" "),a("p",[s._v("chpasswd(选项)")]),s._v(" "),a("h3",{attrs:{id:"选项"}},[s._v("选项")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("-e：输入的密码是加密后的密文；\n-h：显示帮助信息并退出；\n-m：当被支持的密码未被加密时，使用MD5加密代替DES加密。\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"实例"}},[s._v("实例")]),s._v(" "),a("p",[s._v("先创建用户密码对应文件，格式为"),a("code",[s._v("username:password")]),s._v("，如"),a("code",[s._v("abc:abc123")]),s._v("，必须以这种格式来书写，并且不能有空行，保存成文本文件user.txt，然后执行chpasswd命令：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("chpasswd "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" user.txt "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 第一种先创建文本，然后使用文本数据")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root:root'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("chpasswd "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这里直接创建内容，然后使用管道传递给chpasswd")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("以上是运用chpasswd命令来批量修改密码。是linux系统管理中的捷径。")])])}),[],!1,null,null,null);t.default=n.exports}}]);