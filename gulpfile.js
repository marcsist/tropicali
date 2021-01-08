const GulpClient = require("gulp");
const { watch, series, src, dest } = require("gulp");

// css
const cleanCSS = require("gulp-clean-css");

const sourcemaps = require("gulp-sourcemaps");

// browser refresh
const browserSync = require("browser-sync").create();

const imagemin = require("gulp-imagemin");
const ghpages = require("gh-pages");

const { getHashes } = require("crypto");


function "css"() {
  // place code for your default task here
  // we want to run "css css/app.scss app.css --watch"
  return src("src/css/app.css")
  .pipe(sourcemaps.init())
  .pipe(
    cleanCSS({
      compatibility: 'ie8'
    })
  )
  .pipe(sourcemaps.write())
  .pipe(dest("dist"))
  .pipe(browserSync.stream());
}

function html() {
  return src("src/*.html")
    .pipe(dest("dist"))
}

function fonts() {
  return src("src/fonts/*")
    .pipe(dest("dist/fonts"))
}

function images() {
  return src("src/img/*")
    .pipe(imagemin())
    .pipe(dest("dist/img"))
}

function watchSass() {

  browserSync.init({
    server: {
      baseDir: "dist"
    }
  })

  watch('src/*.html', html).on("change", browserSync.reload)
  watch('src/css/app.css', "css")
  watch('src/fonts/*', fonts)
  watch('src/img/*', images)
  
}

<<<<<<< Updated upstream
exports.deploy = function (cb) {
  ghpages.publish('dist') 

  cb();
}

exports.default = series(html, runSass, fonts, images, watchSass);
=======
exports.default = series(html, "css", fonts, images, watchSass);
>>>>>>> Stashed changes
