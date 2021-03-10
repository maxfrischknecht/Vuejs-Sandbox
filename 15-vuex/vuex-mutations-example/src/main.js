import Vue from 'vue'
import App from './App.vue'

// import the strore
import { store } from './store/store'

// add it to the vue instance 
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
