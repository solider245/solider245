(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{398:function(s,t,a){"use strict";a.r(t);var n=a(25),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#sed的选项、命令、替换标记"}},[s._v("sed的选项、命令、替换标记")]),a("ul",[a("li",[a("a",{attrs:{href:"#命令格式"}},[s._v("命令格式")])]),a("li",[a("a",{attrs:{href:"#选项"}},[s._v("选项")])]),a("li",[a("a",{attrs:{href:"#参数"}},[s._v("参数")])]),a("li",[a("a",{attrs:{href:"#sed命令"}},[s._v("sed命令")])]),a("li",[a("a",{attrs:{href:"#sed替换标记"}},[s._v("sed替换标记")])])])]),a("li",[a("a",{attrs:{href:"#sed元字符集"}},[s._v("sed元字符集")])]),a("li",[a("a",{attrs:{href:"#sed用法实例"}},[s._v("sed用法实例")]),a("ul",[a("li",[a("a",{attrs:{href:"#替换操作：s命令"}},[s._v("替换操作：s命令")])]),a("li",[a("a",{attrs:{href:"#全面替换标记g"}},[s._v("全面替换标记g")])]),a("li",[a("a",{attrs:{href:"#定界符"}},[s._v("定界符")])]),a("li",[a("a",{attrs:{href:"#删除操作：d命令"}},[s._v("删除操作：d命令")])]),a("li",[a("a",{attrs:{href:"#已匹配字符串标记"}},[s._v("已匹配字符串标记&")])]),a("li",[a("a",{attrs:{href:"#子串匹配标记-1"}},[s._v("子串匹配标记\\1")])]),a("li",[a("a",{attrs:{href:"#组合多个表达式"}},[s._v("组合多个表达式")])]),a("li",[a("a",{attrs:{href:"#引用"}},[s._v("引用")])]),a("li",[a("a",{attrs:{href:"#选定行的范围：-（逗号）"}},[s._v("选定行的范围：,（逗号）")])]),a("li",[a("a",{attrs:{href:"#多点编辑：e命令"}},[s._v("多点编辑：e命令")])]),a("li",[a("a",{attrs:{href:"#从文件读入：r命令"}},[s._v("从文件读入：r命令")])]),a("li",[a("a",{attrs:{href:"#写入文件：w命令"}},[s._v("写入文件：w命令")])]),a("li",[a("a",{attrs:{href:"#追加（行下）：a-命令"}},[s._v("追加（行下）：a\\命令")])]),a("li",[a("a",{attrs:{href:"#插入（行上）：i-命令"}},[s._v("插入（行上）：i\\命令")])]),a("li",[a("a",{attrs:{href:"#下一个：n命令"}},[s._v("下一个：n命令")])]),a("li",[a("a",{attrs:{href:"#变形：y命令"}},[s._v("变形：y命令")])]),a("li",[a("a",{attrs:{href:"#退出：q命令"}},[s._v("退出：q命令")])]),a("li",[a("a",{attrs:{href:"#保持和获取：h命令和g命令"}},[s._v("保持和获取：h命令和G命令")])]),a("li",[a("a",{attrs:{href:"#保持和互换：h命令和x命令"}},[s._v("保持和互换：h命令和x命令")])])])]),a("li",[a("a",{attrs:{href:"#脚本scriptfile"}},[s._v("脚本scriptfile")]),a("ul",[a("li",[a("a",{attrs:{href:"#打印奇数行或偶数行"}},[s._v("打印奇数行或偶数行")])]),a("li",[a("a",{attrs:{href:"#打印匹配字符串的下一行"}},[s._v("打印匹配字符串的下一行")])])])])])]),a("p"),s._v(" "),a("blockquote",[a("p",[s._v("sed是一种流编辑器，它是文本处理中非常中的工具，能够完美的配合正则表达式使用，功能不同凡响。处理时，把当前处理的行存储在临时缓冲区中，称为“模式空间”（pattern space），接着用sed命令处理缓冲区中的内容，处理完成后，把缓冲区的内容送往屏幕。接着处理下一行，这样不断重复，直到文件末尾。文件内容并没有 改变，除非你使用重定向存储输出。Sed主要用来自动编辑一个或多个文件；简化对文件的反复操作；编写转换程序等。")])]),s._v(" "),a("h2",{attrs:{id:"sed的选项、命令、替换标记"}},[s._v("sed的选项、命令、替换标记")]),s._v(" "),a("h3",{attrs:{id:"命令格式"}},[s._v("命令格式")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sed [options] 'command' file(s)\nsed [options] -f scriptfile file(s)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"选项"}},[s._v("选项")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("-e<script>或--expression=<script>：以选项中的指定的script来处理输入的文本文件；\n-f<script文件>或--file=<script文件>：以选项中指定的script文件来处理输入的文本文件；\n-h或--help：显示帮助；\n-n或--quiet或——silent：仅显示script处理后的结果；\n-V或--version：显示版本信息。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"参数"}},[s._v("参数")]),s._v(" "),a("p",[s._v("文件：指定待处理的文本文件列表。")]),s._v(" "),a("h3",{attrs:{id:"sed命令"}},[s._v("sed命令")]),s._v(" "),a("ol",[a("li",[s._v("a\\ 在当前行下面插入文本。")]),s._v(" "),a("li",[s._v("i\\ 在当前行上面插入文本。")]),s._v(" "),a("li",[s._v("c\\ 把选定的行改为新的文本。")]),s._v(" "),a("li",[s._v("d 删除，删除选择的行。")]),s._v(" "),a("li",[s._v("D 删除模板块的第一行。")]),s._v(" "),a("li",[s._v("s 替换指定字符")]),s._v(" "),a("li",[s._v("h 拷贝模板块的内容到内存中的缓冲区。")]),s._v(" "),a("li",[s._v("H 追加模板块的内容到内存中的缓冲区。")]),s._v(" "),a("li",[s._v("g 获得内存缓冲区的内容，并替代当前模板块中的文本。")]),s._v(" "),a("li",[s._v("G 获得内存缓冲区的内容，并追加到当前模板块文本的后面。")]),s._v(" "),a("li",[s._v("l 列表不能打印字符的清单。")]),s._v(" "),a("li",[s._v("n 读取下一个输入行，用下一个命令处理新的行而不是用第一个命令。")]),s._v(" "),a("li",[s._v("N 追加下一个输入行到模板块后面并在二者间嵌入一个新行，改变当前行号码。")]),s._v(" "),a("li",[s._v("p 打印模板块的行。")]),s._v(" "),a("li",[s._v("P(大写) 打印模板块的第一行。")]),s._v(" "),a("li",[s._v("q 退出Sed。")]),s._v(" "),a("li",[s._v("b lable 分支到脚本中带有标记的地方，如果分支不存在则分支到脚本的末尾。")]),s._v(" "),a("li",[s._v("r file 从file中读行。")]),s._v(" "),a("li",[s._v("t label if分支，从最后一行开始，条件一旦满足或者T，t命令，将导致分支到带有标号的命令处，或者到脚本的末尾。")]),s._v(" "),a("li",[s._v("T label 错误分支，从最后一行开始，一旦发生错误或者T，t命令，将导致分支到带有标号的命令处，或者到脚本的末尾。")]),s._v(" "),a("li",[s._v("w file 写并追加模板块到file末尾。")]),s._v(" "),a("li",[s._v("W file 写并追加模板块的第一行到file末尾。")]),s._v(" "),a("li",[s._v("! 表示后面的命令对所有没有被选定的行发生作用。")]),s._v(" "),a("li",[s._v("= 打印当前行号码。")]),s._v(" "),a("li",[s._v("#把注释扩展到下一个换行符以前。")])]),s._v(" "),a("h3",{attrs:{id:"sed替换标记"}},[s._v("sed替换标记")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("g 表示行内全面替换。  \np 表示打印行。  \nw 表示把行写入一个文件。  \nx 表示互换模板块中的文本和缓冲区中的文本。  \ny 表示把一个字符翻译为另外的字符（但是不用于正则表达式）\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" 子串匹配标记\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" 已匹配字符串标记\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"sed元字符集"}},[s._v("sed元字符集")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("^ 匹配行开始，如：/^sed/匹配所有以sed开头的行。\n$ 匹配行结束，如：/sed$/匹配所有以sed结尾的行。\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" 匹配一个非换行符的任意字符，如：/s.d/匹配s后接一个任意字符，最后是d。\n* 匹配0个或多个字符，如：/*sed/匹配所有模板是一个或多个空格后紧跟sed的行。\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" 匹配一个指定范围内的字符，如/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ss"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("ed/匹配sed和Sed。  \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("^"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" 匹配一个不在指定范围内的字符，如：/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("^A-RT-Z"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("ed/匹配不包含A-R和T-Z的一个字母开头，紧跟ed的行。\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 匹配子串，保存匹配的字符，如s/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("love"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("able/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("1rs，loveable被替换成lovers。\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" 保存搜索字符用来替换其他字符，如s/love/**"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("**/，love这成**love**。\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" 匹配单词的开始，如:/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("love/匹配包含以love开头的单词的行。\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 匹配单词的结束，如/love"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/匹配包含以love结尾的单词的行。\nx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" 重复字符x，m次，如：/0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("/匹配包含5个0的行。\nx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("m,"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" 重复字符x，至少m次，如：/0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(","),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("/匹配至少有5个0的行。\nx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("m,n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" 重复字符x，至少m次，不多于n次，如：/0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5,10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("/匹配5~10个0的行。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h2",{attrs:{id:"sed用法实例"}},[s._v("sed用法实例")]),s._v(" "),a("h3",{attrs:{id:"替换操作：s命令"}},[s._v("替换操作：s命令")]),s._v(" "),a("p",[s._v("替换文本中的字符串：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/book/books/'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("-n选项和p命令一起使用表示只打印那些发生替换的行：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -n "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/test/TEST/p'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("直接编辑文件选项-i，会匹配file文件中每一行的第一个book替换为books：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/book/books/g'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"全面替换标记g"}},[s._v("全面替换标记g")]),s._v(" "),a("p",[s._v("使用后缀 /g 标记会替换每一行中的所有匹配：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/book/books/g'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("当需要从第N处匹配开始替换时，可以使用 /Ng：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" sksksksksksk "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/sk/SK/2g'")]),s._v("\nskSKSKSKSKSK\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" sksksksksksk "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/sk/SK/3g'")]),s._v("\nskskSKSKSKSK\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" sksksksksksk "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/sk/SK/4g'")]),s._v("\nskskskSKSKSK\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"定界符"}},[s._v("定界符")]),s._v(" "),a("p",[s._v("以上命令中字符 / 在sed中作为定界符使用，也可以使用任意的定界符：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s:test:TEXT:g'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s|test|TEXT|g'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("定界符出现在样式内部时，需要进行转义：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/\\/bin/\\/usr\\/local\\/bin/g'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"删除操作：d命令"}},[s._v("删除操作：d命令")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#删除空白行：")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/^$/d'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#删除文件的第2行：")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2d'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#删除文件的第2行到末尾所有行：")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2,"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$d")]),s._v("'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#删除文件最后一行：")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$d")]),s._v("'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#删除文件中所有开头是test的行：")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/^test/'")]),s._v("d "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("h3",{attrs:{id:"已匹配字符串标记"}},[s._v("已匹配字符串标记&")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#正则表达式 \\w\\+ 匹配每一个单词，使用 [&] 替换它，& 对应于之前所匹配到的单词：")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" this is a "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" line "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/\\w\\+/[&]/g'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("this"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("is"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("line"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#所有以192.168.0.1开头的行都会被替换成它自已加localhost：")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/^192.168.0.1/&localhost/'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.1localhost\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"子串匹配标记-1"}},[s._v("子串匹配标记\\1")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#匹配给定样式的其中一部分：")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" this is digit "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" a number "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/digit \\([0-9]\\)/"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\1"}},[s._v("\\1")]),s._v("/'")]),s._v("\nthis is "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" a number\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#命令中 digit 7，被替换成了 7。样式匹配到的子串是 7，\\(..\\) 用于匹配子串，对于匹配到的第一个子串就标记为 \\1，依此类推匹配到的第二个结果就是 \\2，例如：")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" aaa BBB "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/\\([a-z]\\+\\) \\([A-Z]\\+\\)/"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\2"}},[s._v("\\2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token entity",title:"\\1"}},[s._v("\\1")]),s._v("/'")]),s._v("\nBBB aaa\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#love被标记为1，所有loveable会被替换成lovers，并打印出来：")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -n "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/\\(love\\)able/"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\1"}},[s._v("\\1")]),s._v("rs/p'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h3",{attrs:{id:"组合多个表达式"}},[s._v("组合多个表达式")]),s._v(" "),a("p",[s._v("sed '表达式' | sed '表达式'")]),s._v(" "),a("p",[s._v("等价于：")]),s._v(" "),a("p",[s._v("sed '表达式; 表达式'")]),s._v(" "),a("h3",{attrs:{id:"引用"}},[s._v("引用")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#sed表达式可以使用单引号来引用，但是如果表达式内部包含变量字符串，就需要使用双引号。")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("test")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("hello\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" hello WORLD "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"s/'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$test")]),s._v('/HELLO"')]),s._v("\nHELLO WORLD\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"选定行的范围：-（逗号）"}},[s._v("选定行的范围：,（逗号）")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#所有在模板test和check所确定的范围内的行都被打印：")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -n "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/test/,/check/p'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#打印从第5行开始到第一个包含以test开始的行之间的所有行：")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -n "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'5,/^test/p'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#对于模板test和west之间的行，每行的末尾用字符串aaa bbb替换：")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/test/,/west/s/$/aaa bbb/'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h3",{attrs:{id:"多点编辑：e命令"}},[s._v("多点编辑：e命令")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#-e选项允许在同一行里执行多条命令：")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -e "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1,5d'")]),s._v(" -e "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/test/check/'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#上面sed表达式的第一条命令删除1至5行，第二条命令用check替换test。命令的执行顺序对结果有影响。如果两个命令都是替换命令，那么第一个替换命令将影响第二个替换命令的结果。")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#和 -e 等价的命令是 --expression：")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" --expression"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/test/check/'")]),s._v(" --expression"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/love/d'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"从文件读入：r命令"}},[s._v("从文件读入：r命令")]),s._v(" "),a("p",[s._v("file里的内容被读进来，显示在与test匹配的行后面，如果匹配多行，则file的内容将显示在所有匹配行的下面：")]),s._v(" "),a("p",[s._v("sed '/test/r file' filename")]),s._v(" "),a("h3",{attrs:{id:"写入文件：w命令"}},[s._v("写入文件：w命令")]),s._v(" "),a("p",[s._v("在example中所有包含test的行都被写入file里：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -n "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/test/w file'")]),s._v(" example\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"追加（行下）：a-命令"}},[s._v("追加（行下）：a\\命令")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#将 this is a test line 追加到 以test 开头的行后面：")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/^test/a"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\t"}},[s._v("\\t")]),s._v("his is a test line'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#在 test.conf 文件第2行之后插入 this is a test line：")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2a"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\t"}},[s._v("\\t")]),s._v("his is a test line'")]),s._v(" test.conf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"插入（行上）：i-命令"}},[s._v("插入（行上）：i\\命令")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#将 this is a test line 追加到以test开头的行前面：")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/^test/i"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\t"}},[s._v("\\t")]),s._v("his is a test line'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#在test.conf文件第5行之前插入this is a test line：")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'5i"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\t"}},[s._v("\\t")]),s._v("his is a test line'")]),s._v(" test.conf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"下一个：n命令"}},[s._v("下一个：n命令")]),s._v(" "),a("p",[s._v("如果test被匹配，则移动到匹配行的下一行，替换这一行的aa，变为bb，并打印该行，然后继续：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/test/{ n; s/aa/bb/; }'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"变形：y命令"}},[s._v("变形：y命令")]),s._v(" "),a("p",[s._v("把1~10行内所有abcde转变为大写，注意，正则表达式元字符不能使用这个命令：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1,10y/abcde/ABCDE/'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"退出：q命令"}},[s._v("退出：q命令")]),s._v(" "),a("p",[s._v("打印完第10行后，退出sed")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'10q'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"保持和获取：h命令和g命令"}},[s._v("保持和获取：h命令和G命令")]),s._v(" "),a("p",[s._v("在sed处理文件的时候，每一行都被保存在一个叫模式空间的临时缓冲区中，除非行被删除或者输出被取消，否则所有被处理的行都将 打印在屏幕上。接着模式空间被清空，并存入新的一行等待处理。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -e "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/test/h'")]),s._v(" -e "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$G")]),s._v("'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("在这个例子里，匹配test的行被找到后，将存入模式空间，h命令将其复制并存入一个称为保持缓存区的特殊缓冲区内。第二条语句的意思是，当到达最后一行后，G命令取出保持缓冲区的行，然后把它放回模式空间中，且追加到现在已经存在于模式空间中的行的末尾。在这个例子中就是追加到最后一行。简单来说，任何包含test的行都被复制并追加到该文件的末尾。")]),s._v(" "),a("h3",{attrs:{id:"保持和互换：h命令和x命令"}},[s._v("保持和互换：h命令和x命令")]),s._v(" "),a("p",[s._v("互换模式空间和保持缓冲区的内容。也就是把包含test与check的行互换：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sed -e '/test/h' -e '/check/x' file\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"脚本scriptfile"}},[s._v("脚本scriptfile")]),s._v(" "),a("p",[s._v("sed脚本是一个sed的命令清单，启动Sed时以-f选项引导脚本文件名。Sed对于脚本中输入的命令非常挑剔，在命令的末尾不能有任何空白或文本，如果在一行中有多个命令，要用分号分隔。以#开头的行为注释行，且不能跨行。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sed [options] -f scriptfile file(s)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"打印奇数行或偶数行"}},[s._v("打印奇数行或偶数行")]),s._v(" "),a("p",[s._v("方法1：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sed -n 'p;n' test.txt  #奇数行\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sed -n 'n;p' test.txt  #偶数行\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("方法2：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sed -n '1~2p' test.txt  #奇数行\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sed -n '2~2p' test.txt  #偶数行\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"打印匹配字符串的下一行"}},[s._v("打印匹配字符串的下一行")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("grep -A 1 SCC URFILE\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sed -n '/SCC/{n;p}' URFILE\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("awk '/SCC/{getline; print}' URFILE\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);