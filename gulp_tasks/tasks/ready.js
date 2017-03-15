var gulp 			= require('gulp'),
	runSequence 	= require('run-sequence');

gulp.task('ready', function() {
	runSequence(
		['inline', 'copyimg'],
		'zip',
		'deltemp'
	);
});