var gulp = require('gulp');
var sass = require('gulp-sass');     //プラグインの定義
var autoprefixer =require('gulp-autoprefixer');  //プラグインの定義
var sourcemaps =require('gulp-sourcemaps'); //プラグインの定義

gulp.task('sass', function () {
    return gulp.src('./scss/*.scss')
        .pipe(sourcemaps.init())    //ソースマップを作ります
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({  //autoprefixerの実行
            browsers: ["last 2 versions"],
            cascade: false
        }))
        .pipe(sourcemaps.write('.')) //ソースマップを書き出します
        // .pipe(gulp.dest('./build/css'));
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
    gulp.watch('./scss/*.scss', gulp.series('sass'));
});