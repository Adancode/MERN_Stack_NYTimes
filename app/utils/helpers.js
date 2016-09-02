// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require('axios');

// This variable will be pre-programmed with our authentication key (the one we received when we registered)
var authKey = "159df7a0ef7748f482425129c491ff9d";

// SETUP VARIABLES
// ==========================================================

// This variable will be pre-programmed with our authentication key (the one we received when we registered)
// var authKey = "159df7a0ef7748f482425129c491ff9d";
//
// // These variables will hold the results we get from the user's inputs via HTML
// var queryTerm 	= "Iraq";
// //var numArticles 	= 5;
// var startYear 	= 1990;
// var endYear		= 2000;
//
// // Based on the queryTerm we will create a queryURL
// var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=" + queryTerm + "&begin_date=" + startYear + "&end_date=" + endYear;
//
// //"https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=159df7a0ef7748f482425129c491ff9d&q=Iraq?begin_date=1999?end_date=2000";
//
// // Array to hold the various article info
// var articleCounter = 0;

// Helper Functions (in this case the only one is runQuery)
var helpers = {

	runQuery: function(queryTerm, startYear, endYear){
          // Based on the queryTerm we will create a queryURL
          var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=" + queryTerm + "&begin_date=" + startYear + "&end_date=" + endYear;

		//console.log("The article limit is" + numArticles + "and the query url is: " + queryURL);
          console.log("The query url is: " + queryURL);

		//Figure out the geolocation

		return axios.get(queryURL)
			.then(function(response){

				console.log(response);
				//return response.data.results[0].formatted;
		});

	}

};


// We export the helpers function (which contains getGithubInfo)
module.exports = helpers;
