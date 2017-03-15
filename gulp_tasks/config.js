var dir = {
		build: 	'./build',
		core: 	'../core',
		src: 	'/src',
		less: 	'/less',
		img: 	'/images',
		tmp: 	'/temp'
	};

module.exports = {

	project: 	getDefaultContext('newsletter'),
	build: 		dir.build + '/',
	temp: 		dir.tmp,

	less: {
		core: 	dir.core + '/less/**/*.less',
		file: 	'style.less',
		src: 	dir.src + dir.less + '/**/*.less',
		dest: 	dir.src + dir.less,
	},
	html: {
		src: dir.src + '/' + 'letter.pug',
	},
	img: {
		src: 	dir.src + dir.img + '/**/*',
		temp: 	dir.tmp + dir.img,
		dest: 	dir.img,
	},
	inline: {
		src: 	'/' + 'letter.html',
	},
	zip: {
		src: 	dir.tmp + '/**/*',
		dest: 	'/' + 'readyToUpload.zip'
	}
};

function getDefaultContext(defaultName) {
  var argv = process.argv[2] || process.argv[3];
  if (typeof argv !== 'undefined' && argv.indexOf('--') < 0) {
    argv = process.argv[3];
  }
  return (typeof argv === 'undefined') ? defaultName : argv.replace('--', '');
};