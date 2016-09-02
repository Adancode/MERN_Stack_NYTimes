// Include React
var React = require('react');

// This is the results component
var Results = React.createClass({

	// Here we render the function
	render: function(){

		return(
               <div className="col-lg-12">
     			<div className="panel panel-default">
     				<div className="panel-heading">
     					<h3 className="panel-title text-center">Results</h3>
     				</div>
     				<div className="panel-body text-center">

     						<h1>Result One</h1>
                                   <h1>Result Two</h1>
                                   <h1>Result Three</h1>
                                   <h1>Result Four</h1>
                                   <h1>Result Five</h1>
     						{/* <p>{this.props.address}</p> */}

     				</div>
     			</div>
               </div>

		)
	}
});

// Export the component back for use in other files
module.exports = Results;
