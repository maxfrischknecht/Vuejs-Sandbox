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