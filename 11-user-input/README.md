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