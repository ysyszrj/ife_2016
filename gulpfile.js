/**
 * Created by ysysz on 2016/7/15.
 */

var gulp = require("gulp");
var plugins = require('gulp-load-plugins')();

var css_src = "";
var ghPages = require('gulp-gh-pages');
gulp.task('deploy',function () {
    return gulp.src('./**/*')
        .pipe(ghPages({
            remoteUrl:"git@github.com:ysyszrj/ife_2016.git",
            branch:"gh-pages"
        }));
});

gulp.task("task5",function () {
    return gulp.src(css_src)
        .pipe(plugins.less())
        .pipe(plugins.autoprefixer({
            browers:["> 5%"],
            cascade:true
        }))
        .pipe(plugins.cleanCss())
        .pipe(gulp.dest("./dist/task5"));
});

gulp.task("set_dir",function () {
    var task_num = 5;
    css_src = "./html&css/task"+task_num+"/less/main.less";
});