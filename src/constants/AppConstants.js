var keyMirror = require('keymirror');

module.exports = {

  PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  }),

  MenuItems: {
    JOBS: {
      id: 'jobs',
      text: 'Last Jobs',
      default: true
    },
    FAVORITES: {
      id: 'favorites',
      text: 'Favorites'
    }
  }

};