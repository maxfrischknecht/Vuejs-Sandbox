<template>
  <div>
    <max-header></max-header>
    <server-app></server-app>
    <max-footer></max-footer>
  </div>
</template>

<script>
import ServerApp from './components/ServerApp.vue'
export default {
  components: {
    'server-app': ServerApp
  }
};
</script>
<style>
</style>
