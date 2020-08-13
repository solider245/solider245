(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{417:function(s,t,n){"use strict";n.r(t);var a=n(25),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#概念介绍-概念介绍"}},[s._v("概念介绍")])]),n("li",[n("a",{attrs:{href:"#测试环境-测试环境"}},[s._v("测试环境")])]),n("li",[n("a",{attrs:{href:"#开始测试-开始测试"}},[s._v("开始测试")]),n("ul",[n("li",[n("a",{attrs:{href:"#测试【单进程单线程】-测试单进程单线程"}},[s._v("测试【单进程单线程】")])]),n("li",[n("a",{attrs:{href:"#测试【多进程-并行】-测试多进程-并行"}},[s._v("测试【多进程 并行】")])]),n("li",[n("a",{attrs:{href:"#测试【多线程-并发】-测试多线程-并发"}},[s._v("测试【多线程 并发】")])]),n("li",[n("a",{attrs:{href:"#测试【协程-异步】-测试协程-异步"}},[s._v("测试【协程 + 异步】")])])])]),n("li",[n("a",{attrs:{href:"#结果对比-结果对比"}},[s._v("结果对比")])]),n("li",[n("a",{attrs:{href:"#绘图展示-绘图展示"}},[s._v("绘图展示")])])])]),n("p"),s._v(" "),n("h2",{attrs:{id:"概念介绍"}},[s._v("概念介绍"),n("a",{attrs:{href:"#%E6%A6%82%E5%BF%B5%E4%BB%8B%E7%BB%8D"}})]),s._v(" "),n("p",[s._v("首先简单介绍几个概念：")]),s._v(" "),n("ul",[n("li",[n("strong",[s._v("进程和线程")]),s._v(" "),n("ul",[n("li",[n("strong",[s._v("进程")]),s._v("就是一个程序在一个数据集上的一次动态执行过程（数据集是程序在执行过程中所需要使用的资源）。")]),s._v(" "),n("li",[n("strong",[s._v("线程")]),s._v("也叫轻量级进程，它是一个基本的 CPU 执行单元，是比进程更小的能独立运行的基本单位。")]),s._v(" "),n("li",[n("strong",[s._v("进程和线程的关系")]),s._v("：\n"),n("ul",[n("li",[s._v("一个线程只能属于一个进程，而一个进程可以有多个线程，但至少有一个线程。")]),s._v(" "),n("li",[s._v("资源分配给进程，同一进程的所有线程共享该进程的所有资源。")]),s._v(" "),n("li",[s._v("CPU 分给线程，即真正在 CPU 上运行的是线程。")])])])])]),s._v(" "),n("li",[n("strong",[s._v("并行和并发")]),s._v(" "),n("ul",[n("li",[n("strong",[s._v("并行处理")]),s._v("是计算机系统中能同时执行两个或更多个处理的一种计算方法。并行处理可同时工作于同一程序的不同方面，其主要目的是节省大型和复杂问题的解决时间。")]),s._v(" "),n("li",[n("strong",[s._v("并发处理")]),s._v("指一个时间段中有几个程序都处于已启动运行到运行完毕之间，且这几个程序都是在同一个 CPU 上运行，但任一个时刻点上只有一个程序在 CPU 上运行。")]),s._v(" "),n("li",[s._v("并发的关键是你有处理多个任务的能力，不一定要同时。并行的关键是你有同时处理多个任务的能力。所以说，"),n("strong",[s._v("并行是并发的子集")]),s._v("。"),n("strong",[s._v("多进程是并行的，多线程是并发的")]),s._v("。")])])]),s._v(" "),n("li",[n("strong",[s._v("同步和异步")]),s._v(" "),n("ul",[n("li",[n("strong",[s._v("同步")]),s._v("就是指一个进程在执行某个请求的时候，若该请求需要一段时间才能返回信息，那么这个进程将会一直等待下去，直到收到返回信息才继续执行下去。")]),s._v(" "),n("li",[n("strong",[s._v("异步")]),s._v("是指进程不需要一直等下去，而是继续执行下面的操作，不管其他进程的状态。当有消息返回时系统会通知进程进行处理，这样可以提高执行的效率。")]),s._v(" "),n("li",[s._v("举个例子，打电话时就是同步通信，发短息时就是异步通信。")])])])]),s._v(" "),n("h2",{attrs:{id:"测试环境"}},[s._v("测试环境"),n("a",{attrs:{href:"#%E6%B5%8B%E8%AF%95%E7%8E%AF%E5%A2%83"}})]),s._v(" "),n("p",[s._v("进行对比测试之前，我们先来创建一个合适的实验环境：\n        "),n("strong",[s._v("模拟一个需要等待一定时间才可以获取返回结果的网页。")]),s._v("\n如果直接用百度、CSDN 等站点的话，一方面响应太快、难以看出各种方法的差距，另一方面响应速度会受网速影响、每次发送请求获取响应所需的时间不完全一致导致重复实验结果差距较大，所以在此用 Flask 模拟一个本地慢速服务器。 "),n("code",[s._v("flask_server.py")]),s._v(" 代码如下： "),n("code",[s._v("flask_server.py")]),s._v(" 代码如下：")]),s._v(" "),n("div",{staticClass:"language-py line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-py"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" flask "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Flask     "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# pip install flask")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" time\n\napp "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Flask"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__name__"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[s._v("@app"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("route")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("index")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    time"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sleep"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    \t    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 休眠 3 秒再返回结果")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Hello!'")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" __name__ "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'__main__'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    app"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("run"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("threaded"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 以多线程模式启动服务")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("p",[s._v("启动之后，Flask 服务默认在 "),n("code",[s._v("127.0.0.1:5000")]),s._v(" 上运行，控制台输出结果如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('* Serving Flask app "flask_server" (lazy loading)\n * Environment: production\n   WARNING: Do not use the development server in a production environment.\n   Use a production WSGI server instead.\n * Debug mode: off\n * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)\n\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("在浏览器中访问 "),n("code",[s._v("http://127.0.0.1:5000/")]),s._v(" 等待 3 秒即会出现 Hello! 页面，表明简单的慢速服务器搭建完成！ "),n("a",{attrs:{href:"https://img-blog.csdnimg.cn/20190428115845147.png",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190428115845147.png",alt:"Hello!"}}),n("OutboundLink")],1)]),s._v(" "),n("h2",{attrs:{id:"开始测试"}},[s._v("开始测试"),n("a",{attrs:{href:"#%E5%BC%80%E5%A7%8B%E6%B5%8B%E8%AF%95"}})]),s._v(" "),n("p",[s._v("首先导入需要的模块，以请求 10 次为例准备 "),n("code",[s._v("urls")]),s._v("，再定义一个 "),n("code",[s._v("get_html_text()")]),s._v(" 函数：")]),s._v(" "),n("div",{staticClass:"language-py line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-py"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" requests\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" time\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 用于多进程")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" multiprocessing "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Process\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 用于多线程")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" threading "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Thread\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 用于协程+异步")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" asyncio\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" aiohttp      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# pip install aiohttp")]),s._v("\n\nurls "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://127.0.0.1:5000'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" _ "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("range")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("get_html_text")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    response "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" requests"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" response"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("text\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("h3",{attrs:{id:"测试【单进程单线程】"}},[s._v("测试【单进程单线程】"),n("a",{attrs:{href:"#%E6%B5%8B%E8%AF%95%E5%8D%95%E8%BF%9B%E7%A8%8B%E5%8D%95%E7%BA%BF%E7%A8%8B"}})]),s._v(" "),n("div",{staticClass:"language-py line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-py"}},[n("code",[s._v("start "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" time"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("time"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" url "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" urls"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    result "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" get_html_text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nend "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" time"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("time"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'【单进程单线程】耗时：%s 秒'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("end "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" start"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("结果如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("Hello!\nHello!\nHello!\nHello!\nHello!\nHello!\nHello!\nHello!\nHello!\nHello!\n【单进程单线程】耗时：30.15605854988098 秒\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("h3",{attrs:{id:"测试【多进程-并行】"}},[s._v("测试【多进程 并行】"),n("a",{attrs:{href:"#%E6%B5%8B%E8%AF%95%E5%A4%9A%E8%BF%9B%E7%A8%8B-%E5%B9%B6%E8%A1%8C"}})]),s._v(" "),n("div",{staticClass:"language-py line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-py"}},[n("code",[s._v("start "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" time"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("time"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nprocesses "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" url "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" urls"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    p "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Process"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("target"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("get_html_text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" args"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    processes"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("append"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("p"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    p"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("start"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" p "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" processes"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    p"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("join"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Hello!'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nend "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" time"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("time"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'【多进程  并行】耗时：%s 秒'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("end "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" start"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("p",[s._v("结果如下（测试电脑为 4 核 CPU，核心数越大加速越明显）：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("Hello!\nHello!\nHello!\nHello!\nHello!\nHello!\nHello!\nHello!\nHello!\nHello!\n【多进程  并行】耗时：5.511234283447266 秒\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("h3",{attrs:{id:"测试【多线程-并发】"}},[s._v("测试【多线程 并发】"),n("a",{attrs:{href:"#%E6%B5%8B%E8%AF%95%E5%A4%9A%E7%BA%BF%E7%A8%8B-%E5%B9%B6%E5%8F%91"}})]),s._v(" "),n("div",{staticClass:"language-py line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-py"}},[n("code",[s._v("start "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" time"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("time"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nthreads "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" url "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" urls"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    t "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Thread"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("target"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("get_html_text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" args"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    threads"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("append"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("start"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" t "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" threads"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("join"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Hello!'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nend "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" time"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("time"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'【多线程  并发】耗时：%s 秒'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("end "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" start"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("p",[s._v("结果如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("Hello!\nHello!\nHello!\nHello!\nHello!\nHello!\nHello!\nHello!\nHello!\nHello!\n【多线程  并发】耗时：3.030653953552246 秒\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("h3",{attrs:{id:"测试【协程-异步】"}},[s._v("测试【协程 + 异步】"),n("a",{attrs:{href:"#%E6%B5%8B%E8%AF%95%E5%8D%8F%E7%A8%8B--%E5%BC%82%E6%AD%A5"}})]),s._v(" "),n("div",{staticClass:"language-py line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-py"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 因为 requests 模块不支持异步操作，需要借助 aiohttp 模块")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("async")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("get_html_text_async")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("async")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" aiohttp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ClientSession"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" session"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("async")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" session"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" response"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            text "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("await")]),s._v(" response"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" text\n\nstart "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" time"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("time"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ntasks "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("asyncio"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ensure_future"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("get_html_text_async"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" url "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" urls"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nloop "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" asyncio"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get_event_loop"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nloop"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("run_until_complete"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("asyncio"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wait"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tasks"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" task "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" tasks"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("task"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nend "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" time"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("time"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'【协程 ++ 异步】耗时：%s 秒'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("end "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" start"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("p",[s._v("结果如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("Hello!\nHello!\nHello!\nHello!\nHello!\nHello!\nHello!\nHello!\nHello!\nHello!\n【协程 ++ 异步】耗时：3.046288251876831 秒\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("h2",{attrs:{id:"结果对比"}},[s._v("结果对比"),n("a",{attrs:{href:"#%E7%BB%93%E6%9E%9C%E5%AF%B9%E6%AF%94"}})]),s._v(" "),n("p",[n("code",[s._v("len(urls)==1:")]),s._v(" "),n("a",{attrs:{href:"https://img-blog.csdnimg.cn/20190428132747667.png",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190428132747667.png",alt:"n=1"}}),n("OutboundLink")],1),s._v(" "),n("code",[s._v("len(urls)==4:")]),s._v(" "),n("a",{attrs:{href:"https://img-blog.csdnimg.cn/20190428120800721.png",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190428120800721.png",alt:"n=4"}}),n("OutboundLink")],1),s._v(" "),n("code",[s._v("len(urls)==10:")]),s._v(" "),n("a",{attrs:{href:"https://img-blog.csdnimg.cn/20190428120036243.png",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190428120036243.png",alt:"n=10"}}),n("OutboundLink")],1),s._v(" "),n("code",[s._v("len(urls)==100:")]),s._v(" "),n("a",{attrs:{href:"https://img-blog.csdnimg.cn/20190428131839210.png",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190428131839210.png",alt:"m=100"}}),n("OutboundLink")],1)]),s._v(" "),n("ul",[n("li",[n("strong",[s._v("单进程单线程")]),s._v("是将 n 次请求顺次执行，每次要等待 3 秒才能返回结果，故耗时 "),n("code",[s._v("3n+")]),s._v(" 秒；")]),s._v(" "),n("li",[n("strong",[s._v("多进程-并行处理")]),s._v("则利用 CPU 的多核优势，在同一时间并行地执行多个任务，可以大大提高执行效率，但系统实现多进程前需要一些准备工作、将耗费大量时间。")]),s._v(" "),n("li",[n("strong",[s._v("多线程-并发处理")]),s._v("和"),n("strong",[s._v("协程+异步")]),s._v("的耗时由单进程单线程的 3n+ 秒变成了 3+ 秒！\n"),n("ul",[n("li",[s._v("前者是 n 个请求几乎同时进行、几乎同时得到响应返回结果。")]),s._v(" "),n("li",[s._v("后者是每当请求任务遇到阻塞（"),n("code",[s._v("time.sleep(3)")]),s._v("）时被挂起，n 个任务都处于挂起状态后等待 3 秒，n 个请求几乎同时都有了响应，然后挂起的任务被唤醒接着执行，输出请求结果，最后耗时：3 秒！（多出来的时间是 IO 时延）")])])])]),s._v(" "),n("blockquote",[n("p",[s._v("注意：")]),s._v(" "),n("ul",[n("li",[s._v("搭建的实验环境是慢速服务器，若不进行 time.sleep(3) 休眠 3 秒再返回 而是立即响应的话，单进程单线程的实际耗时则会大大缩短，请求次数少的话甚至会超过多进程。")]),s._v(" "),n("li",[s._v("而且笔者在 Windows 4 核 CPU 环境下测试，最多开启 4 个进程，未能发挥多进程的真实实力。")]),s._v(" "),n("li",[s._v("另外，多进程、多线程还可以通过进程池、线程池来实现，与文中方法耗时基本一致，故未做展示；多进程或多线程与协程异步IO结合的效率尚待测试。")])])]),s._v(" "),n("h2",{attrs:{id:"绘图展示"}},[s._v("绘图展示"),n("a",{attrs:{href:"#%E7%BB%98%E5%9B%BE%E5%B1%95%E7%A4%BA"}})]),s._v(" "),n("p",[n("a",{attrs:{href:"https://img-blog.csdnimg.cn/20190429120739690.png",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190429120739690.png",alt:"子图"}}),n("OutboundLink")],1),s._v(" "),n("a",{attrs:{href:"https://img-blog.csdnimg.cn/20190429120802182.png",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190429120802182.png",alt:"总图"}}),n("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=e.exports}}]);