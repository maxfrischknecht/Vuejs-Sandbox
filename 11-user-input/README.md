# User Input

Bind form input with `v-model`:

Template Form

```
<div class="form-group">
<label for="email">Mail</label>
<input type="text" id="email" class="form-control" v-model="user.email" />
</div>

// output in live
<p>Mail: {{user.email}}</p>

```

Data: 

```
export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
        age: 27
      }
    };
  },
};
```

This is realtime! If you only want it to be update on submit or change of field use `v-model.lazy`. Use `v-model.trim` to get rid of white space and `v-model.number` to convert the string to a number.

`v-model` is the same like `:value="user.email"` combined with `@input="user.email = $event.target.value"`.

## Placeholder Content

Always use `v-model` for placeholder content!

## Linebreaks

Set `white-space: pre;` to output multi line text from inputs fields with linebreaks.

## Checkboxes Or saving in an array

If you have an array in data, e.g. `sendMail: []`, and bind input fiels multiple times to this array with `v-model=sendMail`, Vuejs will automatically detect that this is an array and push it.

Then output it with `<li v-for="(item, i) in sendMail" :key="i">{{item}}</li>`

## Radio Buttons

When the data is a String (`gender: "Male"`), and you bind it multiple times with `v-model="gender"`, Vuejs automatically let's you only select one option! The value is automatically saved as well.

## Options

Template:

```
<select id="priority" class="form-control" v-model="selectedPriority">
  <option v-for="priority in priorities" :selected="priority == 'low'" :key="priority">{{priority}}</option>
</select>
```

Data: 

```
selectedPriority: 'high',
priorities: ["high", "medium", "low"]
```

Ouput with `Priority: {{selectedPriority}}`

Set the default by an if `:selected="priority == 'low'"` or with the default from the data.

## Custom Input Event from Component!

### The component
```
<template>
  <div>
    <div id="on" @click="switched(true)" :class="{active: value}">On</div>
    <div id="off" @click="switched(false)" :class="{active: !value}">Off</div>
  </div>
</template>

<script>
export default {
  props: ['value'],
  methods: {
    switched(val){
      this.$emit('input', val);
    }
  }
};
</script>
```

### The Parent

Template:
```
<appSwitch v-model="dataSwitch"></appSwitch>
```

Data: 
```
dataSwitch: true,
```


## Submit

Prevent from sending to server!

`<button class="btn btn-primary" @click.prevent="submitted()">Submit!</button>`



