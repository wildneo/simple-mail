var gulp 			= require('gulp'),
	runSequence 	= require('run-sequence');

gulp.task('build', function() {
	runSequence(
		'cleanbuild',
		['buildhtml', 'buildcss', 'buildimg'],
		'cleancache'
	);
});