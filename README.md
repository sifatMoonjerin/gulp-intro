# Introduction to Gulp
Gulp is a cross-platform, streaming task runner for automating development tasks.

## Creating a gulp file

Create a `gulpfile.js` or `Gulpfile.js` file in the project folder. Alternatively we can use a `gulpfile.js` or `Gulpfile.js` folder with a `index.js` file.

```
function defaultTask(cb) {
  console.log('this is a demo task');
  cb();
}

exports.default = defaultTask;
```
Running gulp
```
gulp
```

## Tasks
* Public tasks
* Private tasks

## Composing tasks
Using `series()` and/or `parallel()` APIs

```
const { series } = require('gulp');

function clean(cb) {
  console.log('cleaning...');
  console.log('cleaned');
  cb();
}

function build(cb) {
  console.log('building...');
  console.log('build done');
  cb();
}

exports.build = build;
exports.default = series(clean, build);
```

## Signaling task completion

A task must return
* stream
* promise
* event emitter
* child process
* observable
* Or, call an error-first callback

> Gulp does not support synchronous tasks!

## Handling files
We can deal with files using the followings:
* src()
* dest()
* .pipe()
* plugins

## Globs
> Glob is a string of literal and/or wildcard characters

### Wildcard characters
* \*
* \*\*
* !

## Watch Files
We can observe change in files using `watch()` API

## Gulp v Grunt v Webpack
 * Webpack: JS bundler
 * Gulp & Grunt: Task runner
 * Grunt prefers configuration
 * Grunt uses temp files
 * Gulp prefers programming
 * Gulp uses Node streams





