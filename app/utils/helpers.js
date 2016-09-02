// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require('axios');

//
// // SETUP VARIABLES
// // ==========================================================
//
// // This variable will be pre-programmed with our authentication key (the one we received when we registered)
// var authKey = "159df7a0ef7748f482425129c491ff9d";
//
// // These variables will hold the results we get from the user's inputs via HTML
// var queryTerm 	= "";
// var numResults 	= 0;
// var startYear 	= 0;
// var endYear		= 0;
//
// // Based on the queryTerm we will create a queryURL
// var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=";
//
// // Array to hold the various article info
// var articleCounter = 0;
//
// // Helper Functions (in this case the only one is runQuery)
// var helpers = {
//
// 	runQuery: function(location){
//
// 		console.log(location);
//
// 		//Figure out the geolocation
// 		var queryURL = "http://api.opencagedata.com/geocode/v1/json?query=" + location + "&pretty=1&key=" + geocodeAPI;
//
// 		return axios.get(queryURL)
// 			.then(function(response){
//
// 				console.log(response);
// 				return response.data.results[0].formatted;
// 		})
//
// 	}
//
// }
//
//
// // We export the helpers function (which contains getGithubInfo)
// module.exports = helpers;
