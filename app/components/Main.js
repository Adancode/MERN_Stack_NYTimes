// Include React
var React = require('react');

// Included all of the React Router dependencies
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var Results = require('./Children/Results');
var Saved = require('./Children/Saved');

var Main = React.createClass({

	// Here we render the component
	render: function(){

		return(

			<div className="container">

				<div className="row">

					<div className="jumbotron text-center">
						<h1>New York TImes MERN Stack Article Search App</h1>
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
                                             <p><strong>Title:</strong> Space Jam </p>
                                             <p><strong>Year:</strong> 1996</p>
                                             <p><strong>Director:</strong> Joe Pytka</p>
                                             <p><strong>Stars:</strong> Michael Jordan, Wayne Knight, Theresa Randle </p>
                                        </div>
                                   </div>
                              </div>
					</div>

					<div className="row">

						{/*Added this.props.children to dump all of the child components into place*/}
                              <Results />

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

// Export the component back for use in other files
module.exports = Main;
