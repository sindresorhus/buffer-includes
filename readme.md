# Deprecated

Just use [`Buffer#includes()`](https://nodejs.org/api/buffer.html#buffer_class_method_buffer_compare_buf1_buf2). It has been available since Node.js 6.

---

# buffer-includes [![Build Status](https://travis-ci.org/sindresorhus/buffer-includes.svg?branch=master)](https://travis-ci.org/sindresorhus/buffer-includes)

> Node.js [`buffer.includes()`](https://nodejs.org/dist/latest/docs/api/buffer.html#buffer_buf_includes_value_byteoffset_encoding) [ponyfill](https://ponyfill.com)


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
