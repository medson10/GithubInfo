import React from 'react';
import GithubService from '../services/GithubService';


export default class SearchUser extends React.Component {

  handleSubmit (e) {
   e.preventDefault();

   GithubService.getByUsername(this.refs.username.value).then(function(response) {
     this.props.updateUser(response.data);
   }.bind(this));

   GithubService.getReposByUsername(this.refs.username.value).then(function(response) {
     this.props.updateRepos(response.data);
   }.bind(this));

  }

  render () {
    return(
      <div className="jumbotron">
        <h1>GitHub Info</h1>
        <div className="row">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                ref="username"
                className="form-control"
                placeholder="Ex: matheusml"
                />
            </div>
            <button
              type="submit"
              className="btn btn-primary">Buscar
            </button>
          </form>
        </div>
      </div>
    );
  }
}
