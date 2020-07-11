<template>
<div>
    <app-server-status v-for="server in 5" v-bind:key="server"></app-server-status>
</div>
</template>

<script>
import ServerStatus from './ServerStatus.vue'
export default {
  components: {
    'app-server-status' : ServerStatus
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
