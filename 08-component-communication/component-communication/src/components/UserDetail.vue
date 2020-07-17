<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>User Name: {{myName}}</p>
    <p>Switched Name from Method: {{ switchName() }}</p>
    <p>Name is {{name}}</p>
    <button @click="resetName()">Reset Name</button>
  </div>
</template>

<script>
  export default {
    //props: ['myName'],
    props: {
      myName: {
        type: String,
        required: true,
        default: "Max"
      }
    },
    methods: {
      switchName(){
        return this.myName.split("").reverse().join("");
      },
      resetName(){
        this.myName = "Max";
        // send the new name back to the parent!
        this.$emit("nameWasReset", this.myName);

      }
    }
  };
</script>

<style scoped>
  div.component {
    background-color: lightcoral;
  }
</style>
