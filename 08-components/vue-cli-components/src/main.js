import Vue from 'vue'
import App from './App.vue'

// register the component globally
// means you can use <app-server-status> in App.vue
import Home from './components/Home.vue'
Vue.component("app-servers", Home);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
