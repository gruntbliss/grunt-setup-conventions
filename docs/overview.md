# The "grunt-devbliss-conventions" tasks

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

## Requirements

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

# Additional config in your host projects Gruntfile.js

The configuration in your Gruntfile.js of your host project will be used as an underlying configuration for most tasks.
This means, that your projects configuration will be merged with the default configuration at runtime.
The default configuration will overwrite your projects configuration on conflict.

There are exceptions to this rule for devbliss-configureRewriteRules, devbliss-configureProxies and devbliss-karma.
For those tasks the configuration of your host project will completely overwrite the default task-related configuration if present.

# Local set up

To work on this plugin locally, use the [npm link](https://docs.npmjs.com/cli/link) feature.

# Recreate README.MD

To recreate the README.MD just run `grunt build-contrib`.

# Troubleshooting

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

