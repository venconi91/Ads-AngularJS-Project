app.controller('AllUserAdsController', function ($scope, $log, userAdsData) {


    userAdsData.getAll()
			.$promise
			.then(function (data) {
			    console.log(data);
			    $scope.allAds = data.ads;
			},
			function (error) {
			    $log.error(error);
			});

    $scope.myAdsFilter = function (myAdsFilter) {
        //console.log(myAdsFilter)
        $scope.currentStatus = myAdsFilter;
    }
    $scope.currentStatus = '';

    //$scope.categoryClicked = function (categoryId) {
    //    $scope.currentCategory = categoryId;
    //}
    //$scope.currentTown = ''
    //$scope.townClicked = function (townId) {
    //    $scope.currentTown = townId;
    //}

});

//<div class="panel-body">
//                        <ul>
//                            <li>
//                                <button ng-click="myAdsFilter()">All</button>
//                            </li>
//                            <li>
//                                <button ng-click="myAdsFilter()>Published</button>
//                            </li>
//                            <li>
//                                <button ng-click="myAdsFilter()>Waiting Approval</button>
//                            </li>
//                            <li>
//                                <button ng-click="myAdsFilter()>Inactive</button>
//                            </li>
//                        </ul>
//                    </div>
//                </div>
//            </div>
//        </div>

//        <!--  | filter: {'status' : currentStatus}-->