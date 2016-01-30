'use strict';

//import from e('jquery';
import angular from 'angular';

/**
 * 3rd party packages
 */
// require external libs like lodash
import wrappExternalLibraries from './services/wrap-external-libs';
/**
 * END 3rd party packages
 */

/**
 * ng packages
 */
import ngSanitize from 'angular-sanitize';
import ngResource from 'angular-resource';
import ngBar from '../../../node_modules/angular-loading-bar/src/loading-bar.js';
import uiRouter from 'angular-ui-router';
/**
 * END ng packages
 */

/**
 * Internal modules
 */
import config from './config';
import appServices from './on-init-modules/init-global-services';
import appRoutes from './config/app-routes';
import firstModule from './first-module/first-module';
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
