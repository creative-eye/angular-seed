'use strict';

import FirstModuleOverviewCtrl from '../first-module/first-module-overview-ctrl';

appRoutes.$inject = [
    '$httpProvider',
    '$stateProvider',
    '$urlRouterProvider'
];
function appRoutes (
    $httpProvider,
    $stateProvider,
    $urlRouterProvider
) {

    // Add the interceptor to the $httpProvider.
    $httpProvider.interceptors.push('xhrInterceptors');

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

export default appRoutes;
