var gulp 	= require('gulp'),
	less 	= require('gulp-less'),
	concat 	= require('gulp-concat'),
	path 	= require('path'),
	config 	= require('../config');

gulp.task('buildcss', function() {
	return gulp.src(path.join(config.project, config.less.src))
		.pipe(concat(config.less.file))
		.pipe(less())
		.pipe(gulp.dest(config.build + config.project));
});