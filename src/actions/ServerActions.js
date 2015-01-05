var AppDispatcher = require('../dispatchers/AppDispatcher');
var ChatConstants = require('../constants/AppConstants');

var ActionTypes = ChatConstants.ActionTypes;

module.exports = {

  receiveLocalJobs: function(response) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_LOCAL_JOBS,
      rawJobs: response.results
    });
  },

  receiveRemoteJobs: function(response) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_REMOTE_JOBS,
      rawJobs: response.results
    });
  },

  saveLocalJobs: function(response) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.SAVE_LOCAL_JOBS,
      rawJobs: response.results
    });

    localStorage.setItem('rawJobs', JSON.stringify(response));
  }
};