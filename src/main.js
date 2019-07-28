import Vue from 'vue'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import '@/styles/index.scss' // global css

import animated from 'animate.css'

import App from './App'
import router from './router/routers'
import permission from './components/permission'
import store from './store'

// 引入所有icon svg资源，才能触发svg-sprite-loader 解析svg,在body页面插入所有symbol sprite全局内容，通过id进行调用
import '@/icons' // icon
import './router/index' // permission control

//  引入总线
import Bus from './utils/bus'
// 引入echarts
import echarts from 'echarts'
// 引入uuid生成器
import uuid from 'uuid-js'
// 引入自定义组件(插件)
import webAppPlugin from './views/appmanage/components'
// 引入国际化
import i18n from './i18n'
// 引入iview
import './vendor/iview.js'

// 引入mintui
import './vendor/mintui.js'
// import 'lib-flexible'

Vue.prototype.$uuid = uuid
Vue.prototype.$echarts = echarts
Vue.prototype.$bus = Bus

Vue.use(animated)
Vue.use(webAppPlugin)
Vue.use(permission)
Vue.use(mavonEditor)
Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
})
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
