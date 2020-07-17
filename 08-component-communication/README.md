# Component Communication

## From Parent Component => Child Component

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

## From Child Component => Parent Component

You need to create a method that emits `$emit()` an event. This way the parent can "listen" to this events with `v-on:nameOfEvent`:

Child Template:

```
<button @click="resetname()">Reset Name</button>
```

Child Method:

```
methods: {
  resetName(){
    this.myName = "Max";
    this.$emit("nameWasReset", this.name);
  }
}
```

Parent Template:

```
<app-user-detail v-bind:myName="name" @nameWasReset="name = $event"></app-user-detail>
```
