import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store.js'

new Vue({
  el: '#app',
  store, // store:store 과 같은말
  render: h => h(App)
})
