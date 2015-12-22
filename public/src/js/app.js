'use strict';

//var $ = require('jquery');
var angular = require('angular');

/**
 * 3rd party packages
 */
// require external libs like lodash
var wrappExternalLibraries = require('./services/wrap-external-libs');
/**
 * END 3rd party packages
 */

/**
 * ng packages
 */
var ngSanitize = require('angular-sanitize');
var ngResource = require('angular-resource');
var ngBar = require('../../../node_modules/angular-loading-bar/src/loading-bar.js');
var uiRouter = require('angular-ui-router');
/**
 * END ng packages
 */

/**
 * Internal modules
 */
var config = require('./config');
var appServices = require('./on-init-modules/init-global-services');
var appRoutes = require('./config/app-routes');
var firstModule = require('./first-module/first-module');
/**
 * END Internal modules
 */

console.log('App:init');
angular.module('app',
[
    // external libs
    'app.libs',

    // ng modules
    'ngSanitize',
    'ngResource',
    'ui.router',

    // internal assets
    'app.config',
    'app.services',
    'templates-all',

    // modules
    'firstModule'
])
.config(appRoutes);
