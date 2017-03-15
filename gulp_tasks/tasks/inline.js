var gulp 		= require('gulp'),
	inlineCss 	= require('gulp-inline-css'),
	path 		= require('path'),
	config 		= require('../config');

gulp.task('inline', function() {
	return gulp.src(path.join(config.build + config.project, config.inline.src))
		.pipe(inlineCss({
			applyLinkTags: true,
			preserveMediaQueries: true,
			removeLinkTags: true
		}))
		.pipe(gulp.dest(config.build + config.project + config.temp));
});