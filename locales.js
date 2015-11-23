
var locales = ['fr', 'en-us', 'es', 'it', 'nl', 'de'];

var exports = module.exports = [];

for (var i in locales) {
  var l = locales[i];
  exports[l] = require('hyphenation.'+l);
}
