var gulp 	= require('gulp'),
	pug 	= require('gulp-pug'),
	path 	= require('path'),
	config 	= require('../config');

gulp.task('buildhtml', function() {
	return gulp.src(path.join(config.project, config.html.src))
		.pipe(pug({pretty: true}))
		.pipe(gulp.dest(config.build + config.project));
});