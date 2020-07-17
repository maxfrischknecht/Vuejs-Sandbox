<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <button @click="selectedComponent = 'appQuote'">Quote</button>
        <button @click="selectedComponent = 'appAuthor'">Author</button>
        <button @click="selectedComponent = 'appNew'">New</button>
        <hr>
        <component :is="selectedComponent"></component>
        <hr>
        <app-quote>
          <h1 slot="title">{{quoteTitle}}</h1>
          <p>Bla Bla</p>
          <p>more blablabla</p>
        </app-quote>
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
import Quote from "./components/Quote";
import New from "./components/New";
import Author from "./components/Author";

export default {
  data: function() {
    return {
      quoteTitle: "The Quote",
      selectedComponent: 'appQuote'
    };
  },
  components: {
    appQuote: Quote,
    appAuthor: Author,
    appNew: New
  }
};
</script>

<style>
</style>
