# grunt-devbliss

> The best Grunt plugin ever.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-devbliss --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-devbliss');
```

## The "grunt-devbliss" tasks

### Overview
In your project's Gruntfile, add a section named `devbliss` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  devbliss: {
      port: 9000,
      testport: 9001,
      livereload: 9002
  },
});
```

### Options

- **port**: port on which the HTTP server is running
- **testport**: port on which the HTTP server used for the tests is running
- **livereload**: websocket port used for reloading application when local files have changed

### Tasks

- `devbliss-wiredep`: add includes scripts in the index.html file for each bower component found
- `devbliss-connect`: configures and starts a default express server
- `devbliss-configureRewriteRules`: use default rewrite rules
- `evbliss-configureProxies`: use default proxies configuration

### Requirements

To be able to use the tasks, your project must have the following structure:

``
my-npm-project
|-- app/              --> where the application files are
|   -- index.html
|-- dist/             --> where the application is built
|-- Gruntfile.js
|-- package.json
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
v0.3.2:
  date: 2015-01-15
  changes:
    - fix configuration for proxies and rewrite rules
v0.3.1:
  date: 2015-01-15
  changes:
    - move grunt dependencies form dev to normal
v0.3.0:
  date: 2015-01-15
  changes:
    - add devbliss-connect task
v0.2.0:
  date: 2015-01-14
  changes:
    - add devbliss-wiredep task
    - remove IDE specific files
v0.1.1:
  date: 2014-12-19
  changes:
    - fix plugin description
v0.1.0:
 date: 2014-12-18
 changes:
   - initial setup

