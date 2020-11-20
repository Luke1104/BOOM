import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
console.log(1)
console.log("SD卡就是")
console.log(123)
console.log(1)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
