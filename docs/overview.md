# The "grunt-devbliss" tasks

## Overview
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

## Options

- **port**: port on which the HTTP server is running
- **testport**: port on which the HTTP server used for the tests is running
- **livereload**: websocket port used for reloading application when local files have changed

## Tasks

- `devbliss-wiredep`: add includes scripts in the index.html file for each bower component found
- `devbliss-connect`: configures and starts a default express server
- `devbliss-configureRewriteRules`: use default rewrite rules
- `devbliss-configureProxies`: use default proxies configuration
- `devbliss-watch`: watches file changes and reloads them while developing
- `devbliss-recess`: convert less to css
- `devbliss-jshint`: validate js code quality
- `devbliss-copy`: copy files from app to dist
- `devbliss-concat`: join files

## Requirements

To be able to use the tasks, your project must have the following structure:

```
my-npm-project
|-- app/                        --> where the application files are (html, js, css)
|   -- bower_components/        --> bower dependencies
|   -- app/bower_components/ecosystem-main-frontend/ --> main frontend include
|   -- app_components/          --> modules of the app itself
|   -- app/app_dev_components/  --> development only components
|   -- scripts/                 --> more js scripts
|   -- styles/                  --> css files reside here
|   -- views/                   --> views outside any module
|   -- styles/less/             --> where the applications less files are
|   -- styles/less/Base.less    --> base less file if less is used
|   -- index.html
|-- test/                       --> application test js files
|-- dist/                       --> where the application is built
|-- Gruntfile.js
|-- package.json
```

# Local set up

To work on this plugin locally, use the [npm link](https://docs.npmjs.com/cli/link) feature.

# Recreate README.MD

To recreate the README.MD just run `grunt build-contrib`.
