import React, { Component } from 'react'
import Brand      from './Brand'
import Nav        from './Nav'
import SearchBar  from './SearchBar'
import UserLogin  from './UserLogin'

//Parent component of Header
class Header extends Component {
 
  render() {
    return (
        <header className="headerWrapper">

          <Brand />
          <Nav />
          <SearchBar />
          <UserLogin />
        </header >
    )
  }
}

export default Header