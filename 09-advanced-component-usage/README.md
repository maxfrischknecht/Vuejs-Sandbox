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