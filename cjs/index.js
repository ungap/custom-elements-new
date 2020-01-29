/*! (c) Andrea Giammarchi - ISC */
(function (document, customElements, property, hOP) {
  var $define = customElements.define;
  property(customElements, 'define', {
    configurable: true,
    value: function define(
      name,   // the Custom Element tag name
      Class,  // the HTMLElement/BuiltIn extends
      options // optional object with {extends: 'built-in-tag-name'}
    ) {
      var result = $define.apply(this, arguments);
      if (!hOP.call(Class, 'new')) {
        if (options && options.extends) {
          var $name = options.extends;
          var $options = {is: name};
          property(Class, 'new', {
            configurable: true,
            value: function () {
              return document.createElement($name, $options);
            }
          });
        }
        else {
          property(Class, 'new', {
            configurable: true,
            value: function () {
              return document.createElement(name);
            }
          });
        }
      }
      return result;
    }
  });
}(
  document,
  customElements,
  Object.defineProperty,
  {}.hasOwnProperty
));
