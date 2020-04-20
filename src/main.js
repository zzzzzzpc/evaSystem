import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store/index'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'

require('./mock')

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.use(ElementUI);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
