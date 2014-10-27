'use strict';


module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    bump: {
      options: {
        files: ['package.json'],
        updateConfigs: [],
        commit: true,
        commitMessage: 'Release v%VERSION%',
        commitFiles: ['-a'],
        createTag: true,
        tagName: 'v%VERSION%',
        tagMessage: 'Version %VERSION%',
        push: true,
        pushTo: 'https://github.com/ecogood/blocks-ngmodule.git',
        gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
        globalReplace: false
      }
    }
  });

  /* Load tasks */
  grunt.loadNpmTasks('grunt-bump');

};