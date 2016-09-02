// Include React
var React = require('react');

// This is the results component
var Saved = React.createClass({

	// Here we render the function
	render: function(){

		return(
               <div className="col-lg-12">
     			<div className="panel panel-default">
     				<div className="panel-heading">
     					<h3 className="panel-title text-center">Saved</h3>
     				</div>
     				<div className="panel-body text-center">

     						<h1>Saved One</h1>
                                   <h1>Saved Two</h1>
                                   <h1>Saved Three</h1>
                                   <h1>Saved Four</h1>
                                   <h1>Saved Five</h1>
     						{/* <p>{this.props.address}</p> */}
     				</div>
     			</div>
               </div>
		)
	}
});

// Export the component back for use in other files
module.exports = Saved;
