<template>
  <div>
    <h3>New Quote</h3>
    <button @click="counter++">Increase</button>
    <p>{{counter}}</p>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        counter: 0
      }
    },
    destroyed() {
      console.log("destroyed!")
    },
    activated() {
      console.log("activated")
    },
    deactivated() {
      console.log("deactivated")
    },
  }
</script>

<style scoped>

</style>

