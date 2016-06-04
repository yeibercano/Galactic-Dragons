import React, { Component } from 'react'
import { render } from 'react-dom'
import LandingPage from './public/Components/LandingPageComponents/landingPage'
import Viewer from './public/Components/ViewingComponent/viewing'
import Voting from './public/Components/VotingComponent/voteContainer'
import Login from './public/Components/login'
import CreateAccountScreen from './public/Components/register'
import Profile from './public/Components/ProfileViewComponents/profile'
import UploadNewVideo from './public/Components/ProfileViewComponents/uploadNewVideo'
import Footer from './public/Components/footer'
import Header from './public/Components/Header/Header'
import { Router, Route, IndexRoute, Link, hashHistory, browserHistory } from 'react-router'
import './public/style/styles.css'


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

const App = React.createClass({

  getInitialState: function(){
    return {
      search : ''
    }
  },
  

  logout: function(e){
    // e.preventDefault();
    localStorage.removeItem("user");
    hashHistory.push("/home")
  },

  _search: function(e) {
    
    console.log('e -->', e)
    this.setState({search: e}, function(){
      console.log('this.state.search',this.state.search)
    })

    // console.log('event target', e)
    // if (e.key === 'Enter') {
    //     console.log('enter hit');
    // }
 
  },
  
  render() {
    let user = JSON.parse(localStorage.getItem('user')) || undefined;
      let style = {};
      let hide = {}
      if(user === undefined){
        style.display = "none"
      } else {
        hide.display = "none"
      }



   console.log('user:', user)
    return (
      <div>
        <Header />
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
      <Route path="home" component={Home}/>
      <Route path="viewer" component={ViewerPlayer} />
      <Route path="vote" component={VotingPlayer} />
      <Route path="register" component={Register} />
      <Route path="login" component={LoginPage} />
      <Route path="profile" component={ProfileUser} />
      <Route path="NewVideo" component={UploadNewVideo} />
    </Route>
  </Router>
), document.getElementById('app'))
        