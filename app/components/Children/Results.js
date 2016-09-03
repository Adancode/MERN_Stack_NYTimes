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
     				<div className="panel-body text-left">

     						<h4>{this.props.results0}</h4>
                                   <h4>{this.props.results1}</h4>
                                   <h4>{this.props.results2}</h4>
                                   <h4>{this.props.results3}</h4>
                                   <h4>{this.props.results4}</h4>
     						{/* <p>{this.props.address}</p> */}

     				</div>
     			</div>
               </div>

		)
	}
});

// Export the component back for use in other files
module.exports = Results;
