new Vue({
	el: '#app',
	data: {
		attacheRed: false,
		attacheBlue: false,
		typedColor: 'yellow',
		width: 200,
		inlineColor: 'purple'
	},
	computed: {
		computedClass: function (){
			return {
				blue: this.attacheBlue
			}
		},
		inlineStyle: function(){
			return {
				backgroundColor: this.inlineColor,
				width: this.width + "px"
			}
		}
	}
})