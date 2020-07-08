# Methods, Computed Properties, Watchers

## Methods

Methods are not chached! Use them when you know you want to constantly recalculate the result.
Methods get ALWAYS executed when something changes on the page! Because methods don't know what changes of the page they need to play a role in and which not, so they always run whenever something, e.g. a data point, is changing.

## Computed Properties


Computed Properties are "cached", use them for heavy, and complex calulcations that only should be executed if a re-render of the page concerns them. Its best practices to use them as often as possible. However, they need to be **synchronized** Computed Properties you can use like data! Check the difference: 

HTML:

```
<p>Result from Methods: {{ result() }}</p>
<p>Output from Computed: {{ output }}</p>
```

JS: 

```
methods: {
	result: function(){
		console.log("method runs constantly!");
		return this.counter > 10 ? "Greater than 10" : "Smaller than 10";
	}
},
computed: {
	output: function(){
		console.log("computed only runs when really affected!");
		return this.counter > 10 ? "Greater than 10" : "Smaller than 10";
	}
}
	
```

They also are aware of whats happening on the page, so they don't re-run everytime the page gets updated. They only run if THEIR data changes! You can see this in the console of the example. The method also runs when clicking the second counter button, altought this doesn't effect the method at all.

## Watch

Watch executes code upon data changes, therefore, you need to hook it up with the date like so:

```
data: {
	thingToWatch: 0
},
watch: {
	thingToWatch: function (value) {
		// do something here when thingToWatch changes
		// it needs to match the data name
		// you also automatically get the value!
	}
}


```

