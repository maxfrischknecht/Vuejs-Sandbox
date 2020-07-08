# 08 Components
Use components to reuse things in Vue. They have basically the same features as the Vue instance. For example:

HTML:

```
<div id="app">
	<my-cmp></my-cmp>
	<my-cmp></my-cmp>
</div>
```

VUE: 

```
Vue.component('my-cmp', {
	// data needs to be a function that returns an object to not interfere with the instance
	data: function (){
		return {
			msg: "Hello World"
		}
	},
	template: "<h1>{{msg}}</h1>"
})

new Vue({
	el: "#app"
})

```

OUTPUT:

```
Hello World
Hello World
```

**Data needs to be a function so it can be unique to each usage of the component. If we for example would define it as a variable object, and we would change it, it would change in every used component, and not just the one where we changed the data.**

## Global vs local
Global components are defined with `Vue.component()`. Local components need to be hold in a variable and imported into the instance like so:

```
let cpm = {
	data: function (){
		return {
			msg: "Hello World"
		}
	},
	template: "<h1>{{msg}}</h1>"
}

new Vue({
	el: "#app",
	components: {
		mycomp: cpm
	}
})
```
HTML:

```
<div id="app">
	<mycomp></mycomp>
	<mycomp></mycomp>
</div>
```


