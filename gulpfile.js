const GulpClient = require("gulp");
const { watch, series, src, dest } = require("gulp");
const sass = require("gulp-sass");

sass.complier = require(`node-sass`);

function runSass() {
  // place code for your default task here
  // we want to run "css css/app.scss app.css --watch"
  return src("css/app.scss")
  .pipe(sass())
  .pipe(dest("."));
}

function watchSass() {
  watch('css/app.scss', runSass)
}

exports.default = series(runSass, watchSass);