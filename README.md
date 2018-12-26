# is-valid-zip

> Validates U.S. zip code in JavaScript

## Install

```bash
npm install is-valid-zip
```

## Usage

```javascript
var isValidZip = require('is-valid-zip');

isValidZip(11743) // true
isValidZip('11743-6961') // true
isValidZip('11743-6') // false
isValidZip(11743344) // false
isValidZip(144) // false
```

## License

MIT
