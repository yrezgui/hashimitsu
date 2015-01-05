var React     = require('react/addons');
var JobStore  = require('../stores/JobStore');
var JobItem   = require('./JobItem');

var JobsList = React.createClass({
  getInitialState: function() {
    return { jobs: JobStore.getAll() };
  },
  componentDidMount: function() {
    JobStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    JobStore.removeChangeListener(this._onChange);
  },
  _onChange: function() {
    this.setState({ jobs: JobStore.getAll() });
  },
  generateJobListing: function(job, index) {
    return <JobItem model={job} key={index} />
  },
  render: function() {
    return (
      <div>
        {this.state.jobs.map(this.generateJobListing)}
      </div>
    );
  }
});

module.exports = JobsList;