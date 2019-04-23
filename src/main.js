import Vue from 'vue'
import './plugins/bootstrap-vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate';
import VModal from 'vue-js-modal'
Vue.use(Vuelidate, VModal)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
