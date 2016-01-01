import test from 'ava';
import fn from './';

// For more comprehensive tests, see:
// https://github.com/sindresorhus/buf-indexof/blob/master/test.js

test(t => {
	const x = new Buffer('abcdef');
	t.true(fn(x, 'a'));
	t.true(fn(x, new Buffer('a')));
	t.true(fn(x, 'f'));
	t.false(fn(x, 'a', 1));
	t.false(fn(x, 'x'));
});
