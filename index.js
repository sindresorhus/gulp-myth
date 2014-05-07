'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var myth = require('myth');

module.exports = function (options) {
	options = options || {};

	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			this.push(file);
			return cb();
		}

		if (file.isStream()) {
			this.emit('error', new gutil.PluginError('gulp-myth', 'Streaming not supported'));
			return cb();
		}

		options.source = file.path;

		try {
			file.contents = new Buffer(myth(file.contents.toString(), options));
		} catch (err) {
			this.emit('error', new gutil.PluginError('gulp-myth', err));
		}

		this.push(file);
		cb();
	});
};
