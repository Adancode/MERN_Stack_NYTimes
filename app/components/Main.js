// Include React
var React = require('react');

// Included all of the React Router dependencies
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var Results = require('./Children/Results');
var Saved = require('./Children/Saved');

// Helper Function
var helpers = require('../utils/helpers.js');

var Main = React.createClass({
     // Here we set a generic state associated with the number of clicks
	getInitialState: function(){
		return {
			search_term: "Iraq",
			begin_year: "19900701",
               end_year: "20000701",
               results: "passedResult"
		}
	},

     handleChange: function(event){

    	// Here we create syntax to capture any change in text to the query terms (pre-search).
    	// See this Stack Overflow answer for more details:
    	// http://stackoverflow.com/questions/21029999/react-js-identifying-different-inputs-with-one-onchange-handler
    	var newState = {};
    	newState[event.target.id] = event.target.value;
    	this.setState(newState);

	},

     // If the component changes (i.e. if a search is entered)...
     handleClick: function(){
          /*this.setState({
               this.state.search_term: ,
               this.state.begin_year: ,
               this.state.end_year
          });*/

          // Run the query for the address
          helpers.runQuery(this.state.search_term, this.state.begin_year, this.state.end_year)
               .then(function(data){
                    console.log(data);
                    /*var newState = {};
                   	newState[results] = "hahaha";//data.response.docs[0].abstract;
                   	this.setState(newState);
                    console.log(newState);*/
               }.bind(this))
     },

	// Here we render the component
	render: function(){

		return(

			<div className="container">

				<div className="row">

					<div className="jumbotron text-center">
						<h1>New York Times MERN Stack Article Search App</h1>
						<p><em>Search for and annotate articles of interest!</em></p>
						{/* <a href="#/info"><button className="btn btn-default">Info</button></a>
						<a href="#/chat"><button className="btn btn-default">Comments</button></a> */}
					</div>

					<div className="row">
                              <div className="col-lg-12">
                                   <div className="panel panel-default">
                                        <div className="panel-heading">
                                             <h3 className="panel-title text-center">Search</h3>
                                        </div>
                                        <div className="panel-body">
                                        <form>
                                             <div className="form-group">
                                                  <h4 className="text-center"><strong>Topic</strong></h4>

                                                  {/*Note how each of the form elements has an id that matches the state. This is not necessary but it is convenient.
                                                       Also note how each has an onChange event associated with our handleChange event.
                                                  */}
                                                  <input type="text" className="form-control text-center" id="search_term" onChange= {this.handleChange} required/>
                                                  <br />
                                                  <h4 className="text-center"><strong>Start Date (YYYYMMDD)</strong></h4>
                                                  <input type="text" className="form-control text-center" id="begin_year" onChange= {this.handleChange} required/>
                                                  <br />
                                                  <h4 className="text-center"><strong>End Date (YYYYMMDD</strong></h4>
                                                  <input type="text" className="form-control text-center" id="end_year" onChange= {this.handleChange} required/>
                                                  <br />
                                                  <button type="button" className="btn btn-primary btn-block text-center" onClick={this.handleClick}>Search</button>
                                             </div>
                                        </form>
                                        </div>
                                   </div>
                              </div>
					</div>

					<div className="row">

						{/*Added this.props.children to dump all of the child components into place*/}
                              <Results results={this.state.results}/>

					</div>

                         <div className="row">

						{/*Added this.props.children to dump all of the child components into place*/}
                              <Saved />

					</div>
				</div>

			</div>
		)
	}
});



// These variables will hold the results we get from the user's inputs via HTML
// var queryTerm 	= "Iraq";
// //var numArticles 	= 5;
// var startYear 	= 1990;
// var endYear = 2000;
//
//
// helpers.runQuery(queryTerm, startYear, endYear);
// Export the component back for use in other files
module.exports = Main;
