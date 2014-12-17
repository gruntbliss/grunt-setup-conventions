/*
 * grunt-devbliss
 * http://www.devbliss.com
 *
 * Copyright (c) 2014 Tobias Arndt
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);


// Rewrite plugin for HTTP redirects
  grunt.loadNpmTasks('grunt-connect-rewrite');
  var rewriteRulesSnippet = require('grunt-connect-rewrite/lib/utils').rewriteRequest;

  var proxySnippet = require('grunt-connect-proxy/lib/utils').proxyRequest;

  grunt.initConfig({
    // app config
    edison: {
      appDir: 'app',
      distDir: 'dist',
      port: 8084,
      livereload: 35731
    },

    clean: {
      app: {
        files: [
          {
            dot: true,
            src: [
              '.tmp',
              '<%= edison.distDir %>'
            ]
          }
        ]
      },
      dist: {
        dot: true,
        src: [
          '.tmp',
          '<%= edison.distDir %>'
        ]
      }
    },
    bowerInstall: {
      app: {
        src: ['<%= edison.appDir %>/index.html']
      }
    },
    connect: {
      options: {
        port: '<%= edison.port %>',
        hostname: '0.0.0.0',
        middleware: function (connect, options) {
          var middlewares = [];

          // RewriteRules support
          middlewares.push(rewriteRulesSnippet);

          // Setup the proxy
          middlewares.push(require('grunt-connect-proxy/lib/utils').proxyRequest);
          // Serve static files
          options.base.forEach(function (base) {
            middlewares.push(connect.static(base));
          });
          return middlewares;
        }
      },
      keepalive: true,
      rules: [
        {from: '^/lat/$', to: 'http://0.0.0.0:8096/', redirect: 'permanent'},
        {from: '^/edi/$', to: 'http://0.0.0.0:8084/', redirect: 'permanent'},
        {from: '^/prep/$', to: 'http://0.0.0.0:8087/', redirect: 'permanent'},
        {from: '^/monitoring/$', to: 'http://0.0.0.0:8082/', redirect: 'permanent'}
      ],
      proxies: [
        {
          context: '/api',
          host: '172.17.42.1',
          port: 8070,
          changeOrigin: true,
          xforward: false
        }
      ],
      app: {
        options: {
          base: ['<%= edison.appDir %>'],
          open: true,
          livereload: '<%= edison.livereload %>'
        }
      },
      dist: {
        options: {
          open: true,
          base: '<%= edison.distDir %>'
        }
      },
      distDocker: {
        options: {
          port: '<%= edison.port %>',
          open: true,
          base: '<%= edison.appDir %>'
        }
      }
    },
    watch: {
      html: {
        files: ['<%= edison.appDir %>/**/*.html'],
        options: {
          livereload: '<%= edison.livereload %>'
        }
      },
      less: {
        files: '<%= edison.appDir %>/static/less/**/*.less',
        tasks: ['recess'],
        options: {
          livereload: '<%= edison.livereload %>'
        }
      },
      jshint: {
        files: ['<%= edison.appDir %>/**/*.js', 'Gruntfile.js'],
        tasks: ['jshint'],
        options: {
          livereload: '<%= edison.livereload %>'
        }
      }
    },
    copy: {
      components: {
        files: [
          {
            expand: true,
            dot: true,
            cwd: '<%= edison.appDir %>',
            dest: '<%= edison.distDir %>',
            src: [
              '.htaccess',
              'bower_components/**/*.html',
              'lat_components/**/*.html',
              'views/**/*.html',
              'index.html'
            ]
          }
        ]
      },
      js: {
        files: [
          {
            expand: true,
            dot: true,
            cwd: '.tmp/concat/scripts/',
            dest: '<%= edison.distDir %>/scripts/',
            src: ['*.js']
          }
        ]
      },
      font: {
        files: [
          {
            expand: true,
            dot: true,
            cwd: '<%= edison.appDir %>/bower_components/ecosystem-main-frontend/styles/bootstrap/fonts',
            dest: '<%= edison.distDir %>/styles/fonts',
            src: ['*']
          }
        ]
      },
      img: {
        files: [
          {
            expand: true,
            dot: true,
            cwd: '<%= edison.appDir %>',
            dest: '<%= edison.distDir %>',
            src: ['bower_components/ecosystem-main-frontend/images/**/*']
          }
        ]
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      files: [
        '<%= edison.appDir %>/src/**/*.js',
        'spec/**/*.js'
      ]
    },
// CONVERT LESS TO CSS IN TEMPFOLDER
    recess: {
      options: {
        compile: true
      },
      dist: {
        files: [
          {
            expand: true,
            cwd: '<%=  edison.appDir %>/static/less/',
            src: 'base.less',
            dest: '<%=  edison.appDir %>/static/less/.tmp/',
            ext: '.css'
          }
        ]
      }
    },
    useminPrepare: {
      html: '<%= edison.appDir %>/index.html'
    },
    usemin: {
      html: '<%= edison.distDir %>/index.html'
    },
    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true,
          removeOptionalTags: true
        },
        files: [
          {
            expand: true,
            cwd: '<%= edison.distDir %>',
            src: ['**/*.html'],
            dest: '<%= edison.distDir %>'
          }
        ]
      }

    },
    rev: {
      options: {
        encoding: 'utf8',
        algorithm: 'md5',
        length: 4
      },
      dist: {
        files: {
          src: [
            '<%= edison.distDir %>/scripts/**/*.js',
            '<%= edison.distDir %>/styles/**/*.css'
          ]
        }
      }
    },
    karma: {
      options: {
        configFile: 'spec/karma.conf.js'
      },
      app: {
        browsers: ['PhantomJS']
      },
      testDriven: {
        browsers: ['PhantomJS'],
        options: {
          singleRun: false
        }
      }
    }
  });

  grunt.registerTask('test', ['karma:app', 'jshint']);
  grunt.registerTask('testDriven', ['karma:testDriven']);
  grunt.registerTask('default', ['bowerInstall', 'test']);
  grunt.registerTask('serve', function (target) {
    if (target === 'dist') {
      return grunt.task.run([
        'build',
        'configureProxies:server',
        'configureRewriteRules',
        'connect:dist:keepalive'
      ]);
    }
    grunt.task.run([
      'build',
      'configureProxies:server',
      'configureRewriteRules',
      'connect:app',
      'watch'
    ]);
  });
  grunt.registerTask('build', [
    'jshint',
    'clean',
    'copy:components',
    'copy:font',
    'copy:img',
    'recess',
    'bowerInstall',
    'useminPrepare',
    'concat',
//        'uglify',
    'copy:js',
    'cssmin',
    'rev:dist',
    'usemin',
    'htmlmin'
  ]);
  grunt.registerTask('ec2-serve', ['build', 'connect:distDocker:keepalive']);
};
