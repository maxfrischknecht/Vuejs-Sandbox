<template>
  <div>
    <slot name="title"></slot>
    <hr>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  div {
    border: 1px solid blue;
    box-shadow: 0px 1px 30px red;
    padding: 20px;
    margin: 30px auto;
    text-align: center;
  }

  p {
    width: 100%;
    text-align: center;
    margin-top: 10px;
  }
  h1 {
    color: pink;
  }
</style>

