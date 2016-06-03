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
import {Navbar, NavbarBrand, NavbarCollapse, NavbarHeader, NavDropdown, MenuItem, NavbarToggle, Nav, NavItem ,Button, Form, FormGroup, FormControl, DubeActionCreators} from 'react-bootstrap'
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

  logout: function(e){
    // e.preventDefault();
    localStorage.removeItem("user");
    hashHistory.push("/home")
  },

  _search: function(e) {
    let searchedItem = e;
    // this._submitSearch = _submitSearch.bind(this);
    // localStorage.setItem('movieSearched', JSON.stringify(searchedItem));
    localStorage.setItem('searchTerm', searchedItem);

  },

  _submitSearch: function() {
    let searchedItem = localStorage.getItem('searchTerm');
    axios.get('/movies/search', {params: {target: searchedItem}}).then(data => {
        localStorage.setItem('searchResults', JSON.stringify(data.data));
      })
    .then(function() {
    hashHistory.push('/search');
    })
    .catch(function(err) {
      if (err) throw err
    })

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
            <NavItem style= {style} eventKey={2} href="/#/profile">Profile</NavItem>
            <NavDropdown eventKey={3} title="Categories" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Comedy</MenuItem>
              <MenuItem eventKey={3.3}>Romance</MenuItem>
              <MenuItem eventKey={3.4}>Horror</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
             <Navbar.Form className="search_container" >
                <FormGroup >
                  <FormControl ref="search" onChange={e => this._search (e.target.value)} name="search"  type="text" placeholder="Search " className="search_bar" />
                </FormGroup>
                {' '}
                <Button onClick= {this._submitSearch}
                  type="submit"
                  className="search_button"
                >Search</Button>
            </Navbar.Form>
            <NavItem style={hide} id="navbar_register_link" eventKey={1} href="/#/register">Register</NavItem>
            <NavItem style={hide} id="navbar_login_link" eventKey={2} href="/#/login">Login</NavItem>
            <NavItem  style= {style} id="navbar_logout_link" eventKey={3} href="/#/home" onClick ={this.logout}>Logout</NavItem>
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
        