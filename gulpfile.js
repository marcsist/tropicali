const GulpClient = require("gulp");
const { watch, series, src, dest } = require("gulp");
const sass = require("gulp-sass");
const cleanCSS = require("gulp-clean-css");
const sourcemaps = require("gulp-sourcemaps");

const browserSync = require("browser-sync").create();


sass.complier = require(`node-sass`);

function runSass() {
  // place code for your default task here
  // we want to run "css css/app.scss app.css --watch"
  return src("css/app.scss")
  .pipe(sourcemaps.init())
  .pipe(sass())
  .pipe(
    cleanCSS({
      compatibility: 'ie8'
    })
  )
  .pipe(sourcemaps.write())
  .pipe(dest("."))
  .pipe(browserSync.stream());
}


function watchSass() {

  browserSync.init({
    server: {
      baseDir: "./"
    }
  })

  watch('css/app.scss', runSass)
}

exports.default = series(runSass, watchSass);