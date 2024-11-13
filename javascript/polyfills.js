// In JavaScript, polyfills are code implementations that allow developers to use modern JavaScript features in environments (like older browsers) that do not support them natively. Polyfills are essentially fallback code that "fills in" the gap for these unsupported features, enabling the same functionality across different environments.

if (!Array.prototype.includes) {
  Array.prototype.includes = function (element) {
    return this.indexOf(element) !== -1;
  };
}
