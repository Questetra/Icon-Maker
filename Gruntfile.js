module.exports = function(grunt) {
    grunt.initConfig({
        uglify: {
            dist: {
                files: [
                    {'docs/js/main-min.js': 'src/js/main.js'},
                    {'docs/js/icons-min.js': 'src/js/icons.js'},
                    {'docs/js/static-icons.js': 'src/js/static-icons.js'}
                ]
            }
        },
        copy: {
            fonts: {
                files: [
                    { expand: true, cwd: 'src/font/Questetra-Icon-Font-A/fonts/', src: ['*.*'], dest: 'docs/fonts/', filter: 'isFile' },
                    { expand: true, cwd: 'src/font/Questetra-Icon-Font-A/', src: ['style.css'], dest: 'docs/', filter: 'isFile' }
                ]
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    //grunt.loadNpmTasks("grunt-contrib-less");
    /*
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-text-replace");
    grunt.loadNpmTasks("grunt-contrib-compress");
    */

    grunt.registerTask('_Dist', ['copy', 'uglify']);

};
