myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when("/2015-16",{
        	templateUrl		: 'views/15-16.html',
            controller 		: 'firstController',
        	controllerAs 	: 'firstCtrl'
        })
        .when("/2016-17",{
        	templateUrl     : 'views/16-17.html',
        	controller 		: 'firstController',
        	controllerAs 	: 'firstCtrl'
        })
        .when("/match/:matchid1/:matchid2/:matchdate/",{
			templateUrl     : 'views/singlematch.html',
        	controller 		: 'secondController',
        	controllerAs 	: 'secCtrl'
        })
		 .when("/Stat",{
              templateUrl : 'views/teamwisestatistics.html',
              controller : "StatsController",
              controllerAs : "thirdCtrl"
           })
        .when("/Stat",{
              templateUrl : 'views/totalstatistics.html',
              controller : "totalStatsController",
              controllerAs : "thirdCtrl"
           })
        .otherwise(
            {
                //redirectTo:'/'
                template   : '<h1>404 page not found</h1>'                      //if nothing is found
            }
        );
}]);