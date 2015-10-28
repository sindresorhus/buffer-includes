'use strict';
var bufIndexof = require('buf-indexof');

module.exports = function (buf, val, byteOffset) {
	if (typeof buf.includes === 'function') {
		return buf.includes(val, byteOffset);
	}

	return bufIndexof(buf, val, byteOffset) !== -1;
};
