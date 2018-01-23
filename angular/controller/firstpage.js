//firstController to view all matches
myApp.controller('firstController',['$http',function($http){ 
   var main=this;
	 this.baseUrl = 'https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json';
	 this.baseUrl2= 'https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json';
	 this.data1=[]; 
	 this.data2=[];
	 this.firstName=0;
	 this.secondName=0;
	 this.loadFirst = function(){
     $http({ 
        method: 'GET', 
        url: main.baseUrl 
      }).then(function successCallback(response){
          // this callback will be called asynchronously 
          // when the response is available 
          //console.log(response); 
		  main.firstName=response.data.name;
		  //console.log(main.firstName);
		  main.data1 = response.data.rounds;
          //console.log(main.data1);
}, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
        });
  };
 this.loadFirst();
 this.loadSecond = function(){
     $http({ 
        method: 'GET', 
        url: main.baseUrl2
      }).then(function successCallback(response){
          // this callback will be called asynchronously 
          // when the response is available 
          //console.log(response); 
		  main.secondName=response.data.name;
		  //console.log(main.firstName);
		  main.data2 = response.data.rounds;
          //console.log(main.data2);
}, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
        });
  };
 this.loadSecond();
}]);