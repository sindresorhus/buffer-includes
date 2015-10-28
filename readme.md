# buffer-includes [![Build Status](https://travis-ci.org/sindresorhus/buffer-includes.svg?branch=master)](https://travis-ci.org/sindresorhus/buffer-includes)

> Node.js `buffer.includes()` ponyfill

> Ponyfill: A polyfill that doesn't overwrite the native method

See: https://github.com/nodejs/node/issues/3552


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

See the [`buffer.indexof()`](https://iojs.org/api/buffer.html#buffer_buf_indexof_value_byteoffset) docs for more details.


## Related

- [buf-indexof](https://github.com/sindresorhus/buf-indexof) - Node.js 4.0 `buffer.indexOf()` ponyfill
- [buffer-equals](https://github.com/sindresorhus/buffer-equals) - Node.js 0.12 `buffer.equals()` ponyfill
- [buf-compare](https://github.com/sindresorhus/buf-compare) - Node.js 0.12 `Buffer.compare()` ponyfill


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
