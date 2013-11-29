module.exports = function (grunt) {
  grunt.initConfig({
    jshint: {
      all: [
        'githubRepoWidget.js',
      ]
    },
    uglify: {
      "githubRepoWidget.min.js": {
        src: "githubRepoWidget.js",
        dest: "githubRepoWidget.min.js"
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', [
    'jshint',
    'uglify'
  ]);
};