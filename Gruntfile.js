const env = require('./environment.json');

module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-screeps');

  grunt.initConfig({
    screeps: {
      world: {
        options: {
          ptr: false,
          branch: 'default',
          email: env.email,
          password: env.password
        },
        src: ['src/*.js']
      },
      sim: {
        options: {
          ptr: false,
          branch: 'tutorial-1',
          email: env.email,
          password: env.password
        },
        src: ['src/*.js']
      }
    }
  });

  grunt.registerTask('world', ['screeps:world']);
  grunt.registerTask('sim', ['screeps:sim']);
};
