var keyMirror = require('keymirror');

module.exports = {

  ActionTypes: keyMirror({
    RECEIVE_LOCAL_JOBS: null,
    RECEIVE_REMOTE_JOBS: null,
    SAVE_LOCAL_JOBS: null
  }),

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
  },

  Api: {
    BASE_URL: 'https://api.import.io/store/data/8aec42f1-aa1a-4440-a897-ee873b31ff42/_query?input/webpage/url=http%3A%2F%2Fcareers.stackoverflow.com%2Fjobs%3Fallowsremote%3Dtrue&_user=c5b82e89-e0b8-41f9-bdd5-f13f5925b0bb&_apikey=Xk6Emf7P1fSYy8lvBrvM0ygZdrQZytV5AAR4ykx5R%2FlwmgvPBYTH7XRwObZESjTduH6C0fsqr9N5y2LC9btu6g%3D%3D'
  }

};