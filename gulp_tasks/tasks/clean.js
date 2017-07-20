var gulp 	= require('gulp'),
	cache 	= require('gulp-cache'),
	del 	= require('del'),
	config 	= require('../config');

gulp.task('cleanbuild', function() {
	return del.sync(config.build + config.project);
});

gulp.task('cleancache', function() {
	return cache.clearAll();
});

gulp.task('deltemp', function() {
	return del.sync(config.build + config.project + config.temp, {force: true});
});