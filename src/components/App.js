var React     = require('react/addons');
var Loading   = require('./Loading');
var Header    = require('./Header');
var JobsList  = require('./JobsList');

var App = React.createClass({

  render: function() {
    return (
      <div>
        <JobsList />
      </div>
    );
  }
});

module.exports = App;