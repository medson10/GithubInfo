var axios = require('axios');

var GithubService = {
  getByUsername: function(username) {
    return axios.get('https://api.github.com/users/' + username);
  },

  getReposByUsername: function(username) {
    return axios.get('https://api.github.com/users/' + username + '/repos');
  }
};

module.exports = GithubService;
