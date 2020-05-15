import './styles/main.scss'

import Vue from 'vue'
import VueResource from 'vue-resource'
import Main from './components/Main.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import axios from 'axios'

Vue.use(VueResource);
Vue.use(Vuetify);


new Vue({
  render: a => a(Main),
  Vuetify,
  mounted() {
    //do something after mounting vue instance
    axios
    .get('https://api.coindesk.com/v1/bpi/currentprice.json')
    // .then(response => (console.log(response)))
  }
}).$mount('#vue-app')
