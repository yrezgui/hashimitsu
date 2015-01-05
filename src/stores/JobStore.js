var AppDispatcher = require('../dispatchers/AppDispatcher');
var AppConstants  = require('../constants/AppConstants');
var EventEmitter  = require('events').EventEmitter;
var assign        = require('object-assign');

var ActionTypes   = AppConstants.ActionTypes;
var CHANGE_EVENT  = 'change';

var _jobs = [];

var JobStore = assign({}, EventEmitter.prototype, {

  init: function(rawJobs) {
    _jobs = rawJobs;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getAll: function() {
    return _jobs;
  },

});

JobStore.dispatchToken = AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.type) {

    case ActionTypes.RECEIVE_LOCAL_JOBS:
      JobStore.init(action.rawJobs);
      JobStore.emitChange();
      break;

    case ActionTypes.RECEIVE_REMOTE_JOBS:
      JobStore.init(action.rawJobs);
      JobStore.emitChange();
      break;

    default:
      // do nothing
  }

});

module.exports = JobStore;