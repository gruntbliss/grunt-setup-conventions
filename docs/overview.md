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

## Requirements

To be able to use the tasks, your project must have the following structure:

```
my-npm-project
|-- app/              --> where the application files are
|   -- index.html
|-- dist/             --> where the application is built
|-- Gruntfile.js
|-- package.json
```

# Local set up

To work on this plugin locally, use the [npm link](https://docs.npmjs.com/cli/link) feature.

# Recreate README.MD

To recreate the README.MD just run `grunt build-contrib`.
