module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      development: {
        files: {
          'dev/styles/main.css': 'src/styles/main.less'
        }
      },
      production: {
        options: {
          compress: true,
        },
        files: {
          'dist/styles/main.min.css': 'src/styles/main.less'
        }
      }
    },
    watch: {
      less: {
        files: ['src/styles/**/*.less'],
        tasks: ['less:development']
      },
      html: {
        files: ['src/index.html'],
        tasks: ['replace:dev']
      }
    },
    replace: {
      dev: {
        options: {
          patterns: [
            {
              match: 'PATH_CSS',
              replacement: './styles/main.css'
            },
            {
              match: 'PATH_JS_RENDER_BOARD',
              replacement: '../src/scripts/renderBoard.js'
            },
            {
              match: 'PATH_JS_MINIMAX',
              replacement: '../src/scripts/minimax.js'
            },
            {
              match: 'PATH_JS_ALPHABETA',
              replacement: '../src/scripts/alphabeta.js'
            },
            {
              match: 'PATH_JS_TIC_TAC_TOE',
              replacement: '../src/scripts/ticTacToe.js'
            },
            {
              match: 'PATH_JS_INPUT_VALIDATION',
              replacement: '../src/scripts/inputValidation.js'
            },
          ]
        },
        files: [
          {
            expand: true,
            flatten: true,
            src: ['src/index.html'],
            dest: 'dev/'
          }
        ]
      },
      dist: {
        options: {
          patterns: [
            {
              match: 'PATH_CSS',
              replacement: './styles/main.min.css'
            },
            {
              match: 'PATH_JS_RENDER_BOARD',
              replacement: './scripts/renderBoard.min.js'
            },
            {
              match: 'PATH_JS_MINIMAX',
              replacement: './scripts/minimax.min.js'
            },
            {
              match: 'PATH_JS_ALPHABETA',
              replacement: './scripts/alphabeta.min.js'
            },
            {
              match: 'PATH_JS_TIC_TAC_TOE',
              replacement: './scripts/ticTacToe.min.js'
            },
            {
              match: 'PATH_JS_INPUT_VALIDATION',
              replacement: './scripts/inputValidation.min.js'
            },
          ]
        },
        files: [
          {
            expand: true,
            flatten: true,
            src: ['prebuild/index.html'],
            dest: 'dist/'
          }
        ]
      }
    },
    htmlmin: {
      dist: {
        options: {
          removeComents: true,
          collapseWhitespace: true
        },
        files: {
          'prebuild/index.html': 'src/index.html'
        }
      }
    },
    clean: ['prebuild'],
    uglify: {
      target: {
        files: {
          'dist/scripts/renderBoard.min.js': 'src/scripts/renderBoard.js',
          'dist/scripts/minimax.min.js': 'src/scripts/minimax.js',
          'dist/scripts/alphabeta.min.js': 'src/scripts/alphabeta.js',
          'dist/scripts/ticTacToe.min.js': 'src/scripts/ticTacToe.js',
          'dist/scripts/inputValidation.min.js': 'src/scripts/inputValidation.js',
        }
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-replace');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('build', ['less:production', 'htmlmin:dist', 'replace:dist', 'clean', 'uglify']);
}