//Stat controller to see statistics of a particular team
myApp.controller("StatsController",["$http",function($http){
      var main = this;
      this.baseUrl1 = "https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json";
      this.baseUrl2 = "https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json";
      this.data1=0;
	  this.year1=0;
      this.rounds1 = [];
	  //declare to reqd variables to show data in our stat-view
      this.code1;
	  this.playedmatches;
	  this.score;
	  this.win;
	  this.tie;
	  this.loss;
	  this.winPercent;
	  this.lossPercent;
	  this.value=false;
	  // will make that pass teamname,corresponding year 
          this.teamStats = function(response,data1){ 
           
           main.rounds1 = response.data.rounds; 

                 console.log(data1)

                var playedmatches = 0 ;  var wins= 0; var loss = 0; var drawn = 0;
                 var totalscore = 0; var code1;

              for(var i in main.rounds1){

                for( var j in main.rounds1[i].matches){
//checking teamname 
                    if (main.rounds1[i].matches[j].team1.name == data1){
                      
                       code1 = main.rounds1[i].matches[j].team1.code;

                       playedmatches++ ; 

                      totalscore += main.rounds1[i].matches[j].score1 ;
                  
                      if(main.rounds1[i].matches[j].score1 > main.rounds1[i].matches[j].score2){
                        wins ++ ; 
                        
                      }

                      else if(main.rounds1[i].matches[j].score1 < main.rounds1[i].matches[j].score2){
                        loss ++;
                       
                      }

                      else if(main.rounds1[i].matches[j].score1 == main.rounds1[i].matches[j].score2){
                        drawn ++;
                      }
                      
                    } // If !
                    
                    
                    else if(main.rounds1[i].matches[j].team2.name == data1){

                       code1 = main.rounds1[i].matches[j].team2.code ;
                      
                       playedmatches++ ;

                       totalscore += main.rounds1[i].matches[j].score2 ;

                       if(main.rounds1[i].matches[j].score1 > main.rounds1[i].matches[j].score2){
                        loss++ ; 
                      }

                      else if(main.rounds1[i].matches[j].score1 < main.rounds1[i].matches[j].score2){
                        wins++;
                      }

                      else if(main.rounds1[i].matches[j].score1 == main.rounds1[i].matches[j].score2){
                        drawn++;
                      }

                    }      //else if ends

            
                  }    
              }        //FOR-IN ends 



                   
//after that saving all the value in actual variables
                  main.code1= code1;
                  main.playedmatches = playedmatches;
                  main.score = totalscore;
                  main.loss = loss;
                  main.wins = wins;
                  main.drawn = drawn;
                  main.winPercent = ((wins/playedmatches)*100).toFixed(2);
                  main.lossPercent = ((loss/playedmatches)*100).toFixed(2);
          };


           this.statsCheck = function(data1,year1){ 
           if(data1== null)
		   {
			   alert("Please enter mentioned details");
		   }
		   else if(year1==null)
		   {
			  alert("Please enter Team details"); 
		   }
		   else if( year1 == "2015")
		   {
			   $http({
                    method:"GET",
                    url: main.baseUrl1
              }).then(function successCallback(response){
				this.names1=[];  
				for(var i in  response.data.rounds[0].matches)
				{
					this.names1.push(response.data.rounds[0].matches[i].team1.name)
				}
				{
					if(this.names1.includes(data1))
					{
						main.teamStats(response,data1)
					}
				}
		   })
		   }
		   else if( year1 == "2016")
		   {
			   $http({
                    method:"GET",
                    url: main.baseUrl2
              }).then(function successCallback(response){
				this.names1=[];  
				for(var i in  response.data.rounds[0].matches)
				{
					this.names1.push(response.data.rounds[0].matches[i].team1.name)
				}
				{
					if(this.names1.includes(data1))
					{
						main.teamStats(response,data1)
					}
				}
		   })
		   }
        }
}]); // controller ends