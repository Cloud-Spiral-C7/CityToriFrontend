// see: https://github.com/gulpjs/gulp/blob/master/docs/recipes/fast-browserify-builds-with-watchify.md

var browserify = require('browserify');
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var vueify = require('vueify');
var debowerify = require('debowerify');
var watchify = require('watchify');
var assign = require('lodash.assign');

// add custom browserify options here
var customOpts = {
  entries: ['./src/js/main.js'],
  debug: true
};

var opts = assign({}, watchify.args, customOpts);
var watcher = watchify(browserify(opts));

// add transformations here
watcher.transform(vueify);
watcher.transform(debowerify);

gulp.task('js', bundle(watcher)); // so you can run `gulp js` to build the file
watcher.on('update', bundle(watcher)); // on any dep update, runs the bundler
watcher.on('log', plugins.util.log); // output build logs to terminal

function bundle(b) {
  return function() {
    b.bundle()
      // log errors if they happen
      .on('error', plugins.util.log.bind(plugins.util, 'Browserify Error'))
      .pipe(source('bundle.js'))
      // optional, remove if you don't need to buffer file contents
      .pipe(buffer())
      // optional, remove if you dont want sourcemaps
      .pipe(plugins.sourcemaps.init({loadMaps: true})) // loads map from browserify file
      // Add transformation tasks to the pipeline here.
        .pipe(plugins.uglify())
      .pipe(plugins.sourcemaps.write('./')) // writes .map file
      .pipe(gulp.dest('./public/js'));
    };
}

gulp.task('default', ['js']);
