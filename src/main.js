import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as store from './store/store'
import './registerServiceWorker'


Vue.prototype.$store = store

Vue.config.productionTip = true

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
