//#region default
function defaultTask(cb) {
  
  console.log('this is a demo task');
  cb();
}

// exports.default = defaultTask;
//#endregion

//#region composing tasks

// const { series, parallel } = require('gulp');

// function clean(cb) {
//   setTimeout(()=>{
//     console.log('cleaning...');
//     console.log('cleaned');
//     cb();
//   }, 5000);
// }

// function build(cb) {
//   setTimeout(()=>{
//     console.log('building...');
//     console.log('build done');
//     cb();
//   }, 2000);
// }

// exports.build = build;
// exports.series = series(clean, build);
// exports.parallel = parallel(clean, build);
// exports.default = series(series(clean, build), parallel(clean, build));
//#endregion

//#region signaling task completion
// const { series, parallel } = require('gulp');
// const { src, dest } = require('gulp');
// const { EventEmitter } = require('events');

// function completionTask(cb) {
//   console.log('testing');
//   // return src('*.js')
//   // .pipe(dest('output'));

//   // return Promise.resolve('the value is ignored');

//   // const emitter = new EventEmitter();
//   // setTimeout(() => emitter.emit('finish'), 2500);
//   // return emitter;

//   // cb();
// }

// function check(cb) {
//   console.log('testing 2')
// }

// // exports.default = series(completionTask, check);
// exports.default = parallel(completionTask, check);
//#endregion

//#region handling files
// const { src, dest } = require('gulp');
// const clean = require('gulp-clean');
// const rename = require('gulp-rename');

// function makeFolder() {
//   return src('*.js', {allowEmpty: true})
//     .pipe(clean({force: true}))
//     .pipe(rename('index.js'))
//     .pipe(dest('gulpfile\.js'))
// }

// exports.makeFolder = makeFolder;
//#endregion

//#region watching files
// const { watch } = require('gulp');

// function watching(cb) {
//   console.log('change observed');
//   cb();
// }

// exports.default = function() {
//   // watch('src/*.js', watching);
//   watch('src/*.js', { ignoreInitial: false }, watching);
//   // watch(['src/*.js', '!src/ignore.js'], watching);
//   //watch(['src/**/*.js', '!src/ignore.js', '!src/ignoreFolder/**/*'], watching);
// };
//#endregion