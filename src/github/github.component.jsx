import React from 'react'
import { connect } from 'react-redux'
import { loadReposForUser } from './github.action'
import GithubRepoList from './githubRepoList.component.jsx'

const Github = (props) =>
  <div>
    <form onSubmit={e => { e.preventDefault(); props.onGithubUsernameSearchSubmit(e) }}>
      Github Username: <input type='text' name='username' />
      <button type='submit' >List Repositories</button>
    </form>
    { props.loading ? 'Loading...' : '' }
    { props.error ? 'There was an error' : '' }
    <GithubRepoList repos={props.repos} />
  </div>

Github.propTypes = {
  // Import Proptypes to start asserting props (import PropTypes from 'prop-types')
}

const mapStateToProps = state => {
  return {
    repos: state.Github.repositories,
    loading: state.Github.loading,
    error: state.Github.error
  }
}

const mapDispatchToEvents = dispatch => {
  return {
    onGithubUsernameSearchSubmit: (event) => {
      // Do some input checking here if you need
      dispatch(loadReposForUser(event.target.querySelector('input').value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToEvents)(Github)
