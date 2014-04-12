# [gulp](http://gulpjs.com)-myth [![Build Status](https://travis-ci.org/sindresorhus/gulp-myth.svg?branch=master)](https://travis-ci.org/sindresorhus/gulp-myth)

> [Myth](https://github.com/segmentio/myth) - Postprocessor that polyfills CSS

*Issues with the output should be reported on the Myth [issue tracker](https://github.com/segmentio/myth).*


## Install

```bash
$ npm install --save-dev gulp-myth
```


## Usage

```js
var gulp = require('gulp');
var myth = require('gulp-myth');

gulp.task('default', function () {
	return gulp.src('src/app.css')
		.pipe(myth())
		.pipe(gulp.dest('dist'));
});
```


## License

[MIT](http://opensource.org/licenses/MIT) © [Sindre Sorhus](http://sindresorhus.com)
