// Include React
var React = require('react');

// This is the results component
var Results = React.createClass({

	// Here we render the function
	render: function(){
          console.log(this.props.results1);
          console.log(this.props.results1);
		return(
               <div className="col-lg-12">
     			<div className="panel panel-default">
     				<div className="panel-heading">
     					<h3 className="panel-title text-center">Results</h3>
     				</div>
     				<div className="panel-body text-left">

     						<h4><a href={this.props.url0}>{this.props.results0}</a></h4>
                                   <h4><a href={this.props.url1}>{this.props.results1}</a></h4>
                                   <h4><a href={this.props.url2}>{this.props.results2}</a></h4>
                                   <h4><a href={this.props.url3}>{this.props.results3}</a></h4>
                                   <h4><a href={this.props.url4}>{this.props.results4}</a></h4>
     						{/* <p>{this.props.address}</p> */}

     				</div>
     			</div>
               </div>

		)
	}
});

// Export the component back for use in other files
module.exports = Results;
