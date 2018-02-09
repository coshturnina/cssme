var gulp = require('gulp');
var sass = require('gulp-sass');

var devpath = 'devstyles/sass/**/*.scss';
var prodpath = 'devstyles/css';

var sassc = function(){
	return gulp.src(devpath).pipe(sass()).pipe(gulp.dest(prodpath));
};



gulp.task('sass', sassc);

var watchc = function(){
	gulp.watch(devpath, ['sass']);
};

gulp.task('watch', watchc);