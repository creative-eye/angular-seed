'use strict';


import firstModuleOverviewCtrl from './first-module-overview-ctrl';
import firstModuleXhrService from './first-module-xhr-service';

angular.module('firstModule', [])
            .controller('firstModuleOverviewCtrl', firstModuleOverviewCtrl)
            .factory('firstModuleXhrService', firstModuleXhrService);
