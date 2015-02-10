/*
 * grunt-devbliss
 * https://github.com/devbliss/ecosystem-grunt-plugin
 *
 * Copyright (c) 2014 Devbliss
 * Licensed under the Apache, License, 2.0 licenses.
 */

'use strict';

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                '<%= nodeunit.tests %>'
            ],
            options: {
                // JSHint Default devbliss setup
                // See https://github.com/devbliss/manuals/blob/master/3000-javascript-styleguide.md for more details

                'maxerr': 50,       // {int} Maximum error before stopping

                // Enforcing
                'bitwise': true,     // true: Prohibit bitwise operators (&, |, ^, etc.)
                'camelcase': true,    // true: Identifiers must be in camelCase
                'curly': true,     // true: Require {} for every new block or scope
                'eqeqeq': true,     // true: Require triple equals (===) for comparison
                'forin': true,     // true: Require filtering for..in loops with obj.hasOwnProperty()
                'freeze': true,     // true: prohibits overwriting prototypes of native objects such as Array, Date etc.
                'immed': true,    // true: Require immediate invocations to be wrapped in parens e.g. `(function () { } ());`
                'indent': 4,        // {int} Number of spaces to use for indentation
                'latedef': true,    // true: Require variables/functions to be defined before being used
                'newcap': true,    // true: Require capitalization of all constructor functions e.g. `new F()`
                'noarg': true,     // true: Prohibit use of `arguments.caller` and `arguments.callee`
                'noempty': true,     // true: Prohibit use of empty blocks
                'nonbsp': true,     // true: Prohibit 'non-breaking whitespace' characters.
                'nonew': false,    // true: Prohibit use of constructors for side-effects (without assignment)
                'plusplus': false,    // true: Prohibit use of `++` & `--`
                'quotmark': 'single',    // Quotation mark consistency:
                'undef': true,     // true: Require all non-global variables to be declared (prevents global leaks)
                'unused': true,     // true: Require all defined variables be used
                'strict': true,     // true: Requires all functions run in ES5 Strict Mode
                'maxparams': 3,    // {int} Max number of formal params allowed per function
                'maxdepth': false,    // {int} Max depth of nested blocks (within functions)
                'maxstatements': false,    // {int} Max number statements per function
                'maxcomplexity': false,    // {int} Max cyclomatic complexity per function
                'maxlen': 240,    // {int} Max number of characters per line

                // Relaxing
                'asi': false,     // true: Tolerate Automatic Semicolon Insertion (no semicolons)
                'boss': true,     // true: Tolerate assignments where comparisons would be expected
                'debug': false,     // true: Allow debugger statements e.g. browser breakpoints.
                'eqnull': false,     // true: Tolerate use of `== null`
                'es5': false,     // true: Allow ES5 syntax (ex: getters and setters)
                'esnext': false,     // true: Allow ES.next (ES6) syntax (ex: `const`)
                'moz': false,     // true: Allow Mozilla specific syntax (extends and overrides esnext features)
                                  // (ex: `for each`, multiple try/catch, function expression…)
                'evil': false,     // true: Tolerate use of `eval` and `new Function()`
                'expr': false,     // true: Tolerate `ExpressionStatement` as Programs
                'funcscope': false,     // true: Tolerate defining variables inside control statements
                'globalstrict': true,     // true: Allow global 'use strict' (also enables 'strict')
                'iterator': false,     // true: Tolerate using the `__iterator__` property
                'lastsemic': false,     // true: Tolerate omitting a semicolon for the last statement of a 1-line block
                'laxbreak': false,     // true: Tolerate possibly unsafe line breakings
                'laxcomma': false,     // true: Tolerate comma-first style coding
                'loopfunc': false,     // true: Tolerate functions being defined in loops
                'multistr': false,     // true: Tolerate multi-line strings
                'noyield': false,     // true: Tolerate generator functions with no yield statement in them.
                'notypeof': false,     // true: Tolerate invalid typeof operator values
                'proto': false,     // true: Tolerate using the `__proto__` property
                'scripturl': false,     // true: Tolerate script-targeted URLs
                'shadow': false,     // true: Allows re-define variables later in code e.g. `var x=1; x=2;`
                'sub': true,     // true: Tolerate using `[]` notation when it can still be expressed in dot notation
                'supernew': false,     // true: Tolerate `new function () { ... };` and `new Object;`
                'validthis': false,     // true: Tolerate using this in a non-constructor function

                // Environments
                'browser': true,     // Web Browser (window, document, etc)
                'browserify': false,    // Browserify (node.js code in the browser)
                'couch': false,    // CouchDB
                'devel': false,     // Development/debugging (alert, confirm, etc)
                'dojo': false,    // Dojo Toolkit
                'jasmine': true,    // Jasmine
                'jquery': true,    // jQuery
                'mocha': true,     // Mocha
                'mootools': false,    // MooTools
                'node': true,    // Node.js
                'nonstandard': false,    // Widely adopted globals (escape, unescape, etc)
                'prototypejs': false,    // Prototype and Scriptaculous
                'qunit': false,    // QUnit
                'rhino': false,    // Rhino
                'shelljs': false,    // ShellJS
                'worker': false,    // Web Workers
                'wsh': false,    // Windows Scripting Host
                'yui': false,    // Yahoo User Interface

                // Custom Globals
                'globals' : {   // additional predefined global variables
                    'angular': false
                }
            }
        },

        // Before generating any new files, remove any previously-created files.
        clean: {
            tests: ['tmp']
        },

        // Configuration to be run (and then tested).
        devbliss: {
            defaultOptions: {
                options: {},
                files: {
                    'tmp/defaultOptions': ['test/fixtures/testing', 'test/fixtures/123']
                }
            },
            customOptions: {
                options: {
                    separator: ': ',
                    punctuation: ' !!!'
                },
                files: {
                    'tmp/customOptions': ['test/fixtures/testing', 'test/fixtures/123']
                }
            }
        },

        // Unit tests.
        nodeunit: {
            tests: ['test/*_test.js']
        }

    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    grunt.loadNpmTasks('grunt-contrib-internal');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    // Whenever the 'test' task is run, first clean the 'tmp' dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask('test', ['clean', 'devbliss', 'nodeunit']);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint', 'test']);

};
