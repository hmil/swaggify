var Hypher = require('hypher');
var locales = require('./locales');

function swaggifier(opts) {
  var h = new Hypher(opts.locale);

  return function(phrase) {
    var syllabes = h.hyphenate(phrase);

    // Cannot swaggify words with less than 2 syllabes
    if (syllabes.length < 3) return null;

    // Replace last syllable with swagg
    syllabes.splice(-1, 1, opts.swag);
    return syllabes.join('');
  };
}


module.exports = function(options) {

  var lang = options.lang || 'en-us';
  var gs = options.gs || 1;
  var swag = "swa";
  for (var i = 0 ; i < gs ; i++) {
    swag += "g";
  }

  if (locales[lang] == null) {
    throw Error("Cannot instanciate a swaggyfier for language "+lang);
  }

  return swaggifier({
    locale: locales[lang],
    swag: swag
  });
};
