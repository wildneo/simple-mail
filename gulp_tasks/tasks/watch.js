var gulp 	= require('gulp'),
	path	= require('path'),
	config 	= require('../config');

gulp.task('watch', function() {
	gulp.watch('*/src/**/*.pug', ['buildhtml']).on('change', function(event) {
		runInContext(event);
	});
	gulp.watch('*/src/less/*.less', ['buildcss']).on('change', function(event) {
		runInContext(event);
	});
	gulp.watch('*/src/images/**/*', ['buildimg']).on('change', function(event) {
		runInContext(event);
	});
});

function runInContext(event) {
	var context = path.relative(process.cwd(), event.path);
	var projectName = context.split(path.sep)[0];

	config.project = projectName;

	console.log('[' + projectName + '] ' + 'has been changed: ' + event.path);
};