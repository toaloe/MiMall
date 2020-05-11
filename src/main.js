import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  // router 的名字与后面引入文件的名字一致时，可以只写一个
  router,
  render: h => h(App),
}).$mount('#app')
