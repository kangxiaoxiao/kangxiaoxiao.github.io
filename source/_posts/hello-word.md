---
title: hello-word
date: 2018-02-28 17:54:23
tags:
     - html
categories:
    #- 前端
---

{% img [class names] /images/1.jpg 700 200 [title text [alt text]] %}

<!--more-->
琢磨了两天，总算是把博客搭建起来了。感觉很不容易啊~
具体方法如下：
<br/>
<strong>安装hexo</strong>
（1）安装好应用程序git、nodeJS
（2）用npm安装hexo
{% codeblock %}
 $ npm install -g hexo-cli
 $ npm install hexo --save
{% endcodeblock %}
（3）hexo的相关配置
{% codeblock %}
 $ hexo init <folder>
 $ cd <folder>
 $ npm install
{% endcodeblock %}
（4）生成静态文件，并本地启动服务器
{% codeblock %}
 $ hexo generate
 $ hexo server
{% endcodeblock %}

<strong>将hexo发布在github 上</strong>
首先需要在github上创建账号，新建一个repository 。新建repository的名字应当为 “你的github用户名.github.io”
配置ssh key
配置根目录中_config.yml中有关deploy的部分：
{% codeblock %}
 deploy:
   type: git
   repo: git@github.com:kangxiaoxiao/kangxiaoxiao.github.io.git
{% endcodeblock %}
错误写法：
{% codeblock %}
 deploy:
   type: github
   repository: https://github.com/liuxianan/liuxianan.github.io.git
   branch: master
{% endcodeblock %}
因为后面一种写法是hexo2.x的写法，现在已经不行了
安装插件hexo-deployer-git
{% codeblock %}
 npm install hexo-deployer-git --save
{% endcodeblock %}
代码提交
{% codeblock %}
 $ hexo d
{% endcodeblock %}
提交成功后会如图所示：
{% img [class names] /images/push_success.jpg [width] [height] [title text [alt text]] %}

<strong>新建一篇博客并提交到github</strong>
{% codeblock %}
 $ hexo new post "hello-word"
 $ hexo d -g
{% endcodeblock %}
到这里就可以测试访问啦
地址：https://kangxiaoxiao.github.io/
<br/>
<strong>更换主题</strong>
首先需要下载主题:
{% codeblock %}
 $ cd 根文件夹
 $ git clone https://github.com/th720309/hexo-theme-believe.git themes/hexo-theme-believe
 $ npm install --save hexo-renderer-sass
{% endcodeblock %}
修改根文件中_config.yml中的theme: landscape改为theme: hexo-theme-believe，然后重新执行hexo g来重新生成。
如果出现一些莫名其妙的问题，可以先执行hexo clean来清理一下public的内容，然后再来重新生成和发布。

hexo官方文档：https://hexo.io/zh-cn/docs/
