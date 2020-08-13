(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{364:function(e,r,n){"use strict";n.r(r);var a=n(25),t=Object(a.a)({},(function(){var e=this,r=e.$createElement,n=e._self._c||r;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#介绍"}},[e._v("介绍")])]),n("li",[n("a",{attrs:{href:"#先决条件"}},[e._v("先决条件")])]),n("li",[n("a",{attrs:{href:"#第1步-安装干燥"}},[e._v("第1步\\-安装干燥")])]),n("li",[n("a",{attrs:{href:"#第2步-与docker容器进行交互"}},[e._v("第2步–与Docker容器进行交互")])]),n("li",[n("a",{attrs:{href:"#步骤3-与docker映像进行交互"}},[e._v("步骤3 —与Docker映像进行交互")])]),n("li",[n("a",{attrs:{href:"#第4步-与docker网络交互"}},[e._v("第4步—与Docker网络交互")])]),n("li",[n("a",{attrs:{href:"#第5步-监视docker容器"}},[e._v("第5步—监视Docker容器")])]),n("li",[n("a",{attrs:{href:"#第6步-在docker-swarm集群管理器上进行空安装（可选）"}},[e._v("第6步—在Docker Swarm集群管理器上进行空安装（可选）")])]),n("li",[n("a",{attrs:{href:"#步骤7-与docker-swarm节点进行交互（可选）"}},[e._v("步骤7 —与Docker Swarm节点进行交互（可选）")])]),n("li",[n("a",{attrs:{href:"#步骤8-与docker-swarm服务进行交互（可选）"}},[e._v("步骤8 —与Docker Swarm服务进行交互（可选）")])]),n("li",[n("a",{attrs:{href:"#结论"}},[e._v("结论")])])])]),n("p"),e._v(" "),n("h2",{attrs:{id:"介绍"}},[e._v("介绍")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://i.imgur.com/5uQQNAa.gif",alt:"干监控GIF"}})]),e._v(" "),n("p",[n("a",{attrs:{href:"https://moncho.github.io/dry/",target:"_blank",rel:"noopener noreferrer"}},[e._v("dry"),n("OutboundLink")],1),e._v(" 是一个简单但广泛的终端应用程序，旨在与 "),n("a",{attrs:{href:"https://www.digitalocean.com/community/tutorials/the-docker-ecosystem-an-introduction-to-common-components",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker"),n("OutboundLink")],1),e._v(" 容器及其映像 进行交互 。 使用dry可以消除执行常规 "),n("a",{attrs:{href:"https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-16-04",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker Engine命令"),n("OutboundLink")],1),e._v(" 时涉及的重复 ，并且还提供了比本机Docker CLI更直观的选择。")]),e._v(" "),n("p",[e._v("干具有快速启动和停止容器，安全或强力去除去除泊坞图像，连续实时监测容器进程的能力，并获得码头工人的产出 "),n("code",[e._v("info")]),e._v(" ， "),n("code",[e._v("inspect")]),e._v(" ， "),n("code",[e._v("history")]),e._v(" ，和 "),n("code",[e._v("log")]),e._v(" 命令。")]),e._v(" "),n("p",[e._v("大多数可以通过官方Docker Engine CLI执行的命令在干燥状态下更容易获得，并且具有相同的行为和结果。 dry还具有Docker Swarm功能，提供了一个出口来监视和管理多主机容器设置。")]),e._v(" "),n("p",[e._v("在本教程中，我们将安装dry并探索其一些最有用的功能：")]),e._v(" "),n("ul",[n("li",[e._v("与Docker容器，映像和网络进行交互，")]),e._v(" "),n("li",[e._v("监控Docker容器，以及")]),e._v(" "),n("li",[e._v("（可选）与Docker Swarm节点和服务进行交互。")])]),e._v(" "),n("h2",{attrs:{id:"先决条件"}},[e._v("先决条件")]),e._v(" "),n("p",[e._v("要遵循本教程，您将需要：")]),e._v(" "),n("ul",[n("li",[e._v("使用Ubuntu 16.04的 "),n("a",{attrs:{href:"https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-16-04",target:"_blank",rel:"noopener noreferrer"}},[e._v("初始服务器安装程序设置的"),n("OutboundLink")],1),e._v(" 一台Ubuntu 16.04服务器 ，包括sudo非root用户和防火墙。")]),e._v(" "),n("li",[e._v("已安装Docker，如 "),n("a",{attrs:{href:"https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-16-04",target:"_blank",rel:"noopener noreferrer"}},[e._v("如何在Ubuntu 16.04上安装和使用Docker中所述"),n("OutboundLink")],1),e._v(" 。")]),e._v(" "),n("li",[e._v("几个活动的Docker容器联网在一起以进行干测试。\n"),n("ul",[n("li",[e._v("作为本教程中的示例，我们将使用 "),n("a",{attrs:{href:"https://www.digitalocean.com/community/tutorials/how-to-install-wordpress-and-phpmyadmin-with-docker-compose-on-ubuntu-14-04",target:"_blank",rel:"noopener noreferrer"}},[e._v("如何在Ubuntu 14.04上使用Docker Compose安装Wordpress和PhpMyAdmin中"),n("OutboundLink")],1),e._v(" 的WordPress和PHPMyAdmin设置（无文档根目录的可选步骤） 。")]),e._v(" "),n("li",[e._v("或者，您可以使用自己的现有容器设置。")])])]),e._v(" "),n("li",[e._v("（可选）您本地计算机上的Docker Machine和使用Docker Swarm的Docker设置。 如果您在最后一步尝试使用Dry的Swarm功能，则这是必需的。 您可以通过以下方法进行设置： "),n("a",{attrs:{href:"https://www.digitalocean.com/community/tutorials/how-to-provision-and-manage-remote-docker-hosts-with-docker-machine-on-ubuntu-16-04",target:"_blank",rel:"noopener noreferrer"}},[e._v("在Ubuntu 16.04上"),n("OutboundLink")],1),e._v(" "),n("a",{attrs:{href:"https://www.digitalocean.com/community/tutorials/how-to-create-a-cluster-of-docker-containers-with-docker-swarm-and-digitalocean-on-ubuntu-16-04",target:"_blank",rel:"noopener noreferrer"}},[e._v("如何"),n("OutboundLink")],1),e._v(" "),n("a",{attrs:{href:"https://www.digitalocean.com/community/tutorials/how-to-provision-and-manage-remote-docker-hosts-with-docker-machine-on-ubuntu-16-04",target:"_blank",rel:"noopener noreferrer"}},[e._v("使用Docker Machine"),n("OutboundLink")],1),e._v(" 设置 "),n("a",{attrs:{href:"https://www.digitalocean.com/community/tutorials/how-to-provision-and-manage-remote-docker-hosts-with-docker-machine-on-ubuntu-16-04",target:"_blank",rel:"noopener noreferrer"}},[e._v("和管理远程Docker主机，"),n("OutboundLink")],1),e._v(" 以及 "),n("a",{attrs:{href:"https://www.digitalocean.com/community/tutorials/how-to-provision-and-manage-remote-docker-hosts-with-docker-machine-on-ubuntu-16-04",target:"_blank",rel:"noopener noreferrer"}},[e._v("在Ubuntu 16.04上"),n("OutboundLink")],1),e._v(" "),n("a",{attrs:{href:"https://www.digitalocean.com/community/tutorials/how-to-create-a-cluster-of-docker-containers-with-docker-swarm-and-digitalocean-on-ubuntu-16-04",target:"_blank",rel:"noopener noreferrer"}},[e._v("如何使用Docker Swarm和DigitalOcean创建Docker容器集群"),n("OutboundLink")],1),e._v(" 。")])]),e._v(" "),n("h2",{attrs:{id:"第1步-安装干燥"}},[e._v("第1步-安装干燥")]),e._v(" "),n("p",[e._v("首先，我们需要在Docker服务器上安装Dry。 最新版本的dry二进制文件可在 "),n("a",{attrs:{href:"https://github.com/moncho/dry/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("dry的GitHub发布页面上找到"),n("OutboundLink")],1),e._v(" 。")]),e._v(" "),n("p",[e._v("在发布时 下载最新版本的 "),n("code",[e._v("dry-linux-amd64")]),e._v(" 二进制文件 "),n("code",[e._v("v0.9-beta.3")]),e._v(" 。")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("wget https://github.com/moncho/dry/releases/download/v0.9-beta.3/dry-linux-amd64\n\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br")])]),n("p",[e._v("接下来，将新的二进制文件从移至并重命名 "),n("code",[e._v("dry-linux-amd64")]),e._v(" 为 "),n("code",[e._v("/usr/local/bin/dry")]),e._v(" 。")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("sudo mv dry-linux-amd64 /usr/local/bin/dry\n\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br")])]),n("p",[n("code",[e._v("/usr/local/bin")]),e._v(" 是用于存储服务器本地程序的二进制文件的标准位置。 将dry二进制文件移动到该目录还使我们能够从服务器内的任何位置在命令行上调用dry，因为该目录包含在外壳程序的 "),n("a",{attrs:{href:"https://www.digitalocean.com/community/tutorials/how-to-read-and-set-environmental-and-shell-variables-on-a-linux-vps",target:"_blank",rel:"noopener noreferrer"}},[n("code",[e._v("$PATH")]),e._v("环境变量中"),n("OutboundLink")],1),e._v(" 。")]),e._v(" "),n("p",[e._v("使用更改二进制文件的权限， "),n("code",[e._v("chmod")]),e._v(" 以允许您执行它。")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("sudo chmod 755 /usr/local/bin/dry\n\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br")])]),n("p",[e._v("您可以 "),n("code",[e._v("dry")]),e._v(" 通过运行带有 "),n("code",[e._v("-v")]),e._v(" 选项 的程序 来测试它 现在可以访问并且可以正常工作 。")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("dry -v\n\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br")])]),n("p",[e._v("这将返回版本号和构建详细信息：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("Version Details Outputdry version 0.9-beta.2, build d4d7a789\n\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br")])]),n("p",[e._v("现在已经设置好dry，让我们尝试使用它。")]),e._v(" "),n("h2",{attrs:{id:"第2步-与docker容器进行交互"}},[e._v("第2步–与Docker容器进行交互")]),e._v(" "),n("p",[e._v("快干，在您的终端中打开其仪表板。")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("dry\n\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br")])]),n("p",[e._v("仪表板的顶部包含有关服务器和Docker软件的信息，例如Docker版本，Docker Engine API版本，服务器是否为启用了Docker Swarm的工作程序/管理器节点以及服务器的主机名和资源。")]),e._v(" "),n("p",[e._v("仪表板的底部提供了导航键的参考，您可以使用这些导航键访问干燥的不同部分：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("Navigation key options[H]:Help [Q]:Quit | [F1]:Sort [F2]:Toggle Show Containers [F5]:Refresh [%]:Filter |\n[m]:Monitor mode [2]:Images [3]:Networks [4]:Nodes [5]:Services | [Enter]:Commands\n\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br")])]),n("p",[n("code",[e._v("F5")]),e._v("如果渲染出现错误，您可以随时使用它来刷新dry的显示。")]),e._v(" "),n("p",[n("code",[e._v("Containers")]),e._v(" 首次开始晾干时， 此仪表板本身默认为 列表。 该视图使您可以查看主机容器的一般状态。")]),e._v(" "),n("p",[e._v("如果您使用先决条件教程中的示例Wordpress，MariaDB和PHPMyAdmin容器堆栈，则会看到列出的这三个新组成的容器：")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://i.imgur.com/Wjd4PWh.png",alt:"干仪表板图像"}})]),e._v(" "),n("p",[e._v("使用键盘上的向上和向下箭头选择Wordpress容器，然后按 "),n("code",[e._v("ENTER")]),e._v(" 。")]),e._v(" "),n("p",[e._v("这将在屏幕顶部显示有关容器的一些信息，例如其端口映射，网络链接和网络容器IP地址：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("Wordpress Container Statistics  Container Name:  wordpress_wordpress_1                    ID:       f67f9914b57e       Status:  Up 13 minutes\n  Image:           wordpress                                Created:  About an hour ago\n  Command:         docker-entrypoint.sh apache2-foreground\n  Port mapping:    0.0.0.0:8080->80/tcp\n  Network Name:    bridge\n  IP Address:     172.17.0.3\n  Labels           6\n\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br")])]),n("p",[e._v("当您选择一个容器时，屏幕的下部中央还将显示一个新的可选选项列表：")]),e._v(" "),n("ul",[n("li",[n("p",[n("code",[e._v("Fetch logs")]),e._v(" ，相当于Docker Engine命令 "),n("a",{attrs:{href:"https://docs.docker.com/engine/reference/commandline/logs/",target:"_blank",rel:"noopener noreferrer"}},[n("code",[e._v("docker logs")]),n("OutboundLink")],1),e._v(" 。 这对于调试和排除容器中的错误很有用。")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("Kill container")]),e._v(" ，如果容器没有响应并且没有按预期退出，则可以使用它。")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("Remove container")]),e._v(" ，您可以使用它来干净地删除不需要的容器。")])])]),e._v(" "),n("p",[n("strong",[e._v("警告")]),e._v("："),n("code",[e._v("Kill container")]),e._v("和"),n("code",[e._v("Remove Container")]),e._v("选项会立即发出，并且"),n("strong",[e._v("没有确认提示")]),e._v("，因此请谨慎操作。")]),e._v(" "),n("ul",[n("li",[n("p",[n("code",[e._v("Inspect container")]),e._v(" ，相当于 "),n("a",{attrs:{href:"https://docs.docker.com/engine/reference/commandline/container_inspect/",target:"_blank",rel:"noopener noreferrer"}},[n("code",[e._v("docker container inspect")]),n("OutboundLink")],1),e._v(" 。")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("Restart")]),e._v(" ，它将停止并重新启动容器。 比输入Docker Engine命令 "),n("a",{attrs:{href:"https://docs.docker.com/engine/reference/commandline/restart/",target:"_blank",rel:"noopener noreferrer"}},[e._v("重新启动"),n("OutboundLink")],1),e._v(" 或 "),n("a",{attrs:{href:"https://docs.docker.com/engine/reference/commandline/ps/",target:"_blank",rel:"noopener noreferrer"}},[e._v("查询"),n("OutboundLink")],1),e._v(" 容器 "),n("a",{attrs:{href:"https://docs.docker.com/engine/reference/commandline/ps/",target:"_blank",rel:"noopener noreferrer"}},[e._v("状态"),n("OutboundLink")],1),e._v(" 要快得多 。")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("Show image history")]),e._v(" ，其中列出了用于构建容器映像的命令。 这些“层”是在映像构建过程中生成的，并且是由 "),n("a",{attrs:{href:"https://www.digitalocean.com/community/tutorials/docker-explained-using-dockerfiles-to-automate-building-of-images",target:"_blank",rel:"noopener noreferrer"}},[n("em",[e._v("Dockerfile中")]),n("OutboundLink")],1),e._v(" 提供的命令/操作"),n("a",{attrs:{href:"https://www.digitalocean.com/community/tutorials/docker-explained-using-dockerfiles-to-automate-building-of-images",target:"_blank",rel:"noopener noreferrer"}},[n("em",[e._v("导致的")]),n("OutboundLink")],1),e._v(" 。 使用此选项，我们可以看到使用基础Docker映像生成容器的精确程度。")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("Stats + Top")]),e._v(" ，其中包括诸如CPU使用率，内存消耗，入站和出站网络流量，文件系统操作，总进程ID和总容器正常运行时间之类的信息。 它还包括一个进程列表，该列表在功能上与的输出相同 "),n("a",{attrs:{href:"https://www.digitalocean.com/community/tutorials/how-to-monitor-cpu-use-on-digitalocean-droplets#top",target:"_blank",rel:"noopener noreferrer"}},[n("code",[e._v("top")]),n("OutboundLink")],1),e._v(" 。")])]),e._v(" "),n("li",[n("p",[n("code",[e._v("Stop")]),e._v(" ，它将停止容器。 您可以使用 "),n("code",[e._v("F2")]),e._v(" 将 "),n("code",[e._v("Containers")]),e._v(" 视图 上的容器切换 为包括 "),n("code",[e._v("currently stopped and active")]),e._v(" ， "),n("code",[e._v("Restart")]),e._v(" 选择 该 选项后 可以使用 选项 重新启动已停止的容器 。")])])]),e._v(" "),n("p",[e._v("按 "),n("code",[e._v("ESC")]),e._v(" 键返回到根 "),n("code",[e._v("Containers")]),e._v(" 仪表板的部分。 在这里，我们将看一下这一 "),n("code",[e._v("Images")]),e._v(" 部分。")]),e._v(" "),n("h2",{attrs:{id:"步骤3-与docker映像进行交互"}},[e._v("步骤3 —与Docker映像进行交互")]),e._v(" "),n("p",[e._v("在该 "),n("code",[e._v("Containers")]),e._v(" 部分中，按 "),n("code",[e._v("2")]),e._v(" 进入 "),n("code",[e._v("Images")]),e._v(" 干燥部分。")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://i.imgur.com/18pFgHi.png",alt:"图片部分"}})]),e._v(" "),n("p",[e._v("本节提供对 "),n("a",{attrs:{href:"https://docs.docker.com/engine/reference/commandline/image_inspect/",target:"_blank",rel:"noopener noreferrer"}},[n("code",[e._v("docker image inspect")]),e._v("命令的"),n("OutboundLink")],1),e._v(" 更轻松访问 。 dry还有一些便捷的键盘快捷键，您可以在导航栏中看到它们：")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("CTRL+D")]),e._v(" 对于 "),n("code",[e._v("Remove Dangling")]),e._v(" ，“悬空卷”是指不再由任何容器引用并因此是冗余的其他容器卷。 通常，在Docker的命令行上，此操作将涉及 "),n("code",[e._v("docker volume rm")]),e._v(" 命令和 "),n("code",[e._v("dangling=true")]),e._v(" 标志以及目标数据量。")]),e._v(" "),n("li",[n("code",[e._v("CTRL+E")]),e._v(" for "),n("code",[e._v("Remove")]),e._v(" ，相当于的 "),n("a",{attrs:{href:"https://docs.docker.com/engine/reference/commandline/rmi/",target:"_blank",rel:"noopener noreferrer"}},[n("code",[e._v("docker rmi")]),n("OutboundLink")],1),e._v(" ，只要您没有从该映像创建的容器仍处于活动状态并且正在运行，就可以删除映像。")]),e._v(" "),n("li",[n("code",[e._v("CTRL+F")]),e._v(" for "),n("code",[e._v("Force Remove")]),e._v(" ，使您可以像使用一样强行删除突出显示的图像 "),n("code",[e._v("docker rmi --force")]),e._v(" 。")]),e._v(" "),n("li",[n("code",[e._v("I")]),e._v(" for "),n("code",[e._v("History")]),e._v(" ，显示与 "),n("code",[e._v("Show Image History")]),e._v(" 该 "),n("code",[e._v("Containers")]),e._v(" 部分 相同的数据 。")])]),e._v(" "),n("p",[e._v("到目前为止，我们已经看到干燥的容器和图像部分。 要探索的最后一部分是网络。")]),e._v(" "),n("h2",{attrs:{id:"第4步-与docker网络交互"}},[e._v("第4步—与Docker网络交互")]),e._v(" "),n("p",[e._v("在该 "),n("code",[e._v("Images")]),e._v(" 部分中，按 "),n("code",[e._v("3")]),e._v(" 以访问该 "),n("code",[e._v("Networks")]),e._v(" 部分。")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://i.imgur.com/rR874kM.png",alt:"Docker网络仪表板"}})]),e._v(" "),n("p",[e._v("本部分是 "),n("a",{attrs:{href:"https://docs.docker.com/engine/reference/commandline/network_inspect/",target:"_blank",rel:"noopener noreferrer"}},[e._v("验证网络链接和"),n("OutboundLink")],1),e._v(" Docker容器 "),n("a",{attrs:{href:"https://docs.docker.com/engine/reference/commandline/network_inspect/",target:"_blank",rel:"noopener noreferrer"}},[e._v("的网络配置"),n("OutboundLink")],1),e._v(" 的 理想选择 。")]),e._v(" "),n("p",[e._v("您可以 "),n("a",{attrs:{href:"https://docs.docker.com/engine/reference/commandline/network_rm/",target:"_blank",rel:"noopener noreferrer"}},[e._v("从码头工人删除网络"),n("OutboundLink")],1),e._v(" 与 "),n("code",[e._v("CTRL+E")]),e._v(" ，虽然你不能删除预定义的默认泊坞网络一样 "),n("code",[e._v("bridge")]),e._v(" 。 但是，例如，您可以尝试 "),n("code",[e._v("bridge")]),e._v(" 使用箭头键将其选中，然后按来 删除 它 "),n("code",[e._v("ENTER")]),e._v(" 。 您会看到一长串这样的输出：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('Output. . .\n    "Containers": {\n        "34f8295b39b7c3364d9ceafd4e96194f210f22acc41d938761e1340de7010e05": {\n            "Name": "wordpress_wordpress_db_1",\n            "EndpointID": "68370df8a13b92f3dae2ee72ff769e5bdc00da348ef3e22fa5b8f7e9e979dbd5",\n            "MacAddress": "02:42:ac:11:00:02",\n            "IPv4Address": "172.17.0.2/16",\n            "IPv6Address": ""\n        },\n        "e7105685e0e6397fd762949e869095aa4451a26cdacdad7f5e177bde52819c4a": {\n            "Name": "wordpress_wordpress_1",\n            "EndpointID": "44ea3a133d887c5352b8ccf70c94cda9f05891b2db8b99a95096a19d4a504e16",\n            "MacAddress": "02:42:ac:11:00:04",\n            "IPv4Address": "172.17.0.4/16",\n            "IPv6Address": ""\n        },\n        "e7d65c76b50ff03fc50fc374be1fa4bf462e9454f8d50c89973e1e5693eef559": {\n            "Name": "wordpress_phpmyadmin_1",\n            "EndpointID": "7fb1b55dd92034cca1dd65fb0c824e87a9ba7bbc0860cd3ed34744390d670b78",\n            "MacAddress": "02:42:ac:11:00:03",\n            "IPv4Address": "172.17.0.3/16",\n            "IPv6Address": ""\n        }\n    },\n. . .\n\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br"),n("span",{staticClass:"line-number"},[e._v("18")]),n("br"),n("span",{staticClass:"line-number"},[e._v("19")]),n("br"),n("span",{staticClass:"line-number"},[e._v("20")]),n("br"),n("span",{staticClass:"line-number"},[e._v("21")]),n("br"),n("span",{staticClass:"line-number"},[e._v("22")]),n("br"),n("span",{staticClass:"line-number"},[e._v("23")]),n("br"),n("span",{staticClass:"line-number"},[e._v("24")]),n("br"),n("span",{staticClass:"line-number"},[e._v("25")]),n("br"),n("span",{staticClass:"line-number"},[e._v("26")]),n("br")])]),n("p",[e._v("上面输出的一部分显示了容器链接和容器 "),n("code",[e._v("bridge")]),e._v(" 网络 的网络IP地址和MAC地址 。 由此，您可以验证所有容器都是 "),n("code",[e._v("bridge")]),e._v(" 网络的 成员 并且可以通信，这是容器网络有效的基本指示。")]),e._v(" "),n("p",[e._v("使用 "),n("code",[e._v("ESC")]),e._v(" 以关闭网络输出。 现在我们已经看过了 "),n("code",[e._v("Containers")]),e._v(" ， "),n("code",[e._v("Images")]),e._v(" 和 "),n("code",[e._v("Networks")]),e._v(" 干燥的部分，让我们干的监控功能举动。")]),e._v(" "),n("h2",{attrs:{id:"第5步-监视docker容器"}},[e._v("第5步—监视Docker容器")]),e._v(" "),n("p",[e._v("按此 "),n("code",[e._v("M")]),e._v(" 键可快速精简当前服务器/主机上所有正在运行的容器的概述。 该屏幕可以从任何干，等的根段的访问 "),n("code",[e._v("Containers")]),e._v(" ， "),n("code",[e._v("Images")]),e._v(" 和 "),n("code",[e._v("Networks")]),e._v(" 。")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://i.imgur.com/L7cEJ1L.png",alt:"监控模式图像"}})]),e._v(" "),n("p",[e._v("此信息的一部分在程序的其他位置（例如， "),n("code",[e._v("Stats + Top")]),e._v(" 容器选项内） 列出， 但是此视图为所有容器上的信息提供了一个中心位置，可让您监视整个堆栈。 这在管理大量容器时很有用。")]),e._v(" "),n("p",[e._v("按下 "),n("code",[e._v("Q")]),e._v(" 以退出仪表板。 在这里，我们将使用Docker Swarm进行设置。")]),e._v(" "),n("h2",{attrs:{id:"第6步-在docker-swarm集群管理器上进行空安装（可选）"}},[e._v("第6步—在Docker Swarm集群管理器上进行空安装（可选）")]),e._v(" "),n("p",[e._v("在您的本地计算机上，用户 "),n("code",[e._v("docker-machine")]),e._v(" 以SSH方式进入您指定的集群管理器节点。 在Docker Swarm的先决条件教程中，此设置为 "),n("code",[e._v("node-1")]),e._v(" 。")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("docker-machine ssh node-1\n\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br")])]),n("p",[e._v("为了演示干安装的另一种方法，请 "),n("code",[e._v("curl")]),e._v(" 运行官方安装脚本并运行它。 如果您不想使用这种 "),n("code",[e._v("curl ... | sh")]),e._v(" 方式，则可以按照步骤1中的步骤进行干燥安装。")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("curl -sSf https://moncho.github.io/dry/dryup.sh | sh\n\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br")])]),n("p",[e._v("安装脚本将自动将干燥二进制文件移至 "),n("code",[e._v("/usr/local/bin")]),e._v(" ：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("Outputdryup: Moving dry binary to its destination\ndryup: dry binary was copied to /usr/local/bin, now you should 'sudo chmod 755 /usr/local/bin/dry'\n\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br")])]),n("p",[e._v("像在步骤1中一样，更新二进制文件的权限。")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("sudo chmod 755 /usr/local/bin/dry\n\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br")])]),n("p",[e._v("现在尝试空转。")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("dry\n\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br")])]),n("p",[e._v("在初始 "),n("code",[e._v("Containers")]),e._v(" 部分的 右上角 ， 现在填充了在先前步骤中空白 的 "),n("code",[e._v("Swarm")]),e._v(" 和 "),n("code",[e._v("Node role")]),e._v(" 状态行：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("OutputSwarm:      active\nNode role:  manager\nNodes:      3\n\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br")])]),n("p",[e._v("您还将看到列出了长图像名称的两个容器。 其他三个容器分布在其他Swarm工作程序节点之间，并由 "),n("code",[e._v("webserver")]),e._v(" 先决条件教程中 的 示例服务 定义 。")]),e._v(" "),n("p",[e._v("集群管理器的空安装已经准备就绪，接下来让我们看看如何使用Docker Swarm进行空安装。")]),e._v(" "),n("h2",{attrs:{id:"步骤7-与docker-swarm节点进行交互（可选）"}},[e._v("步骤7 —与Docker Swarm节点进行交互（可选）")]),e._v(" "),n("p",[e._v("在该 "),n("code",[e._v("Containers")]),e._v(" 部分中，按 "),n("code",[e._v("4")]),e._v(" 导航到该 "),n("code",[e._v("Nodes")]),e._v(" 部分。")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://i.imgur.com/9q4uXRr.png",alt:"仪表板节点部分"}})]),e._v(" "),n("p",[e._v("本节显示了每个节点的一些有用指标，例如其角色（经理或工作），状态和可用性。 屏幕顶部的行显示资源消耗信息。")]),e._v(" "),n("p",[e._v("在这里，使用箭头键选择 "),n("code",[e._v("node-2")]),e._v(" ，然后按 "),n("code",[e._v("ENTER")]),e._v(" 。 这将拉起单个节点的任务：")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://i.imgur.com/lZeJ9pN.png",alt:"node-2任务仪表板"}})]),e._v(" "),n("p",[e._v("在 "),n("code",[e._v("webserver")]),e._v(" 服务方面， "),n("code",[e._v("node-2")]),e._v(" 保留五个联网容器中的第一个和第二个。 该视图中的任务显示 "),n("code",[e._v("CURRENT STATE")]),e._v(" 两个容器中的处于活动状态，并列出了它们已运行了多长时间。 您自己的容器名称的编号可能会有所不同。 它取决于容器分配给哪个工作节点，这由 "),n("a",{attrs:{href:"https://docs.docker.com/engine/reference/commandline/service_create/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker服务命令"),n("OutboundLink")],1),e._v(" 确定 "),n("a",{attrs:{href:"https://docs.docker.com/engine/reference/commandline/service_create/",target:"_blank",rel:"noopener noreferrer"}},[e._v("。"),n("OutboundLink")],1)]),e._v(" "),n("p",[n("code",[e._v("Nodes")]),e._v(" 通过按键 返回到该 部分， "),n("code",[e._v("ESC")]),e._v(" 以便我们在此处探索dry的一些键绑定。")]),e._v(" "),n("p",[e._v("使用Docker Swarm时的一项常见任务是更改某些节点的状态或可用性。 "),n("code",[e._v("node-1")]),e._v(" 再次 突出显示 并按 "),n("code",[e._v("CTRL+A")]),e._v(" 以查看 "),n("code",[e._v("Set Availability")]),e._v(" 提示。")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("OutputChanging node availability, please type one of ('active'|'pause'|'drain')\n\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br")])]),n("p",[e._v("输入 "),n("code",[e._v("drain")]),e._v(" 并用确认 "),n("code",[e._v("ENTER")]),e._v(" 。")]),e._v(" "),n("p",[e._v("排水选项可防止节点接收来自Swarm集群管理器的新指示，通常用于计划的环境。 使用消耗也意味着节点管理器在设置为活动可用性的单独节点上启动副本，以补偿消耗的节点的临时停机时间。")]),e._v(" "),n("p",[e._v("提交 "),n("code",[e._v("drain")]),e._v(" 命令时，左上方的状态消息将确认操作：")]),e._v(" "),n("p",[e._v("您会在左上方显示的状态消息中看到此操作的确认。 此更改也反映在 "),n("code",[e._v("AVAILABILITY")]),e._v(" 列中：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("OutputNode iujfrchorop9mzsjswrclzcmb availability is now drain\n\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br")])]),n("p",[e._v("您还将注意到 "),n("code",[e._v("AVAILABILITY")]),e._v(" 列中 反映的更改 。")]),e._v(" "),n("p",[e._v("要 "),n("code",[e._v("node-2")]),e._v(" 重新显示，请再次突出显示它，然后按 "),n("code",[e._v("CTRL+A")]),e._v(" 来 重新显示 "),n("code",[e._v("Set Availability")]),e._v(" 提示。 这次，键入 "),n("code",[e._v("active")]),e._v(" 并按 "),n("code",[e._v("ENTER")]),e._v(" 。")]),e._v(" "),n("p",[e._v("您还将看到此操作的确认消息：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("OutputDocker daemon: update wrclzcmb availability is now active\n\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br")])]),n("p",[e._v("我们没有使用的选项 "),n("code",[e._v("pause")]),e._v(" 暂时中止节点中找到的每个容器内的所有进程，直到将它们 "),n("code",[e._v("active")]),e._v(" 重新 设置为为止 。")]),e._v(" "),n("p",[e._v("在最后一步，我们将与Docker Swarm服务进行交互。")]),e._v(" "),n("h2",{attrs:{id:"步骤8-与docker-swarm服务进行交互（可选）"}},[e._v("步骤8 —与Docker Swarm服务进行交互（可选）")]),e._v(" "),n("p",[e._v("按下 "),n("code",[e._v("5")]),e._v(" 以查看 "),n("code",[e._v("Services")]),e._v(" 干燥部分。")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://i.imgur.com/c7DMszC.png",alt:"仪表板服务科"}})]),e._v(" "),n("p",[e._v("前提条件教程仅设置一项服务， "),n("code",[e._v("webserver")]),e._v(" 该 服务 设置为在必要时最多复制五个实例（即创建新容器）。 该视图确认 "),n("code",[e._v("5/5")]),e._v(" 副本处于活动状态，并显示服务正在使用的端口映射及其分布式任务。")]),e._v(" "),n("p",[e._v("我们可以使用dry查看有关该服务的更多详细信息。 服务突出显示 "),n("code",[e._v("ENTER")]),e._v(" 时 按 "),n("code",[e._v("webserver")]),e._v(" 。")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://i.imgur.com/Vob3wMS.png",alt:"仪表板Web服务器任务摘要"}})]),e._v(" "),n("p",[e._v("这个详细的服务视图包含许多有关服务及其Swarm节点状态的信息。")]),e._v(" "),n("p",[e._v("有趣的是，尽管服务设置为五个，但您可能会注意到这里列出了七个任务。 这是因为当我们切换 "),n("code",[e._v("node-2")]),e._v(" 到消耗模式 时，Docker Swarm在步骤7的测试中创建了两个额外的副本任务 。")]),e._v(" "),n("p",[e._v("我们也可以使用dry来增加最大副本数。 按 "),n("code",[e._v("ESC")]),e._v(" 返回该 "),n("code",[e._v("Services")]),e._v(" 部分，然后 "),n("code",[e._v("CTRL+S")]),e._v(" 在突出显示 "),n("code",[e._v("webserver")]),e._v(" 服务的 同时 输入 。 这将弹出缩放提示：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("OutputScale service. Number of replicas?\n\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br")])]),n("p",[e._v("在上下文中，扩展此服务将有助于满足由于Web流量增长而产生的对其他资源的任何需求。 通过输入 "),n("code",[e._v("8")]),e._v(" 提示并按，将 副本数增加到8 "),n("code",[e._v("ENTER")]),e._v(" 。")]),e._v(" "),n("p",[e._v("检查此确认消息以确认操作：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("OutputDocker daemon: update v6gbc1ms0pi scaled to 8 replicas\n\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br")])]),n("p",[e._v("您现在可以在 "),n("code",[e._v("Services")]),e._v(" 视图中 看到 "),n("code",[e._v("8/8")]),e._v(" 该服务的副本。")]),e._v(" "),n("p",[e._v("如果要完全删除服务，请突出显示它，然后按 "),n("code",[e._v("CTRL+R")]),e._v(" 以拉出服务删除提示：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("OutputAbout to remove the selected service. Do you want to proceed? y/N\n\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br")])]),n("p",[n("code",[e._v("webserver")]),e._v(" 如果您不再需要或不想运行它， 可以使用它来删除该 服务。")]),e._v(" "),n("p",[e._v("最后，按 "),n("code",[e._v("Q")]),e._v(" 退出仪表板并退出程序。")]),e._v(" "),n("h2",{attrs:{id:"结论"}},[e._v("结论")]),e._v(" "),n("p",[e._v("通过遵循本教程，您已经在Docker主机和Docker Swarm集群管理器上进行了设置。 本教程还介绍了dry功能的基本知识，例如与Docker容器，映像和网络以及Docker Swarm节点和服务进行交互。")]),e._v(" "),n("p",[e._v("有另一种方法可以将空连接到运行Docker的远程主机，该方法在空运行时使用 "),n("code",[e._v("-H")]),e._v(" 带有远程主机IP地址 的 选项。 在您无法或不愿意安装干燥二进制文件的情况下，这很有用。")]),e._v(" "),n("p",[e._v("在这里，尝试将干燥应用于自己的Docker设置，以探索它如何简化您的工作流程。 您可以在 "),n("a",{attrs:{href:"https://github.com/moncho/dry#dry-keybinds",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub README中"),n("OutboundLink")],1),e._v(" 探索dry的额外键绑定 。")])])}),[],!1,null,null,null);r.default=t.exports}}]);