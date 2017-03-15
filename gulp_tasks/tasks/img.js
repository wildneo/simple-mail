var gulp 		= require('gulp'),
	cache 		= require('gulp-cache'),
	imagemin 	= require('gulp-imagemin'),
	path 		= require('path'),
	config 		= require('../config');

gulp.task('buildimg', function () {
	return gulp.src(path.join(config.project, config.img.src))
		.pipe(cache(imagemin({
				interlaced: true,
				progressive: true
			})))
		.pipe(gulp.dest(config.build + config.project + config.img.dest));
});

gulp.task('copyimg', function () {
	return gulp.src(path.join(config.project, config.img.src))
		.pipe(gulp.dest(config.build + config.project + config.img.temp));
});