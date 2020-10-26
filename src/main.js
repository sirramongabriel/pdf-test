import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import pdffiller from '@sparticuz/pdffiller';
// import pdffiller from 'pdffiller';

Vue.config.productionTip = false

// Vue.use(pdffiller)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
