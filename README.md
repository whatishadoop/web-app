# oceanmobile-web
移动端平台web端

参考资料
1.WijmoJS 前端界面设计器  https://www.grapecity.com.cn/developer/wijmojs/demo
2.webpack组织模块打包Library的原理及实现,形成umd方式的lib,通过<script src>引入使用即可
3.vue2中的mixins功能使用，vue-mixins使用注意事项和高级用法
4.setTimeout在vue中的正确使用，vue加载中loading提示信息
5.vue axios全攻略
6.vue.nextTick()方法的使用详解（简单明了） 
7.idea 添加 VUE 的语法支持和开发
8.webpack不同devtools打包对比,VUEJS文件扩展名esm.js和common.js是什么意思
9.webpack的使用（5） ---- 热加载自动刷新
10.vue-cli 配置webpack去除console输出日志
11.vue-cli脚手架中webpack配置基础文件详解 http://www.cnblogs.com/zhangruiqi/p/9062005.html

待解决问题
1.APP编辑器样式调整问题  --优先级高
2.邮箱工具缓存问题，新增数据和缓存中不一致
3.图片管理文件保存方式接口扩展
4.编辑器界面切换tab缓存保留问题
5.表结构名称规范问题   --解决
6.后台工程java类名规范问题    --解决
7.菜单栏滚动条消失不见问题
8.支付宝菜单功能去除  -- 已解决
9.支持ldap 方式存储用户数据，方便与第三方集成
10.国际化支持测试,添加中英文切换 --解决
11.添加决策管理功能业务菜单  --解决
12.启动报错有待解决 --
13.添加编辑器相关业务菜单项 --解决
14.添加中间件性能监控菜单项 --解决
15.添加消息中心菜单项 --解决
16.添加流程管理菜单项 --解决
17.element 全局引入以及iview 使用局部加载方式，解决两者全局引入互相冲突问题，包大小问题 
-- 解决
18.element 以及iview 兼容国家化支持 --解决
19.开发应用管理界面
20.技术架构方案介绍

21.响应式布局方案验证  --采用postcss-px2rem和amfe-flexible解决
   1.手淘flexible.js适配
   2.基于vue-cli配置手淘的lib-flexible + rem，实现移动端自适应
   3.使用Flexible实现手淘H5页面的终端适配rem自适应布局-移动端自适应必备
   
   px为rem 的配置方法
   5.vue-cli2、vue-cli3的postcss-pxtorem插件 px转换rem
   6.【前端库】淘宝适配 rem适配 lib-flexible.js 个人总结
   7.手机淘宝——flexible.js 移动端自适应方案 
   8.如何在Vue项目中使用vw实现移动端适配(转) https://www.jianshu.com/p/1f1b23f8348f
   9.vue-cli脚手架中使用flexible淘宝适配方案 -- 重要
   10.vue中使用px2remLoader，只转换了vue文件中的px，如何使外部css文件中px也转换成rem
   11.vue-cli脚手架中使用flexible淘宝适配方案 --参看这个设置vue中css->rem转换
   
   mintui插件自带移动端适配，排除转换为rem方式
   1.Vuejs 配合 mint-ui 开发移动端web
   2.详解vue移动端项目的适配(以mint-ui为例)
   3.vue中使用第三方UI库的移动端rem适配方案
   4.Vue CLI 3 自适应解决方案 postcss-px2rem和amfe-flexible
   
   5.vue-cli3.0使用及配置（部分） https://blog.csdn.net/qq_36407748/article/details/80739787
   6.vue-cli2、vue-cli3的postcss-pxtorem插件 px转换rem
   
   项目中使用
    6.在项目中使用postcss-plugin-px2rem  --项目中使用
    4.vue-cli3.0 使用postcss-plugin-px2rem（推荐）和 postcss-pxtorem（postcss-px2rem）自动转换
    
    41.个人中心页面 https://www.jianshu.com/p/e0f55ef33294 --有价值参考
    Vue-router-3.0.1 使用router.addRoutes()设置动态路由，页面刷新后无效 https://forum.vuejs.org/t/vue-router-3-0-1-router-addroutes/33181  --有价值参考
    https://forum.vuejs.org/ --vue论坛
22.布局样式调整 -- 简单调整了下，还需优化
23.优化控件组装核心控件
24.mockjs使用 --未解决

25.封装控件 --解决
26.解决拖动后控件布局样式 -- header固定  content内容区动态修改   底部tab为固定区域
27.把手机编辑页面保存下来，去除冗余的样式和html元素 --解决
28.手机右侧弹出框能动态承载各种动态页面
29.组件与组件通信方式，组件与右侧配置样式对话框通信
30.用router-view 替换component,这样才可以使用keep-alive
31.组件cache通用初始化设计改造
32.


