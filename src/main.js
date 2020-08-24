import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import toast from '@/components/common/toast'
import vueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false
// 事件总线
Vue.prototype.$bus = new Vue()
//安装toast插件
Vue.use(toast)
//图片懒加载
Vue.use(vueLazyLoad,{
  loading:require('@/assets/img/占位图片.png')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
