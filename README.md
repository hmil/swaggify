Swaggify
========

Hypster word processor.

```
> swaggify('baltimore')
baltiswag
```

## Usage

```
var swaggify = require('swaggify')({
  lang: 'fr',
  gs: 2
});

swaggify('alphabet')    // alphaswagg
swaggify('arme à feu')  // arme à swagg
swaggify('atlantide')   // atlanswagg
swaggify('automobile')  // automoswagg
swaggify('noeud')       // null
```

### Options
- lang: Language used for word analysis (possible values: 'fr', 'en-us', 'es', 'it', 'nl', 'de')
- gs: Number of Gs in swag* (default = 1)

## Syntax

Replaces the last syllable of words with > 2 syllabes with "swagg". Words with less than 2 syllabes cannot be swaggified.

## License

MIT
