'use strict';


firstModuleOverviewCtrl.$inject = [
    'firstModuleXhrService'
];
function firstModuleOverviewCtrl (
    firstModuleXhrService
) {
    var self = this;

    var init = (function () {
        initData();
        initState();
    })();


    function initData () {
        self.data = {};

        populateInitData();
    }

    function initState () {
        self.state = {};
    }


    function populateInitData () {
        firstModuleXhrService.getFirstModuleData()
            .then(function (res) {
                self.data.general = res.data;
                console.log(self.data.general)
            });
    }

}

module.exports = firstModuleOverviewCtrl;
