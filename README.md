# grunt-devbliss v0.3.3

> The Devbliss GRUNT Plugin



## Getting Started
This plugin requires Grunt `0.4.x`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-devbliss --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-devbliss');
```

### The "grunt-devbliss" tasks

#### Overview
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

#### Options

- **port**: port on which the HTTP server is running
- **testport**: port on which the HTTP server used for the tests is running
- **livereload**: websocket port used for reloading application when local files have changed

#### Tasks

- `devbliss-wiredep`: add includes scripts in the index.html file for each bower component found
- `devbliss-connect`: configures and starts a default express server
- `devbliss-configureRewriteRules`: use default rewrite rules
- `devbliss-configureProxies`: use default proxies configuration
- `devbliss-watch`: watches file changes and reloads them while developing

#### Requirements

To be able to use the tasks, your project must have the following structure:

```
my-npm-project
|-- app/              --> where the application files are
|   -- index.html
|-- dist/             --> where the application is built
|-- Gruntfile.js
|-- package.json
```

### Local set up

To work on this plugin locally, use the [npm link](https://docs.npmjs.com/cli/link) feature.

### Recreate README.MD

To recreate the README.MD just run `grunt build-contrib`.



## Release History

 *    v0.3.4-Snapshot   added devbliss-watch refactored into modules
 * 2015-01-19   v0.3.3   update documentation
 * 2015-01-15   v0.3.2   fix configuration for proxies and rewrite rules
 * 2015-01-15   v0.3.1   move grunt dependencies form dev to normal
 * 2015-01-15   v0.3.0   add devbliss-connect task
 * 2015-01-14   v0.2.0   add devbliss-wiredep task remove IDE specific files
 * 2014-12-19   v0.1.1   fix plugin description
 * 2014-12-18   v0.1.0   initial setup

---

Task submitted by [ devbliss GmbH](https://www.devbliss.com/)

*This file was generated on Fri Jan 23 2015 10:49:05.*
