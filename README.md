# CustomElement.new()

An utility to simplify Custom Elements instantiation for every browser, specially [those incapable of extending built-ins](https://github.com/ungap/custom-elements-builtin#readme).

```js
class MyButton extends HTMLButtonElement {}
customElements.define('my-button', MyButton, {extends: 'button'});
const mybtn = MyButton.new(); // 🎉
```

  * CDN via https://unpkg.com/@ungap/custom-elements-new
  * ESM via `import iterator from '@ungap/custom-elements-new'`
  * CJS via `const iterator = require('@ungap/custom-elements-new')`
