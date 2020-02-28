import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import VueResource from 'vue-resource'
import 'material-design-icons-iconfont/dist/material-design-icons.css'



Vue.config.productionTip = false

Vue.use(VueResource)

new Vue({
  router,
  vuetify,
  firebase,
  firebaseui,
  render: h => h(App)
}).$mount('#app')

var firebase = require('firebase');
var firebaseui = require('firebaseui');