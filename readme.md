# [gulp](https://github.com/wearefractal/gulp)-myth [![Build Status](https://secure.travis-ci.org/sindresorhus/gulp-myth.png?branch=master)](http://travis-ci.org/sindresorhus/gulp-myth)

> [Myth](https://github.com/segmentio/myth) - Postprocessor that polyfills CSS

*Issues with the output should be reported on the [Myth repo](https://github.com/segmentio/myth).*


## Install

Install with [npm](https://npmjs.org/package/gulp-myth)

```
npm install --save-dev gulp-myth
```


## Example

```js
var gulp = require('gulp');
var myth = require('gulp-myth');

gulp.task('default', function () {
	gulp.src('src/app.css')
		.pipe(myth())
		.pipe(gulp.dest('dist/app.css'));
});
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
