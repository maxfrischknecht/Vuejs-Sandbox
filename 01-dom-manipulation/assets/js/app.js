new Vue({
	el: '#app',
	data: {
		title: 'Hello Data!',
		someData: "Hello Data Provided by a Function!",
		someLink: "www.google.com",
		historyData: "Once Upon A Time...",
		htmlData: "<a href='https://google.com'>Html A Tag from Data</a>",
		counter: 0,
		x: 0,
		y: 0
	},
	methods: {
		sayHelloFunction: function (){
			// overwrite the some data as by the way
			this.historyData = "... it was in a village";
			return "Hello Function!";
		},
		getDataFunction: function(){
			return this.someData;
		},
		increaseFunction: function(){
			this.counter++;
		},
		getCoordinates: function(event){
			// event gets passed automatically!
			this.x = event.clientX;
			this.y = event.clientY;
		}
	}
})