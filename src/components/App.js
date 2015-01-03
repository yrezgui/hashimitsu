var React   = require('react/addons');
var Loading = require('./Loading');
var Header  = require('./Header');

var App = React.createClass({

  render: function() {
    return <Header />
  }
});

module.exports = App;