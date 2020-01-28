/*! (c) Andrea Giammarchi - ISC */
(function (document, customElements, property) {
  var hOP = {}.hasOwnProperty;
  var $define = customElements.define;
  property(customElements, 'define', {value: function define(
    name,
    Class,
    options
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
  }});
}(
  document,
  customElements,
  Object.defineProperty
));
