var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifyCSS = require('gulp-csso'),
    expect = require('gulp-expect-file'),
    assets = 'src/assets';


gulp.task('bootstrap-minify', function(){
    var files = ['node_modules/bootstrap/dist/css/bootstrap.css'];
    return gulp.src(files)
        .pipe(expect(files))
        .pipe(minifyCSS())
        .pipe(gulp.dest('src/assets/css'));
});

gulp.task('default', ['bootstrap-minify']);

