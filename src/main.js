var React = window.React = require('react/addons');

var ApiUtils = require('./utils/ApiUtils');

var App     = require('./components/App');
var Loading = require('./components/Loading');


ApiUtils.localFetchJobs();
ApiUtils.remoteFetchJobs();

React.render(
  <App />,
  document.body
);