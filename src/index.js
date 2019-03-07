'use strict';

setTimeout(function() {
	throw new Error('CUSTOM ERROR');
}, 10000);