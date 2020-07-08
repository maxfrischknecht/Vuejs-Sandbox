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

You can also output a list of numbers like this:

```
<span v-for="n in 20"> {{n}}</span>
```

##### Keys ❗️
Vue only keeps track of the index position of elements in an array. So when you change them, for example by pushing a new element or reordering the array, it might happen that Vue overwrites elements witch each other. Because it only knows the index position of the element it doens't now the elements uniqueness. You can solve this problem by providing a unique key! for example like this:

```
<li v-for="item in ingredients" :key="ingredient"> {{ item }}</li>
```


## Module Resources & Useful Links

JSFiddle:

* Conditionals (v-if and v-show): https://jsfiddle.net/smax/hoc719j5/
* Lists: https://jsfiddle.net/smax/o7uy2g0u/

Useful Links:

* Official Docs - Conditionals: http://vuejs.org/guide/conditional.html
* Official Docs - Lists: http://vuejs.org/guide/list.html