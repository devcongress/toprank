var gulp = require('gulp');
var minifyCSS = require('gulp-csso');

gulp.task('css', function() {
    return gulp.src('toprank.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('toprank.min.css'))
});

gulp.task('default', ['css']);