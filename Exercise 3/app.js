new Vue({
  el: "#exercise",
  data: {
    value: 0,
  },
  computed: {
      result: function(){
          return this.value != 37 ? "Not there yet" : "Done";
      }
  },
  watch: {
      value: function(){
          let vm = this;
          setTimeout(() => {
              vm.value = 0;
          }, 5000);
      }
  }
});
