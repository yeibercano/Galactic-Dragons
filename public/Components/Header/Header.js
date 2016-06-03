import React, { Component } from 'react'
import Brand      from './Brand'
import Nav        from './Nav'
import SearchBar  from './SearchBar'
import UserLogin  from './UserLogin'
import UserLogout from './userLogout'
import UserProfile from './userProfile'
import Register from './userRegister'

//Parent component of Header
class Header extends Component {
 
  render() {
    return (
        <header class="headerContainer">
          <Brand />
          <Nav />
          <SearchBar />
          <UserProfile />
          <Register />
          <UserLogin />
          <UserLogout />
        </header >
    )
  }
}

export default Header