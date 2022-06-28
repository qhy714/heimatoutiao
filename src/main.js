import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
// import 'vant/lib/index.css'
import 'vant/lib/index.less'
import 'amfe-flexible'

import MyIcon from '@/components/MyIcon.vue'
// 创建引入reset文件，初始化样式，解决了图片基线对齐的问题

import '@/style/index.less'
Vue.component('MyIcon', MyIcon)
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
