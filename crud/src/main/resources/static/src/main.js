import './styles/main.scss'

import Vue from 'vue'
import VueResource from 'vue-resource'
import Main from './components/Main.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(VueResource);
Vue.use(Vuetify);

new Vue({
  el: '#vue-app',
  render: a => a(Main),
  Vuetify
})
