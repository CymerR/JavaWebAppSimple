import './styles/main.scss'

import Vue from 'vue'
import Main from './components/Main.vue'

new Vue({
  el: '#app',
  render: a => a(Main)
})
