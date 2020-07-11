<template>
  <div>
    <p>Server Status: {{serverStatus}}</p>
    <hr>
    <button @click="status = !status">Change Status</button>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      status: false
    }
  },
  methods: {
    // use ES6 style
    changeStatus(){
      this.status  = !this.status;
    }
  },
  computed: {
    serverStatus(){
      return this.status ? "Critical" : "Normal";
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
