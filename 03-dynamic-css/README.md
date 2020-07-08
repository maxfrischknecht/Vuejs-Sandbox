# 03 Dynamic CSS

## Toggle Classes

HTML:

```
<div class="demo" @click="attacheRed = !attacheRed" :class="{'red' : attacheRed}"></div>

```

VUE:

```
data: {
		attacheRed: false,
	}

```

CSS: 

```
.demo {
  width: 200px;
  height: 200px;
  background-color: black;
  display: inline-block;
  margin: 0px 15px 15px 0px;
}

.red {
  background-color: red;
}

```

## Computed Classes

HTML:

```
<div class="demo" @click="attacheRed = !attacheRed" :class="{'red' : attacheRed}"></div>

``

VUE 

```
computed: {
		computedClass: function (){
			return {
				blue: this.attacheBlue
			}
		}
	}
```

# Typed Classes
Can be anything, doesn't need to be a input type.

HTML: 

```
<div class="demo" :class="typedColor"></div>
<input type="text" v-model="typedColor">

```

VUE

```
data: {
	typedColor: 'yellow'
}
```