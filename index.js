import React, { Component } from 'react'
import { render } from 'react-dom'
import LandingPage from './public/Components/LandingPageComponents/landingPage'
import Viewer from './public/Components/ViewingComponent/viewing'
import Voting from './public/Components/VotingComponent/voteContainer'
import Login from './public/Components/login'
import CreateAccountScreen from './public/Components/register'
import Profile from './public/Components/ProfileViewComponents/profile'
import UploadNewVideo from './public/Components/ProfileViewComponents/uploadNewVideo'
import Search from './public/Components/search'
import Footer from './public/Components/footer'
import Header from './public/Components/Header/Header'
import { Router, Route, IndexRoute, Link, hashHistory, browserHistory } from 'react-router'


var axios = require('axios');
const Home = React.createClass({
  
  render() {
    return (
      <div>
        <LandingPage />
      </div>
      );
  }})
const Register = React.createClass({
  render() {
    return (
      <div>
        <CreateAccountScreen />
      </div>
      );
  }})
const LoginPage = React.createClass({
  render() {
    return (
      <div>
        <Login />
      </div>
      );
  }})
const ProfileUser = React.createClass({
  render() {
    return (
      <div>
        <Profile />
      </div>
      );
  }})
const ViewerPlayer = React.createClass({
  render() {
    return (
      <div>
        <Viewer/>
      </div>
      );
  }})
const VotingPlayer = React.createClass({
  render() {
    return (
      <div>
        <Voting />
      </div>
      );
  }})
const SearchResults = React.createClass({
  render() {
    return (
      <div>
        <Search />
      </div>
      );
  }})
const App = React.createClass({  
  render() {
    return (
      <section>
        <Header />
          <section className="wrapper">
            {this.props.children}
          </section>
        <Footer />
      </section>
    )
  }
})
render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="home" component={Home}/>
      <Route path="viewer" component={ViewerPlayer} />
      <Route path="vote" component={VotingPlayer} />
      <Route path="register" component={Register} />
      <Route path="login" component={LoginPage} />
      <Route path="profile" component={ProfileUser} />
      <Route path="NewVideo" component={UploadNewVideo} />
      <Route path="search" component={SearchResults} />
    </Route>
  </Router>
), document.getElementById('app'))
        
