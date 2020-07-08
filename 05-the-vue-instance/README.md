# 05 The Vue Instance
Everything inside `new Vue = ...` is a Vue instance. You can have multiple ones and you can communicate with it also outside from the dedicated `<div id="app"></div>`.

Official Docs - The Vue Instance: http://vuejs.org/guide/instance.html

## Multiple Instances

It's perfectly valid to have multiple Vue instances on the same page. You can also access one instance from another instance (or from vanilla js) trough saving the instance in a variable like so:

```
let vm1 = new Vue({
	el: '#app1',
		data: {
		title: 'Hello'
	}
})

console.log(vm1.title);
// outputs 'Hello'

```

## Adding New Properties to Vue from Outside

You can add a new property to a Vue instance like so:

```
vm1.newProb = "New!"
```

However, it will be added after Vue create the instance trought its constructor. Therefore, the property will be there, but it will not be reactive.

## Some Important Vue Properties

Look at your properties by loging the vue instance, e.g. `console.log(vm1)`.

### `$el`
Refers to the template/html element	

### `$data`
Holds the data, you can access it for example directly trough `vm1.$data.title`. This means you can also create the data from outside your vue instance like so:

```
let data = {
	title: 'title'
}

let vm1 = new Vue ({
	el: '#app1',
	data: data
})
```

**Vue instances live in the Javascript world, they are totally fine with interacting with other code around it. As well as other code can access Vue properties like data or methods.**

## Reference your DOM elements with `ref="someName"`
You can give a reference to a DOM element by adding the vue attribute `ref`. By doing so you can access the element as js object in your vue instance and outside of it.

HTML:

```
<button v-on:click="show" ref="myButton">Show Paragraph</button>

```

VUE:
```
this.$refs.myButton.innerText = "Test";
```

**This basically replaces your common query selector**

Generally it's better to use `$refs` to get information from an object, and not setting information. This is because the as soon as the Vue instance renders anew, for example when the data changes, it takes the information from the template (== what is defined in the instance), and, therefore, overwrites the DOM. Meaning this would be overwritten as soon as the instance renders anew:

```
vm1.$refs.heading.innerText == 'Something'
```

## `$mount`
Usually you tell Vue where to mount the application trough `el: "#app1"`. But maybe you don't know where to mount your app or the element where you want it to mount doesn't exist yet, then you can use `$mount` like so.

```
let vm1 = new Vue({
	data: {
		...
	},
	methods: {
		...
	}
})

vm1.$mount("#app1");
```
## Templates inside the Vue instance

Instead of having the template logic in HTML you can also define it in the Vue instance like so:

```
let vm3 = new Vue ({
	template: "<h1>A Title with The Template Defined in Vue not HTML</h1>"
})

vm3.$mount();

// a bit a silly way to add it
document.getElementById('app3').appendChild(vm3.$el);

```

## Using Components
You can define reusable components in Vue by defining them as following: 
```
Vue.component('fancycomponent', {
	// my options
})
```

Then you can use the component in every `#app` you want, as often as you want with `<fancycomponent></fancycomponent>`
