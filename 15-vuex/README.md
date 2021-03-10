# Vuex 

Vuex ads a centralized store. This way it's easier to communicate data between different childs in bigger applications. Typically the store is located in `components/store/store.js`

Install Vuex with `npm install --save vuex`

## Creating a store

store.js

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

main.js

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

## Changing the state of `counter` in store

components/Counter.vue

```js
methods: {
  increment() {
    this.$store.state.counter++;
  },
}
```

## Outputing the counter value reactively

Use a computed property to do so e.g. in components/Result.js

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