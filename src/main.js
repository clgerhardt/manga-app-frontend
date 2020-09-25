import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import vuetify from './plugins/vuetify';
import Vuex from "vuex";
import store from "@/store";

// import vuetify from '@/plugins/vuetify' // path to vuetify export
Vue.use(Vuex);

Vue.config.productionTip = false

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
