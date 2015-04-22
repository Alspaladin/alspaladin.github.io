module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    'gh-pages': {
      options: {
        add: true,
        base: 'build',
        branch: 'master'
      },
      src: ['**']
    },
    imageEmbed: {
      dist: {
        src: [ "build/css/main.css" ],
        dest: "build/css/main.css"
      }
    },
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'build/index.html': 'src/index.html',
        }
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'src/css',
          src: ['*.css', '!*.min.css'],
          dest: 'build/css',
          ext: '.css'
        }]
      }
    }
  });


  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks("grunt-image-embed");

  grunt.registerTask('default', ['htmlmin','cssmin', 'imageEmbed', 'gh-pages']);

};