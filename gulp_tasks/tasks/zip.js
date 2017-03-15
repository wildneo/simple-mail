var gulp 	= require('gulp'),
	zip 	= require('gulp-vinyl-zip'),
	path 	= require('path'),
	config 	= require('../config');

gulp.task('zip', function() {
	return gulp.src(path.join(config.build + config.project, config.zip.src))
		.pipe(zip.dest(config.build + config.project + config.zip.dest));
});