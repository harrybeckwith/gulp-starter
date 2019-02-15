var gulp = require("gulp");
var sass = require("gulp-sass");
var browserSync = require("browser-sync").create();
sass.compiler = require("node-sass");

// Static Server + watching scss/html files
gulp.task("serve", ["sass"], function() {
  browserSync.init({
    server: "./",
  });

  gulp.watch("Sources/*.scss", ["sass"]);
  gulp.watch("*.html").on("change", browserSync.reload);
});

gulp.task("sass", function() {
  return gulp
    .src("Sources/*.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(gulp.dest("css/"))
    .pipe(browserSync.stream());
});

gulp.task("default", ["serve"]);
