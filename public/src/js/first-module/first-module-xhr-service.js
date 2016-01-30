'use strict';


firstModuleXhrService.$inject = [
    '$http',
    'config',
    'helpersService'
];
function firstModuleXhrService (
    $http,
    config,
    helpersService
) {

    return {
        getFirstModuleData: getFirstModuleData
    }


    function getFirstModuleData (args) {
        let opts = {
            url: config.api + '/api/getFirstModuleData',
            method: 'GET'
        };

        return $http(opts)
            .then(
                helpersService.returnResAfterXHRCall,
                helpersService.rejectPromiseAfterXHRCall
            );
    }
}

export default firstModuleXhrService;
