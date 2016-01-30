'use strict';


firstModuleOverviewCtrl.$inject = [
    'firstModuleXhrService'
];
function firstModuleOverviewCtrl (
    firstModuleXhrService
) {
    let self = this;

    let init = (function () {
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
                console.log(self.data.general);
            });
    }

}

export default firstModuleOverviewCtrl;
