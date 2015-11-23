var Hypher = require('hypher');
var locales = require('./locales');

function swaggifier(locale) {
  var h = new Hypher(locale);

  return function(phrase) {
    var syllabes = h.hyphenate(phrase);

    // Cannot swaggify words with less than 2 syllabes
    if (syllabes.length < 3) return null;

    // Replace last syllable with swagg
    syllabes.splice(-1, 1, 'swagg');
    return syllabes.join('');
  };
}


module.exports = function(options) {

  var lang = options.lang || 'en-us';

  if (locales[lang] == null) {
    throw Error("Cannot instanciate a swaggyfier for language "+lang);
  }
  return swaggifier(locales[lang]);
};
