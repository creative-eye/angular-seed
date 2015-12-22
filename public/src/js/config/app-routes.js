'use strict';

var FirstModuleOverviewCtrl = require('../first-module/first-module-overview-ctrl');

appRoutes.$inject = [
    '$stateProvider',
    '$urlRouterProvider'
];
function appRoutes (
    $stateProvider,
    $urlRouterProvider
) {

    $stateProvider
        .state('firstModule', {
            url: '/firstModule',
            templateUrl: 'first-module/partials/first-module-wrapper.html',
            controller: FirstModuleOverviewCtrl,
            controllerAs: 'vm',
            data: {}
        });


    // FIXME this need server side configuring to work
    // for real world scenarios
    // $locationProvider.html5Mode(true);

    // redirect to landing page
    $urlRouterProvider.otherwise('/firstModule');

}

module.exports = appRoutes;
