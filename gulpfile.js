var gulp      = require('gulp'),
    util      = require('gulp-util'),
    concat    = require('gulp-concat'),
    minifycss = require('gulp-minify-css'),
    uglify    = require('gulp-uglify'),
    imagemin  = require('gulp-imagemin');

var assets = require('./assets');

var gulpFileCwd = __dirname + '/public';
process.chdir(gulpFileCwd);

util.log('working directory changed to', util.colors.magenta(gulpFileCwd));

gulp.task('default', function() {
  gulp.src(assets.development.css)
      .pipe(concat('style.css'))
      .pipe(minifycss())
      .pipe(gulp.dest('./css/'));

  gulp.src(assets.development.js)
      .pipe(concat('scripts.js'))
      .pipe(uglify())
      .pipe(gulp.dest('./js/'));

  gulp.src('./images/*')
      .pipe(imagemin())
      .pipe(gulp.dest('./images/'));
});
