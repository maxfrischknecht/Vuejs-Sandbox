# Component Communication

## Parent => Child

#### Child Component

In the child component you have to create a property (props) like so:

```
export default {
  props: ["myName"]
};
```

`props` is always an array and it contains the variables you can then use in your template:

```
<p>User Name: {{myName}}</p>
```

Hint: You can also access the variable in the methods. Keep in mind that it is an array.

```
 methods: {
  switchName(){
    return this.myName.split("").reverse().join("");
  }
}
```

#### Parent Component

You can pass the data by adding it to the template like so:

```
 <app-user-detail v-bind:myName="namefromdata"></app-user-detail>
```

Pay attention, it needs to be `v-bind` in order to be reactive!

## Props Validation 📣
To be shure that you get the right stuff, you need to get some more controle by making your props an object. This way, if something is foggy, your component is not rendering:

```
props: {
  myName: {
    type: String // for multiple types: [String, Array]
    required: true,
    default: "Max",
    
  }
},
```
If you pass an object or array, the default would need to be a function:

```
props: {
  myName: {
  	type: Object,
    default: function(){
    	return: {
    		name: "Max"
    	}
    }
  }
},

```

## Child => Parent (with custom event)

You can create a custom method that emits `$emit()` an event. This way the parent can "listen" to this events with `v-on:nameOfEvent`:

#### Child Template

```
<button @click="resetname()">Reset Name</button>
```

#### Child Method

```
methods: {
  resetName(){
    this.myName = "Max";
    this.$emit("nameWasReset", this.name);
  }
}
```

#### Parent Template

```
<app-user-detail v-bind:myName="name" @nameWasReset="name = $event"></app-user-detail>
```

## Child => Parent (with callback)

A nicer way to change parent data trough the child is to use a prop to pass a function to the child. The child then executes the parent function.

#### Parent Method (define the function)

```        
methods: {
    resetName(){
        this.name = "Max"
    }
},

```
#### Parent Template (pass the function to the child)

```
 <app-user-detail 
    v-bind:resetFn="resetName"
</app-user-detail>
```

#### Child Component (reference the function as prop)

```
props: {
	resetFn: Function
}
```
#### Child Template (call the function)

```
<button @click="resetFn()">Reset Name by callback</button>
```
