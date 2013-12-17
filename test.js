'use strict';
var assert = require('assert');
var gutil = require('gulp-util');
var myth = require('./index');

it('should postprocess CSS using Myth', function (cb) {
	var stream = myth();

	stream.on('data', function (data) {
		assert.equal(data.contents.toString(), '\n\na {\n  color: #a6c776;\n}');
		cb();
	});

	stream.write(new gutil.File({contents: ':root{var-green:#a6c776;}a{color:var(green);}'}));
});
