(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{459:function(t,s,a){"use strict";a.r(s);var e=a(25),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#环境依赖"}},[t._v("环境依赖")]),a("ul",[a("li",[a("a",{attrs:{href:"#生成requirements-txt文件"}},[t._v("生成requirements.txt文件")])]),a("li",[a("a",{attrs:{href:"#安装项目依赖的文件"}},[t._v("安装项目依赖的文件")])])])]),a("li",[a("a",{attrs:{href:"#爬虫中的坑点"}},[t._v("爬虫中的坑点")])]),a("li",[a("a",{attrs:{href:"#时间函数datetime的用法"}},[t._v("时间函数datetime的用法")]),a("ul",[a("li",[a("a",{attrs:{href:"#引入"}},[t._v("引入")])]),a("li",[a("a",{attrs:{href:"#计算两者的时间差"}},[t._v("计算两者的时间差")])])])])])]),a("p"),t._v(" "),a("blockquote",[a("p",[t._v("新手使用爬虫最好从pandas表格爬虫开始，这个是最简单最易学的。")])]),t._v(" "),a("h2",{attrs:{id:"环境依赖"}},[t._v("环境依赖")]),t._v(" "),a("h3",{attrs:{id:"生成requirements-txt文件"}},[t._v("生成requirements.txt文件")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("pip freeze "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" requirements.txt\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("这个命令不好，因为会把所有项目的依赖生成。\n如果只是单纯生成本地的依赖，应该使用pipreqs。")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#通过以下命令安装：")]),t._v("\n\npip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" pipreqs\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#运行：")]),t._v("\n\npipreqs ./\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("h3",{attrs:{id:"安装项目依赖的文件"}},[t._v("安装项目依赖的文件")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("pip install -r requirements.txt\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"爬虫中的坑点"}},[t._v("爬虫中的坑点")]),t._v(" "),a("ol",[a("li",[t._v("作为循环迭代的i应该用str(i)包裹。")]),t._v(" "),a("li",[t._v("pd.read_html(url)[3] # 这个3应该在括号外面")])]),t._v(" "),a("h2",{attrs:{id:"时间函数datetime的用法"}},[t._v("时间函数datetime的用法")]),t._v(" "),a("h3",{attrs:{id:"引入"}},[t._v("引入")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" datetime\nend_time "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" datetime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("datetime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("now"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nx_time "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" end_time "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" start_time\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string-interpolation"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('f"全部爬取完毕，总耗时')]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("x_time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("seconds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('秒"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h3",{attrs:{id:"计算两者的时间差"}},[t._v("计算两者的时间差")]),t._v(" "),a("p",[t._v("参数secondes表示秒。还有其他用法")]),t._v(" "),a("ul",[a("li",[t._v("days 天")]),t._v(" "),a("li",[t._v("hours 小时")]),t._v(" "),a("li",[t._v("minutes 分")]),t._v(" "),a("li",[t._v("seconds 秒")]),t._v(" "),a("li",[t._v("microseconds 毫秒")])])])}),[],!1,null,null,null);s.default=n.exports}}]);