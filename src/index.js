'use strict';

console.log('INIT: exception-test');

setTimeout(function() {
	throw new Error('CUSTOM ERROR');
}, 10000);