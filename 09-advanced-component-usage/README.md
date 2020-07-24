# 09 Advanced Component Usage

## Slots

Pass html & dynamic (!) content from the parent to the child:

#### Parent Template:

```
<template>
   <app-quote>
       <h1 slot="title">{{quoteTitle}}</h1>
       <p>Bla Bla</p>
   </app-quote>
</template>
```

#### Child Template:

```
<slot name="title"></slot>
<slot></slot>
// outputs the h1 (title) & p (default)
```
You can style slots from the parent or the child.

## Dynamic Components

Dynamically decide which component to load in the parent with a boolean value in the data matching the component name:

#### Parent Template:

```
<button @click="selectedComponent = 'appQuote'">Quote</button>
<button @click="selectedComponent = 'appAuthor'">Author</button>
<button @click="selectedComponent = 'appNew'">New</button>

<component :is="selectedComponent">
   <p>Default Content</p>
</component>
```

#### Parent Instance
```
import Quote from "./components/Quote";
import New from "./components/New";
import Author from "./components/Author";

export default {
  data: function() {
    return {
      selectedComponent: 'appQuote'
    };
  },
  components: {
    appQuote: Quote,
    appAuthor: Author,
    appNew: New
  }
};

```

## Alive or Destroyed?

By default dynamic components get destroyed when we switch to another component. This means that your data from the component get's also reset to the starting values (e.g. 0 on a counter).

If you want the component to stay alive wrap it:

```
<keep-alive>
  <component :is="selectedComponent"></component>
</keep-alive>
```

#### Deactived & Activated

There are new live-cycle-hooks with this.

##### Deactivated:
Called when you leave the currently active component and switch to another one.

##### Activated:
Called when you come from another component and load this one dinamically.

```
activated() {
  console.log("activated")
},
deactivated() {
  console.log("deactivated")
},
```