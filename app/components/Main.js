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
                                        <form>
                                             <div className="form-group">
                                                  <h4 className="text-center"><strong>Topic</strong></h4>

                                                  {/*Note how each of the form elements has an id that matches the state. This is not necessary but it is convenient.
                                                       Also note how each has an onChange event associated with our handleChange event.
                                                  */}
                                                  <input type="text" className="form-control text-center" id="term" onChange= {this.handleChange} required/>
                                                  <br />
                                                  <h4 className="text-center"><strong>Start Year</strong></h4>
                                                  <input type="text" className="form-control text-center" id="start" onChange= {this.handleChange} required/>
                                                  <br />
                                                  <h4 className="text-center"><strong>End Year</strong></h4>
                                                  <input type="text" className="form-control text-center" id="end" onChange= {this.handleChange} required/>
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
