/*
 * grunt-devbliss
 * https://github.com/devbliss/ecosystem-grunt-plugin
 *
 * Copyright (c) 2014 Devbliss
 * Licensed under the Apache, License, 2.0 licenses.
 */

'use strict';

module.exports = function (grunt) {

    // Devbliss Tasks and Configuration
    require('../config/configureProxies.js').loadTask(grunt);
    require('../config/configureRewriteRules.js').loadTask(grunt);

    require('../config/connect.js').loadTask(grunt);
    require('../config/wiredep.js').loadTask(grunt);

    require('../config/devbliss.js').loadTask(grunt);

};
