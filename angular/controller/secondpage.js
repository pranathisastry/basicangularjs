//SecondController to view single match
myApp.controller("secondController", ['$http','$location','$routeParams',function($http,$location,$routeParams)
{
	var main=this;
	this.baseUrl = 'https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json';
	this.baseUrl2= 'https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json';
	//Declaring Required variables
	this.matchId1 = $routeParams.matchid1 ;
    this.matchId2 = $routeParams.matchid2 ;
    this.matchDate = $routeParams.matchdate ;
	//console.log(main.matchId1);
	//console.log(main.matchId2);
	//console.log(main.matchDate);
	this.team1;
    this.team2;
    this.score1;
    this.score2;
    this.winner;
    this.date;
    this.day;
	this.code1;
	this.code2;
    this.data = [];
	this.loadsingleData=function(data)  //load Single detail Match Function
	{
		for(var i in main.data)
		{
			for(var j in main.data[i].matches)
			{
				if(main.data[i].matches[j].team1.name == main.matchId1 && main.data[i].matches[j].team2.name==main.matchId2 &&  main.data[i].matches[j].date==main.matchDate)
				{
					console.log("Record_Found");
					main.day=main.data[i].name;
					//console.log(main.data[i].name);
					//console.log(main.day);
					main.team1=main.data[i].matches[j].team1.name;
					//console.log(main.data[i].matches[j].team1.name);
					//console.log(main.team1);
					main.team2=main.data[i].matches[j].team2.name;
					//console.log(main.team2);
					//console.log(main.data[i].matches[j].team2.name);
					main.score1=main.data[i].matches[j].score1;
					//console.log(main.score1);
					//console.log(main.data[i].matches[j].score1);
					main.score2=main.data[i].matches[j].score2;
					//console.log(main.data[i].matches[j].score2);
					//console.log(main.score2);
					main.date=main.data[i].matches[j].date;
					//console.log(main.data[i].matches[j].date);
					//console.log(main.date);
					main.code1=main.data[i].matches[j].team1.code;
					//console.log(main.data[i].matches[j].team1.code);
					//console.log(main.code1);
					main.code2=main.data[i].matches[j].team2.code;
					//console.log(main.data[i].matches[j].team2.code);
					//console.log(main.code2);
					if(main.score1 == main.score2)
					{
						main.winner="Match Drawn";
						//console.log(main.winner);
					}
					else if (main.score1>main.score2)
					{
						main.winner= ""+main.team1+" wins";
						//console.log(main.winner);
					}
						else{
						  main.winner = ""+main.team2+" wins";
                         //console.log(main.winner);						  
					}
				}
			}
		}
	}
      this.loadYear1=function()
	  {
		  $http({
			  method:"GET",
			  url:main.baseUrl
			  }).then(function successCallback(response)
			  {
				  //console.log("working");
				  main.data = response.data.rounds;
				main.loadsingleData(main.data); 
			  },function errorcallBack(reason)
			  {
				  alert("error in GET");
				  
			  })
	  }
	  this.loadYear1()
	  this.loadYear2=function()
	  {
		  $http({
			  method:"GET",
			  url:main.baseUrl2
			  }).then(function successCallback(response)
			  {  
			    //console.log("working");
				 main.data = response.data.rounds;
				main.loadsingleData(main.data); 
			  },function errorcallBack(reason)
			  {
				  alert("error in GET");
				  
			  })
	  }
	  this.loadYear2();
}]);



        

