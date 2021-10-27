import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
// 导入全局样式表
import '@/assets/styles/base.css'
// 导入字体图标
import '@/assets/fonts/iconfont.css'

// element-ui自定义组件主题
import '@/assets/styles/element-ui/index.css'
import '@/assets/styles/element-ui/other.css'

Vue.config.productionTip = false
// 引入elementUI组件库
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
