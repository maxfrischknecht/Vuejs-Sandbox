// a reusable vue component
Vue.component('fancycomponent', {
	template: "<h2>⚜️ Fancy Component ⚜️</h2>"
});

// a first vue instance
let vm1 = new Vue({
  data: {
    title: 'The VueJS Instance',
    showParagraph: false
  },
  methods: {
    show: function() {
      this.showParagraph = true;
			this.updateTitle('The VueJS Instance (Updated)');
			this.$refs.myButton.innerText = "Test";
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title changed, new value: ' + value);
    }
  }
});
vm1.$mount("#app1");

// a second vue instance communicating with the first one
let vm2 = new Vue ({
	el: '#app2',
	data: {
		title: 'The Second Vue Instance'
	},
	methods: {
		changeTheOtherInstance: function(){
			vm1.title = 'Changed!!';
		}
	}
})

// another way of mounting
let vm3 = new Vue ({
	template: "<h1>A Title with The Template Defined in Vue not HTML</h1>"
})
vm3.$mount();
document.getElementById('app3').appendChild(vm3.$el);
