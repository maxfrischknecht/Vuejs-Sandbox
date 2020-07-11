import Vue from 'vue'
import App from './App.vue'

// Import Global Components Header & Footer
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
Vue.component('max-header', Header)
Vue.component('max-footer', Footer)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
