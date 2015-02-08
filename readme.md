# gulp-myth [![Build Status](https://travis-ci.org/sindresorhus/gulp-myth.svg?branch=master)](https://travis-ci.org/sindresorhus/gulp-myth)

> [Myth](https://github.com/segmentio/myth) - Postprocessor that polyfills CSS

*Issues with the output should be reported on the Myth [issue tracker](https://github.com/segmentio/myth).*


## Install

```
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


## API

### myth(options)

#### options.sourcemap

Type: `boolean`
Default: `false`

Embed a Source Map.

#### options.browsers

Type: `array`

[Browsers and versions to support](https://github.com/ai/autoprefixer#browsers).


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
