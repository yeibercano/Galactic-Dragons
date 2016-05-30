import React, { Component } from 'react'
import { render } from 'react-dom'
import LandingPage from './public/Components/LandingPageComponents/landingPage'
import Viewer from './public/Components/ViewingComponent/viewing'
import Login from './public/Components/login'
import CreateAccountScreen from './public/Components/register'
import Profile from './public/Components/profile'
import UploadNewVideo from './public/Components/uploadNewVideo'
import Footer from './public/Components/footer'
import {Navbar, NavbarBrand, NavbarCollapse, NavbarHeader, NavDropdown, MenuItem, NavbarToggle, Nav, NavItem} from 'react-bootstrap'
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
        <Navbar inverse>
          <Navbar.Header>
          <Navbar.Brand>
            <a href="/#/home">Sovereign</a>
          </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="/#/home">Home</NavItem>
            <NavItem eventKey={2} href="/#/profile">Profile</NavItem>
            <NavDropdown eventKey={3} title="Categories" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Comedy</MenuItem>
              <MenuItem eventKey={3.3}>Romance</MenuItem>
              <MenuItem eventKey={3.4}>Horror</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="/#/register">Register</NavItem>
            <NavItem eventKey={2} href="/#/login">Login</NavItem>
          </Nav>
          </Navbar.Collapse>
        </Navbar>
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
      <Route path="viewer" component={Stuff} />
      <Route path="register" component={Register} />
      <Route path="login" component={LoginPage} />
      <Route path="profile" component={ProfileUser} />
      <Route path="NewVideo" component={UploadNewVideo} />
    </Route>
  </Router>
), document.getElementById('app'))
        