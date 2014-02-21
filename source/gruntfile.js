module.exports = function(grunt) {
	grunt.file.defaultEncoding = 'utf-8';
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sass: {
			mqoff: {
				options: {
					style: 'compressed',
				},
				expand: true,
				files: {
					'../build/css/styles-mqoff.css' : 'sass/cmq/mqoff.scss',
				}
			},
			mqon: {
				options: {
					style: 'compressed',
				},
				expand: true,
				files: {
					'../build/css/styles.css' : 'sass/cmq/mqon.scss',
				}
			}
		},
	});

	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.registerTask('default', ['sass:mqoff', 'sass:mqon']);

};
