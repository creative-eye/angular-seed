'use strict';


import helpersService from '../services/helpers-service';
import FIRST_CONSTANT from '../services/constants/first-contant';


angular.module('app.services', [])
    .factory('helpersService', helpersService)
    .constant('FIRST_CONSTANT', FIRST_CONSTANT);
