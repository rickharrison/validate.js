/*global module */
module.exports = function( grunt ) {
    'use strict';

    grunt.initConfig({
        uglify: {
            dist: {
                src: 'validate.js',
                dest: 'validate.min.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', 'uglify');
};
