# Vuejs-Sandbox
Playground for advanced vuejs stuff and personal notes from the course [Vue JS 2 - The Complete Guide (incl. Vue Router & Vuex)](https://www.udemy.com/course/vuejs-2-the-complete-guide/)


## 01 Dom Manipulation

### Mustache Syntax
Use `{{ someData }}` when Vue should render a string. You can directly access the data inside the Vue instance `data` object or `methods` object.

### Directives
Use `v-bind:argument` if you want to pass an argument to a html tag, for example a link like so (curly brackets would get rendered as string):

```
<a v-bind:href="someLink">The Link</a>
```
See more directives [here](https://vuejs.org/v2/api/#Directives)

### Render HTML
By default Vue doesn't render html tags, this means `<p> Hello </p>` inside the data will be rendered as string to avoid cross site scripting attacks. If you know the source is save you can use `v-html` like so:

```
<p v-html="htmlData"></p>
```

### Events
Use the `v-on:argument="functionToCall"` directive to listen to events like `click`, `leave` or `enter`.

Vue also creates AND PASSES an event object. You can use it to access diverse information, for example x and y coordinates.

If you want to pass custom arguments add them inside the `()` like so `v-on:click="increaseFunction(2)"`. If you still want to pass the default event just use both like so `v-on:click="increaseFunction(2, $event)"`.

##### Event Modifiers
If you have a nested element that should not be influenced by the function you can use event modifiers for example to stop the function like so: `<span v-on:mousemove.stop="">D E A D S P O T</span>`

##### Keys & Key Modifiers
Listen to key input events and use the modifiers to only listen to specific keys like so `v-on:keyup.enter="functionToCall"`. Checkt the Vue reference on it [here](https://vuejs.org/v2/guide/events.html#Key-Modifiers)

### Javascript in HTML
Wherever you write Vue code in the HTML, you can also write simple Javascript. For example by increasing directly the value and avoiding a function: 

```
<button v-on:click="counter++">Counter Button</button>
``` 

or by using short turnary statements like so: 

```
<p>{{counter > 10 ? "Greater than 10" : "Smaller than 10"}}</p>
```

### Two Way Data Binding
Use `v-model` to not only change the data trough events and read data trough rendering, but doing bot at the same time.
