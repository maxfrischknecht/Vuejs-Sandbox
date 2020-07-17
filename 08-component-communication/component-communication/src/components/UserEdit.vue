<template>
  <div class="component">
    <h3>You may edit the User here</h3>
    <p>Edit me!</p>
    <p>{{userAge}}</p>
    <button @click="editAge()">Edit The Age in Child</button>
  </div>
</template>

<script>
export default {
  props: {
    userAge: Number
  },
  methods: {
    editAge() {
      this.userAge = 30;
      // pass to parent and from there to child
      this.$emit("ageWasEdited", this.userAge);
    }
  }
};
</script>

<style scoped>
div.component {
  background-color: lightgreen !important;
}
</style>
