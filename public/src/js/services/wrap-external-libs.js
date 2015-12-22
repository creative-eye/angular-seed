'use strict';

/**
 * Wrapper for all external libs that need to be global
 */
var _ = require('lodash');
var store = require('store');

/**
 * Wrappers for imported npm libraries
 */
angular.module('app.libs', [])
    .factory('_', function() {
        return _;
    })
    .factory('store', function () {
        return store;
    });
