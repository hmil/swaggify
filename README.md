Swaggify
========

Hypster word processor.

```
> swaggify('baltimore')
baltiswagg
```

## Usage

```
var swaggify = require('swaggify')({
  lang: 'fr' // Any of: 'fr', 'en-us', 'es', 'it', 'nl', 'de'
});

swaggify('alphabet')    // alphaswagg
swaggify('arme à feu')  // arme à swagg
swaggify('atlantide')   // atlanswagg
swaggify('automobile')  // automoswagg
swaggify('noeud')       // null
```

## Syntax

Replaces the last syllable of words with > 2 syllabes with "swagg". Words with less than 2 syllabes cannot be swaggified.

## License

MIT
