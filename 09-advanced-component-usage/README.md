# 09 Advanced Component Usage

## Slots

Pass html & dynamic (!) content from the parent to the child:

#### Parent Template:

```
<template>
   <app-quote>
       <h1>{{quoteTitle}}</h1>
       <p>Bla Bla</p>
   </app-quote>
</template>
```

#### Child Template:

```
<slot></slot>
// outputs the h1 & p
```
**Attention** The scoped styling applies in the child component, not the parent!
