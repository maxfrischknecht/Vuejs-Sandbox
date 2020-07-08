# 04 Conditioals & Lists

## v-if
`v-if="booloeanInData"` not only hiddes the element, it takes the element out of the DOM (detachement!)

## v-else
Following directly a `v-if`, this is the opposite

## v-else-if
Since Vue 2.1 you can also use `v-else-if`, check the reference [here](https://vuejs.org/v2/guide/conditional.html#v-else-if)

## v-show
Use `v-show="booloeanInData"` to only set the element to `display: none`. The element stays in the DOM, it's only hidden.

## v-for 
Output data from an data array like

VUE

```
new Vue({
	el: '#app',
	data: {
		ingredients: ['apple', 'banana', 'sausage']
	}
})
```

HTML:

```
<ul>
	<li v-for="item in ingredients"> {{ item }} </li>
</ul>
```