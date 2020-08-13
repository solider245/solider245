(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{416:function(e,s,a){"use strict";a.r(s);var t=a(25),n=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#一、本节目标"}},[e._v("一、本节目标")])]),a("li",[a("a",{attrs:{href:"#二、准备工作"}},[e._v("二、准备工作")])]),a("li",[a("a",{attrs:{href:"#三、创建dockerfile"}},[e._v("三、创建Dockerfile")])]),a("li",[a("a",{attrs:{href:"#四、修改mongdb连接"}},[e._v("四、修改MongDB连接")])]),a("li",[a("a",{attrs:{href:"#五、构建镜像"}},[e._v("五、构建镜像")])]),a("li",[a("a",{attrs:{href:"#六、运行"}},[e._v("六、运行")])]),a("li",[a("a",{attrs:{href:"#七、推送至docker-hub"}},[e._v("七、推送至Docker Hub")])]),a("li",[a("a",{attrs:{href:"#八、结语"}},[e._v("八、结语")])])])]),e._v("\n环境配置问题可能一直会让我们头疼，包括如下几种情况。"),a("p"),e._v(" "),a("ul",[a("li",[a("p",[e._v("我们在本地写好了一个Scrapy爬虫项目，想要把它放到服务器上运行，但是服务器上没有安装Python环境。")])]),e._v(" "),a("li",[a("p",[e._v("其他人给了我们一个Scrapy爬虫项目，项目使用包的版本和本地环境版本不一致，项目无法直接运行。")])]),e._v(" "),a("li",[a("p",[e._v("我们需要同时管理不同版本的Scrapy项目，如早期的项目依赖于Scrapy 0.25，现在的项目依赖于Scrapy 1.4.0。")])])]),e._v(" "),a("p",[e._v("在这些情况下，我们需要解决的就是环境的安装配置、环境的版本冲突解决等问题。")]),e._v(" "),a("p",[e._v("对于Python来说，VirtualEnv的确可以解决版本冲突的问题。但是，VirtualEnv不太方便做项目部署，我们还是需要安装Python环境，")]),e._v(" "),a("p",[e._v("如何解决上述问题呢？答案是用Docker。Docker可以提供操作系统级别的虚拟环境，一个Docker镜像一般都包含一个完整的操作系统，而这些系统内也有已经配置好的开发环境，如Python 3.6环境等。")]),e._v(" "),a("p",[e._v("我们可以直接使用此Docker的Python 3镜像运行一个容器，将项目直接放到容器里运行，就不用再额外配置Python 3环境。这样就解决了环境配置的问题。")]),e._v(" "),a("p",[e._v("我们也可以进一步将Scrapy项目制作成一个新的Docker镜像，镜像里只包含适用于本项目的Python环境。如果要部署到其他平台，只需要下载该镜像并运行就好了，因为Docker运行时采用虚拟环境，和宿主机是完全隔离的，所以也不需要担心环境冲突问题。")]),e._v(" "),a("p",[e._v("如果我们能够把Scrapy项目制作成一个Docker镜像，只要其他主机安装了Docker，那么只要将镜像下载并运行即可，而不必再担心环境配置问题或版本冲突问题。")]),e._v(" "),a("p",[e._v("接下来，我们尝试把一个Scrapy项目制作成一个Docker镜像。")]),e._v(" "),a("h2",{attrs:{id:"一、本节目标"}},[e._v("一、本节目标")]),e._v(" "),a("p",[e._v("我们要实现把前文Scrapy的入门项目打包成一个Docker镜像的过程。项目爬取的网址为：http://quotes.toscrape.com/。本章Scrapy入门一节已经实现了Scrapy对此站点的爬取过程，项目代码为：https://github.com/Python3WebSpider/ScrapyTutorial。如果本地不存在的话可以将代码Clone下来。")]),e._v(" "),a("h2",{attrs:{id:"二、准备工作"}},[e._v("二、准备工作")]),e._v(" "),a("p",[e._v("请确保已经安装好Docker和MongoDB并可以正常运行。")]),e._v(" "),a("h2",{attrs:{id:"三、创建dockerfile"}},[e._v("三、创建Dockerfile")]),e._v(" "),a("p",[e._v("首先在项目的根目录下新建一个requirements.txt文件，将整个项目依赖的Python环境包都列出来，如下所示：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("scrapy\npymongo\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("如果库需要特定的版本，我们还可以指定版本号，如下所示：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("scrapy>=1.4.0\npymongo>=3.4.0\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("在项目根目录下新建一个Dockerfile文件，文件不加任何后缀名，修改内容如下所示：")]),e._v(" "),a("div",{staticClass:"language-dockerfile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" python"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("3.6\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ENV")]),e._v(" PATH /usr/local/bin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("$PATH\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ADD")]),e._v(" . /code\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("WORKDIR")]),e._v(" /code\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("RUN")]),e._v(" pip3 install "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("r requirements.txt\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("CMD")]),e._v(" scrapy crawl quotes\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])]),a("p",[e._v("第一行的"),a("code",[e._v("FROM")]),e._v("代表使用的Docker基础镜像，在这里我们直接使用python:3.6的镜像，在此基础上运行Scrapy项目。")]),e._v(" "),a("p",[e._v("第二行"),a("code",[e._v("ENV")]),e._v("是环境变量设置，将"),a("code",[e._v("/usr/local/bin:$PATH")]),e._v("赋值给"),a("code",[e._v("PATH")]),e._v("，即增加"),a("code",[e._v("/usr/local/bin")]),e._v("这个环境变量路径。")]),e._v(" "),a("p",[e._v("第三行"),a("code",[e._v("ADD")]),e._v("是将本地的代码放置到虚拟容器中。它有两个参数：第一个参数是"),a("code",[e._v(".")]),e._v("，代表本地当前路径；第二个参数是"),a("code",[e._v("/code")]),e._v("，代表虚拟容器中的路径，也就是将本地项目所有内容放置到虚拟容器的/code目录下，以便于在虚拟容器中运行代码。")]),e._v(" "),a("p",[e._v("第四行"),a("code",[e._v("WORKDIR")]),e._v("是指定工作目录，这里将刚才添加的代码路径设成工作路径。这个路径下的目录结构和当前本地目录结构是相同的，所以我们可以直接执行库安装命令、爬虫运行命令等。")]),e._v(" "),a("p",[e._v("第五行"),a("code",[e._v("RUN")]),e._v("是执行某些命令来做一些环境准备工作。由于Docker虚拟容器内只有Python 3环境，而没有所需要的Python库，所以我们运行此命令来在虚拟容器中安装相应的Python库如Scrapy，这样就可以在虚拟容器中执行Scrapy命令了。")]),e._v(" "),a("p",[e._v("第六行"),a("code",[e._v("CMD")]),e._v("是容器启动命令。在容器运行时，此命令会被执行。在这里我们直接用scrapy crawl quotes来启动爬虫。")]),e._v(" "),a("h2",{attrs:{id:"四、修改mongdb连接"}},[e._v("四、修改MongDB连接")]),e._v(" "),a("p",[e._v("接下来我们需要修改MongoDB的连接信息。如果我们继续用localhost是无法找到MongoDB的，因为在Docker虚拟容器里localhost实际指向容器本身的运行IP，而容器内部并没有安装MongoDB，所以爬虫无法连接MongoDB。")]),e._v(" "),a("p",[e._v("这里的MongoDB地址可以有如下两种选择。")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("如果只想在本机测试，我们可以将地址修改为宿主机的IP，也就是容器外部的本机IP，一般是一个局域网IP，使用"),a("code",[e._v("ifconfig")]),e._v("命令即可查看。")])]),e._v(" "),a("li",[a("p",[e._v("如果要部署到远程主机运行，一般MongoDB都是可公网访问的地址，修改为此地址即可。")])])]),e._v(" "),a("p",[e._v("在本节中，我们的目标是将项目打包成一个镜像，让其他远程主机也可运行这个项目。所以我们直接将此处MongoDB地址修改为某个公网可访问的远程数据库地址，修改"),a("code",[e._v("MONGO_URI")]),e._v("如下所示：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("MONGO_URI = 'mongodb://admin:admin123@120.27.34.25:27017'复制代码\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("此处地址可以修改为自己的远程MongoDB数据库地址。")]),e._v(" "),a("p",[e._v("这样项目的配置就完成了。")]),e._v(" "),a("h2",{attrs:{id:"五、构建镜像"}},[e._v("五、构建镜像")]),e._v(" "),a("p",[e._v("接下来我们构建Docker镜像，执行如下命令：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker build -t quotes:latest .复制代码\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("执行过程中的输出如下所示：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Sending build context to Docker daemon 191.5 kB\nStep 1/6 : FROM python:3.6\n ---\x3e 968120d8cbe8\nStep 2/6 : ENV PATH /usr/local/bin:$PATH\n ---\x3e Using cache\n ---\x3e 387abbba1189\nStep 3/6 : ADD . /code\n ---\x3e a844ee0db9c6\nRemoving intermediate container 4dc41779c573\nStep 4/6 : WORKDIR /code\n ---\x3e 619b2c064ae9\nRemoving intermediate container bcd7cd7f7337\nStep 5/6 : RUN pip3 install -r requirements.txt\n ---\x3e Running in 9452c83a12c5\n...\nRemoving intermediate container 9452c83a12c5\nStep 6/6 : CMD scrapy crawl quotes\n ---\x3e Running in c092b5557ab8\n ---\x3e c8101aca6e2a\nRemoving intermediate container c092b5557ab8\nSuccessfully built c8101aca6e2a复制代码\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br")])]),a("p",[e._v("这样的输出就说明镜像构建成功。这时我们查看一下构建的镜像，如下所示：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker images复制代码\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("返回结果中的一行代码如下所示：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("quotes  latest  41c8499ce210    2 minutes ago   769 MB复制代码\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("这就是我们新构建的镜像。")]),e._v(" "),a("h2",{attrs:{id:"六、运行"}},[e._v("六、运行")]),e._v(" "),a("p",[e._v("镜像可以先在本地测试运行，我们执行如下命令：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker run quotes复制代码\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("这样我们就利用此镜像新建并运行了一个Docker容器，运行效果完全一致，如下图所示。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/4/18/162d7b44a34a65c1?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:""}})]),e._v(" "),a("p",[e._v("如果出现类似图上的运行结果，这就证明构建的镜像没有问题。")]),e._v(" "),a("h2",{attrs:{id:"七、推送至docker-hub"}},[e._v("七、推送至Docker Hub")]),e._v(" "),a("p",[e._v("构建完成之后，我们可以将镜像Push到Docker镜像托管平台，如Docker Hub或者私有的Docker Registry等，这样我们就可以从远程服务器下拉镜像并运行了。")]),e._v(" "),a("p",[e._v("以Docker Hub为例，如果项目包含一些私有的连接信息（如数据库），我们最好将Repository设为私有或者直接放到私有的Docker Registry。")]),e._v(" "),a("p",[e._v("首先在https://hub.docker.com注册一个账号，新建一个Repository，名为quotes。比如，我的用户名为germey，新建的Repository名为quotes，那么此Repository的地址就可以用germey/quotes来表示。")]),e._v(" "),a("p",[e._v("为新建的镜像打一个标签，命令如下所示：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker tag quotes:latest germey/quotes:latest\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Push镜像到Docker Hub即可，命令如下所示：")]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("docker push germey/quotes\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Docker Hub便会出现新Push的Docker镜像了，如下图所示。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/4/18/162d7b44171799fb?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:""}})]),e._v(" "),a("p",[e._v("如果我们想在其他的主机上运行这个镜像，主机上装好Docker后，可以直接执行如下命令：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker run germey/quotes\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("这样就会自动下载镜像，启动容器运行。不需要配置Python环境，不需要关心版本冲突问题。")]),e._v(" "),a("p",[e._v("运行效果如下图所示。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/4/18/162d7b447e234702?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:""}})]),e._v(" "),a("p",[e._v("整个项目爬取完成后，数据就可以存储到指定的数据库中。")]),e._v(" "),a("h2",{attrs:{id:"八、结语"}},[e._v("八、结语")]),e._v(" "),a("p",[e._v("我们讲解了将Scrapy项目制作成Docker镜像并部署到远程服务器运行的过程。使用此种方式，我们在本节开头所列出的问题都迎刃而解。")])])}),[],!1,null,null,null);s.default=n.exports}}]);