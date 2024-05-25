const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compileSass() {
  return src('scss/*.scss').pipe(sass()).pipe(dest('css'));
}

function watchSass() {
  watch('scss/*.scss', compileSass);
}

exports.default = series(compileSass, watchSass);