import React from 'react';
import GithubService from '../services/GithubService';

const containerStyle = {
  paddingLeft: '150px',
  backgroundColor: '#e8e8e8',
  paddingRight: '300px',
  paddingBottom: '100px',
  height: '80%',
  width: '80%',
  margin: '20px'
}

export default class SearchUser extends React.Component {

  handleSubmit(e) {
    e.preventDefault();

    GithubService.getByUsername(this.refs.username.value).then(function(response) {
      this.props.updateUser(response.data);
    }.bind(this));

    GithubService.getReposByUsername(this.refs.username.value).then(function(response) {
      this.props.updateRepos(response.data);
    }.bind(this));

  }

  render() {
    return (
      <div className="jumbotron" style={containerStyle}>
      <h1>GitHub Info</h1>
      <div className="row">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input type="text" ref="username" className="form-control" placeholder="Ex: medson10"/>
          </div>
          <button type="submit" className="btn btn-primary">Buscar
          </button>
        </form>
      </div>
    </div>);
  }
}
