# buffer-includes [![Build Status](https://travis-ci.org/sindresorhus/buffer-includes.svg?branch=master)](https://travis-ci.org/sindresorhus/buffer-includes)

> Node.js `buffer.includes()` ponyfill

> Ponyfill: A polyfill that doesn't overwrite the native method

Included in Node.js 5.3.0 and above.


## Install

```
$ npm install --save buffer-includes
```


## Usage

```js
const bufferIncludes = require('buffer-includes');

bufferIncludes(new Buffer('unicorn'), 'corn');
//=> true
```

## API

### bufferIncludes(buffer, needle, byteOffset)

See the [`buffer.includes()`](https://nodejs.org/dist/latest/docs/api/buffer.html#buffer_buf_includes_value_byteoffset_encoding) docs for more details.


## Related

- [buf-indexof](https://github.com/sindresorhus/buf-indexof) - Node.js `buffer.indexOf()` ponyfill
- [buffer-equals](https://github.com/sindresorhus/buffer-equals) - Node.js `buffer.equals()` ponyfill
- [buf-compare](https://github.com/sindresorhus/buf-compare) - Node.js `Buffer.compare()` ponyfill


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
