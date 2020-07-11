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

## Global Components
To use the component globally in **CLI**, import it in `main.js` like so:

```
import Home from './components/Home.vue'
Vue.component("app-server-status", Home);
```
You then can use `<app-server-status>` to access everything in the `Home.vue` file.

To use components globally in **client side Vue** use the `Vue.component({})` method.


## Local Components
To use the component locally in **CLI**, import them in your file, e.g `Home.vue` like so:

```
<template>
  <app-server-status></app-server-status>
</template>

<script>
import ServerStatus from './ServerStatus.vue'
export default {
  components: {
    'app-server-status' : ServerStatus
  }
}
</script>
```

Local components need in **client side Vue** to be hold in a variable and imported into the instance like so:

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


