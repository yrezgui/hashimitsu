var request       = require('superagent');
var AppConstants  = require('../constants/AppConstants');
var ServerActions = require('../actions/ServerActions');

module.exports = {

  localFetchJobs: function() {
    try {
      var rawJobs = JSON.parse(localStorage.getItem('rawJobs'));
    } catch(e) {
      return;
    }

    if(rawJobs) {
      ServerActions.receiveLocalJobs(rawJobs);
    }
  },

  remoteFetchJobs: function() {
    request
      .get(AppConstants.Api.BASE_URL)
      .end(function(response){
        if (response.ok) {

          if(response.body.results && response.body.results.length) {
            ServerActions.receiveRemoteJobs(response.body);
            ServerActions.saveLocalJobs(response.body);
          }

        } else {
          alert('Oh no! error ' + response.text);
        }
      });
  }

};