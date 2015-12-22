'use strict';


var firstModuleOverviewCtrl = require('./first-module-overview-ctrl');
var firstModuleXhrService = require('./first-module-xhr-service');

angular.module('firstModule', [])
            .controller('firstModuleOverviewCtrl', firstModuleOverviewCtrl)
            .factory('firstModuleXhrService', firstModuleXhrService);
