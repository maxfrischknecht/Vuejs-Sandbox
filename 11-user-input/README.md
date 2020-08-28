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

## Placeholder Content

Always use `v-model` for placeholder content!

## Linebreaks

Set `white-space: pre;` to output multi line text from inputs fields with linebreaks.

## Checkboxes Or saving in an array

If you have an array in data, e.g. `sendMail: []`, and bind input fiels multiple times to this array with `v-model=sendMail`, Vuejs will automatically detect that this is an array and push it.

Then output it with `<li v-for="(item, i) in sendMail" :key="i">{{item}}</li>`

