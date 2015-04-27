# grunt-devbliss-conventions v2.0.1

> The Devbliss Grunt conventions plugin.



## Getting Started
This plugin requires Grunt `0.4.x`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-devbliss-conventions --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-devbliss-conventions');
```

### The "grunt-devbliss-conventions" tasks

#### Overview
In your project's Gruntfile, you have to define a section named `devbliss` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  devbliss: {
      port: 9000,
      testport: 9001,
      livereload: 9002
  },
});
```

Optional: You can add your own configuration for the following tasks: copy.

For example:
```js
grunt.initConfig({
  devbliss: {
      port: 9000,
      testport: 9001,
      livereload: 9002
  },
  copy: {
      your_target: {
          files: [
              {
                  ...
              }
          ]
      }
  }
});
```
Then you can call `grunt-devbliss-copy:your_target` or `grunt-devbliss-copy` (which will run all targets). 

#### Options

- **port**: port on which the HTTP server is running
- **testport**: port on which the HTTP server used for the tests is running
- **livereload**: websocket port used for reloading application when local files have changed

#### Tasks

- `devbliss-wiredep`: add includes scripts in the index.html file for each bower component found
- `devbliss-connect`: configures and starts a default express server
- `devbliss-configureRewriteRules`: use default rewrite rules
- `devbliss-watch`: watches file changes and reloads them while developing
- `devbliss-recess`: convert less to css
- `devbliss-eslint`: validate js code quality
- `devbliss-copy`: copy files from app to dist
- `devbliss-concat`: join files
- `devbliss-clean`: remove generated files
- `devbliss-rev`: add md5 to file name
- `devbliss-processhtml`: process html file at build time for the test environments
- `devbliss-htmlmin`: minify html files
- `devbliss-useminPrepare`: prepare configuration for using minified files
- `devbliss-usemin`: use minified files
- `devbliss-cssmin`: use css minified files
- `devbliss-karma`: karma test runner
- `devbliss-protractor`: protractor test e2e test framework
- `devbliss-uglify`: js uglifier

- `build`: builds the project
- `serve`: serves the project locally in your browser

- `unit-test-app`: run unit tests on the app
- `unit-test-dist`: run unit tests on the packaged app
- `e2e-test-app`: run e2e tests on the app
- `e2e-test-dist`: run e2e tests on the packaged app

#### Requirements

To be able to use the tasks, your project must have the following structure:

```
my-npm-project
|-- app/                        --> where the application files are (html, js, css)
|   -- bower_components/        --> bower dependencies
|   -- app_components/          --> modules of the app itself
|   -- app_dev_components/  --> development only components
|   -- scripts/                 --> more js scripts
|   -- styles/                  --> css files reside here
|   -- views/                   --> views outside any module
|   -- styles/fonts/            --> where the applications font files are
|   -- styles/less/             --> where the applications less files are
|   -- styles/less/Base.less    --> base less file if less is used
|   -- index.html
|-- test/                       --> application test js files
|-- test/protractor.conf.js     --> protractor configuration file for e2e tests
|-- test/karma.conf.js          --> karma configuration file for unit tests
|-- dist/                       --> where the application is built
|-- Gruntfile.js
|-- package.json
```

To integrate the plugin into your new project please add this to your host projects `package.json`

```
  "scripts": {
    "postinstall": "node_modules/grunt-devbliss-conventions/node_modules/protractor/bin/webdriver-manager update"
  }
```

### Additional config in your host projects Gruntfile.js

The configuration in your Gruntfile.js of your host project will be used as an underlying configuration for most tasks.
This means, that your projects configuration will be merged with the default configuration at runtime.
The default configuration will overwrite your projects configuration on conflict.

There are exceptions to this rule for devbliss-configureRewriteRules, devbliss-configureProxies and devbliss-karma.
For those tasks the configuration of your host project will completely overwrite the default task-related configuration if present.

### Local set up

To work on this plugin locally, use the [npm link](https://docs.npmjs.com/cli/link) feature.

### Recreate README.MD

To recreate the README.MD just run `grunt build-contrib`.

### Troubleshooting

- Karma or any other task doesn't work!

```
  >> rm -rf node_modules/grunt-devbliss-conventions/node_modules/*
  >> npm install
```

- Karma still doesn't work and there were errors while npm install

  Make sure python27 is installed and selected:

```
  >> sudo port select --set python python27
  >> npm install
```




## Release History

 * 2015-04-27   v3.0.0-SNAPSHOT   copy task is now implemented with extend-grunt-plugin and can be configured from consumer project
 * 2015-04-21   v2.0.1   bug, change proxy-middleware and grunt-contrib-nodeunit from devDependencies to dependencies
 * 2015-04-21   v2.0.0   add pull_request.md containing the reviews checklist [object Object] update protractor
 * 2015-04-17   v1.0.0   rename plugin to grunt-devbliss-conventions
 * 2015-04-07   v0.10.3   allow eslint globals for protractor and contract tests
 * 2015-03-24   v0.10.2   added app/styles/fonts to copy task
 * 2015-02-23   v0.10.1   fixed eslint helper methods based of new rules
 * 2015-02-20   v0.10.0   use eslint instead of jshint for style rules checks
 * 2015-02-20   v0.9.1   added recess task to serve task
 * 2015-02-18   v0.9.0   removed function parameter limitation, added X2JS as global added some missing unittests renamed src in recess task from Base.less to base.less
 * 2015-02-12   v0.8.0   added a new config merge option and used it for the karma task only yet
 * 2015-02-11   v0.7.0   added global jshint rules
 * 2015-02-10   v0.6.1   updated grunt-contrib-jshint version
 * 2015-02-10   v0.6.0   fixed overview.md paths added possibility to overwrite connect rewrite rules in the project gruntfile changed order of rewrite rules and proxy config (proxy first) to make configuration easier added possibility to overwrite connect proxy rules in the project gruntfile
 * 2015-02-04   v0.5.0   added e2e and unittest tasks, uglify, small fixes add optional targets for clean, copy and processHtml [object Object] changed package.json dependency format to comply with our node style guide
 * 2015-02-04   v0.4.0   added serve, build, devbliss-cssmin, default added devbliss-clean, devbliss-rev, devbliss-processhtml added devbliss-htmlmin, devbliss-usemin, devbliss-useminPrepare
 * 2015-01-28   v0.3.4   added devbliss-recess, devbliss-concat, devbliss-copy, devbliss-jshint added devbliss-watch refactored into modules
 * 2015-01-19   v0.3.3   update documentation
 * 2015-01-15   v0.3.2   fix configuration for proxies and rewrite rules
 * 2015-01-15   v0.3.1   move grunt dependencies form dev to normal
 * 2015-01-15   v0.3.0   add devbliss-connect task
 * 2015-01-14   v0.2.0   add devbliss-wiredep task remove IDE specific files
 * 2014-12-19   v0.1.1   fix plugin description
 * 2014-12-18   v0.1.0   initial setup

---

Task submitted by [ devbliss GmbH](https://www.devbliss.com/)

*This file was generated on Mon Apr 27 2015 09:28:42.*
