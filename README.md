# Vuejs-Sanbox
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
