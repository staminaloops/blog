var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var shell = require('gulp-shell');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

var cssPath = 'themes/material-design/static/css/*.css';
var jsPath = 'themes/material-design/static/js/*.js'

gulp.task('css', function() {
  return gulp.src(cssPath)
    .pipe(autoprefixer())
    .pipe(concat('all.min.css'))
    .pipe(cssnano())
    .pipe(gulp.dest('themes/material-design/static/dist/css'))
});

gulp.task('js', function() {
  return gulp.src(jsPath)
    .pipe(concat('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('themes/material-design/static/dist/js'))
});

gulp.task('images', function() {
  return gulp.src('static/images/*')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest('static/images'));
});


gulp.task('watch', function() {
  gulp.watch(cssPath, ['css']);
  gulp.watch(jsPath, ['js']);
});

gulp.task('serve', ['css', 'js', 'watch'], shell.task([
  'hugo server -t material-design -w'
]));

gulp.task('build', ['css', 'js', 'images'], shell.task([
  'hugo -t material-design',
  'deploy.sh'
]));