import React, { Component } from 'react'
import Navbar from 'react-bootstrap'
import { render } from 'react-dom'
import LandingPage from './public/Components/LandingPageComponents/landingPage'
import Viewer from './public/Components/ViewingComponent/viewing'
import Login from './public/Components/login'
import CreateAccountScreen from './public/Components/register'
import Profile from './public/Components/profile'
import UploadNewVideo from './public/Components/uploadNewVideo'
import Footer from './public/Components/footer'
import { Router, Route, IndexRoute, Link, hashHistory, browserHistory } from 'react-router'
var axios = require('axios');

const Home = React.createClass({
  
  render() {
    return (
      <div>
        <div>This component will have the landing page components nested in here!</div>
        <LandingPage />
      </div>
      );
  }})

const Register = React.createClass({
  render() {
    return (
      <div>
        <div>This component will have the registration page components nested in here!</div>
        <CreateAccountScreen />
      </div>
      );
  }})

const LoginPage = React.createClass({
  render() {
    return (
      <div>
        <div>This component will have the Login page components nested in here!</div>
        <Login />
      </div>
      );
  }})

const ProfileUser = React.createClass({
  render() {
    return (
      <div>
        <Profile/>
      </div>
      );
  }})

const Stuff = React.createClass({
  render() {
    return (
      <div>
        <Viewer/>
      </div>
      );
  }})

const App = React.createClass({
  
  render() {
    return (
      <div>
        <h1>GALACTIC DRAGONS FTW!!</h1>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>
        {this.props.children}
        <Footer />
      </div>
    )
  }
})


render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="home" component={Home} />
      <Route path="viewer" component={Stuff} />
      <Route path="register" component={Register} />
      <Route path="login" component={LoginPage} />
      <Route path="profile" component={ProfileUser} />
      <Route path="NewVideo" component={UploadNewVideo} />
    </Route>
  </Router>
), document.getElementById('app'))