const test = require('ava');
const ggpack = require('./index.js')

test('main', t => {
	t.is(ggpack(), 'Hello World!');
});
