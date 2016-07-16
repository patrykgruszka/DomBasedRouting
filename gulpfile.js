var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');

gulp.task('default', function() {});

gulp.task('compress', function (cb) {
    pump([
            gulp.src('source/*.js'),
            uglify(),
            gulp.dest('dist')
        ],
        cb
    );
});