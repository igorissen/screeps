const env = require('./environment.json');

module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-screeps');

  grunt.initConfig({
    screeps: {
      options: env,
      dist: { src: ['src/main.js'] }
    }
  });

  grunt.registerTask('default', ['screeps']);
};
