new Vue({
	el: '#app',
	data: {
		counter: 0,
		secondCounter: 0
	},
	methods: {
		result: function(){
			console.log("method runs constantly!");
			return this.counter > 10 ? "Greater than 10" : "Smaller than 10";
		}
	},
	computed: {
		output: function(){
			console.log("computed only runs when really affected!");
			return this.counter > 10 ? "Greater than 10" : "Smaller than 10";
		}
	},
	watch: {
		// execute this whenever data.counter changes
		counter: function(){
			let vm = this;
			setTimeout(() => {
				console.log("reset because counter changed!!")
				vm.counter = 0;
			}, 2000);
		}
	}
})