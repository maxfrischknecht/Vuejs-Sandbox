# Vuex 

Vuex ads a centralized store. This way it's easier to communicate data between different childs in bigger applications. Typically the store is located in `./store/store.js`

## Installation

```
npm install --save vuex
```

## Vuex Pattern

![](vuex.png)

## Creating a store

./store/store.js

```js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// define and export the store to use it in other files
export const store = new Vuex.Store({
  // create a state and define all the stuff you want to keep track of
  state: {
    // this used to be a data property in App.js
    counter: 0
  }
});
```

## Registering the store

./main.js

```js
import Vue from 'vue'
import App from './App.vue'

// import the strore
import { store } from './store/store'

// add it to the vue instance 
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
```

## Changing the state of `counter` with a method

./components/Counter.vue

```js
methods: {
  increment() {
    this.$store.state.counter++;
  },
}
```

## Outputing the counter with a computed property

Use a computed property to output the state of `counter` reactively.

./components/Result.js

```js
<template>
  <p>Counter is: {{ counter }}</p>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.state.counter;
    },
  },
};
</script>
```
 
## Using Getters instead of methods

This is already nice, because we can avoid the anoying Child => Parent => Child communication. However, it's not the best way yet if you start building functions that manipulate the state. If we write the functions that change the value (e.g. `increment()`) on the component side, and if we need it in different places, we also need to write the same function multiple times (and debug multiple times). We can avoid this with the usage of *Getters*.

As part of the file `store/store.js`, inside the `new Vuex.Store({})` object, where you also define your `state`, you can define your Getters.

```js
// define your counting function here
getters: {
  // this function works on the state and returns a new value of it
  doubleCounter: state => {
    return state.counter * 2;
  }
}
```
### Using Getters

```js
computed: {
  counter() {
    return this.$store.getters.doubleCounter;
  }
}

// use {{ counter }} in the template
```

### Using Multiple Getters

If you have multiple Getters, instead of creating computed properties for all of them manually, you can use the `mapGetters` helper function.

So instead of this:

```js
computed: {
  counter() {
    return this.$store.getters.doubleCounter;
  },
  clickCounter() {
    return this.$store.getters.clickCounter;
  },
},
```

You can write this and vue creates the computed properties automatically!

```js
import { mapGetters } from 'vuex';

export default {
  computed: mapGetters([
    'doubleCounter', // name of the getters function
    'clickCounter'
  ])
};

// use {{ doubleCounter }} and {{ clickCounter }} in your templates
```

You can also give them names like:

```js
computed: mapGetters([
  propertyName: 'doubleCounter'
])

// use {{ propertyName }} in the template
```

However, this way you can't use your own computed properties next to the mapGetters. To do so, you need a different syntax. This syntax is ES6, and you need a valid compiler to avoid errors. In this example I added an additional compiler is used with `npm install --save-dev babel-preset-stage-2`. After installation you also need to add it to the babel file.

```js
computed: {
  ...mapGetters([
    'doubleCounter',
    'clickCounter'
  ]),
  someProperty () {
    return 'halleluja'
  }
}
```

./.babelrc

```js
{
  "presets": [
    ["es2015", { "modules": false }],
    ["stage-2"]
  ]
}
```

## Using Mutations (Synchronous Tasks)

With Mutations you actually change the data immediately. Mutations *always have to be synchronous!*. Due to the simple reason, that the order of mutations and changes is no longer linear, therefore, messing up the whole point of the store.

.store/store.js

```js
mutations: {
  increment: state => {
    state.counter++
  },
  decrement: state => {
    state.counter--
  }
}
```

You can use those Mutations inside you methods as following:

```js
methods: {
  increment() {
    this.$store.commit('increment'); // must stringify the mutation name
  },
  decrement() {
    this.$store.commit('decrement');
  },
  },
```

Or as mapped version:

```js
import { mapMutations } from 'vuex';
export default {
  methods: {
    ...mapMutations([
      'increment',
      'decrement'
    ]),
  },
};
```

## Using Actions + Mutations (Asynchronous Tasks)

**It is best practive to always use actions before making mutations**

The asynchronous part of the task is done by the Action, and only after finishing the task, the Action *commits* the change to the Mutation.

./store/store.js

```js
actions: {
  // context gives access to store functions like 'commit'
  increment: content => {
    context.commit('increment') // name of the mutation
  }
}
```
In the method:

```js
import { mapActions } from 'vuex';
export default {
  methods: {
    ...mapActions([
      'increment',
      'decrement'
    ]),
  },
};
```

### Passing Arguments with Actions

```js
methods: {
  increment(amount){
    this.$store.dispatch('increment', amount)
  }
}
```

./store/store.js

```js
// the action
actions: {
  // context gives access to store functions like 'commit'
  increment: (content, payload) => {
    context.commit('increment', payload) // name of the mutation
  }
}
// the mutation
mutations: {
  increment: (state, payload) => {
    state.counter += payload
  }
},
```

### Passing Multiple Arguments with Actions

Use Objects to pass multiple arguments to an action.

```html
<button class="btn btn-primary" @click="increment({amount: 100, duration: 200})">Increment</button>
```

```js
// the action
actions: {
  // context gives access to store functions like 'commit'
  increment: (content, payload) => {
    context.commit('increment', payload.amount) // name of the mutation
  }
}
```

Checkout the second example code `vuex-getters-example` for seeing this in action.