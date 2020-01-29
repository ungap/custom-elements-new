# CustomElement.new()

An utility to simplify Custom Elements instantiation for every browser, specially [those incapable of extending built-ins](https://github.com/ungap/custom-elements-builtin#readme).

Please note that while this module by its own works out of the box in WebKit/Safari, as in every other browser, you still need to [polyfill Custom Elements built-in extends](https://github.com/ungap/custom-elements-builtin#all-possible-features-detections) for these, and *before* using this helper.

```js
class MyButton extends HTMLButtonElement {}
customElements.define('my-button', MyButton, {extends: 'button'});

// Safari would fail at using `new MyButton()`
// Safari would indeed need `document.createElement('button', {is: 'my-button'})`
// With this utility/helper though, you can simply write instead:
const mybtn = MyButton.new(); // 🎉
```

  * CDN via https://unpkg.com/@ungap/custom-elements-new
  * ESM via `import iterator from '@ungap/custom-elements-new'`
  * CJS via `const iterator = require('@ungap/custom-elements-new')`
