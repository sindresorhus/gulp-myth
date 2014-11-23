'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var objectAssign = require('object-assign');
var myth = require('myth');

module.exports = function (options) {
	options = options || {};

	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			cb(null, file);
			return;
		}

		if (file.isStream()) {
			cb(new gutil.PluginError('gulp-myth', 'Streaming not supported'));
			return;
		}

		options = objectAssign({}, options, {source: file.path});

		try {
			file.contents = new Buffer(myth(file.contents.toString(), options));
			this.push(file);
		} catch (err) {
			this.emit('error', new gutil.PluginError('gulp-myth', err, {fileName: file.path}));
		}

		cb();
	});
};
