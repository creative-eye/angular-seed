'use strict';


var helpersService = require('../services/helpers-service');
var FIRST_CONSTANT = require('../services/constants/first-contant');


angular.module('app.services', [])
    .factory('helpersService', helpersService)
    .constant('FIRST_CONSTANT', FIRST_CONSTANT);