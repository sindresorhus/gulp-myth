'use strict';
var es = require('event-stream');
var myth = require('myth');

module.exports = function (options) {
	return es.map(function (file, cb) {
		file.contents = new Buffer(myth(file.contents.toString()));
		cb(null, file);
	});
};
