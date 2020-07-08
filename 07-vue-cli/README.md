# 07 Vue CLI

The main difference between "normal" Vue and the Vue CLI is, that the normal version has a build in compiler which compiles the files right away inside the browser. With the CLI this compiler is missing and we need to pre-compile the files before we ship them. This way we have super fast and lightweight files to ship after compiling. 

Also, with CLI we avoid having the templates for our Vue app in the HTML code. Instead the live in Javascript and are faster.

## Folder Structure Overview

#### Babel
Enables you to write ES6 code and compiles it to ES5 so that it runs in all browsers.

#### source/index.html
The file which actually gets served. With CLI3 built files will get auto injected at the bottom. In CLI2 you have a script tag in place at the bottom.

#### /dist
During development you see things from the memory, you need to actually run the `npm run build` command to build the app and save the compiled files in the `/dist` folder.

#### src/main.js
The first file to be executed. Here we create the Vue instance. We also mount the instance to a `<div id="app"></div>` so we know where to place it.

However, we don't take the template inside `<div id="app"></div>` or use `template: ...`, but instead we load `App` from `./App.vue` and render whats inside that file.

#### src/App.vue
The Vue template file. They always follow the same structure:

- It starts with the `<template></template>`, containing the template logic
- Secondly `<script></script>` with the code for THIS Vue template, kind of like an instance.
- Lastly, the CSS styles

##### Export Default

The `export` here is important so you can define logic for that specific template. It can hold the same login like the instances, however, it is not required.

```
<script>
	export default {
		methods: {
			// my methods
		},
		computed: {
			// my computed properties
		}
	}
</script>
```

## Docs

Learn more [here](https://vuejs.org/v2/guide/single-file-components.html)