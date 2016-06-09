import React, { Component } from 'react'
import { hashHistory } from 'react-router'

//this component is for the Logo/Brand
class UserLogout extends Component {

  logout(e) {
    e.preventDefault();
    localStorage.removeItem("user");
    hashHistory.push('home')
  }
 
  render() {
    return (
      <aside class="userLogin"> 
        <h1 onClick={this.logout}>logout</h1>
      </aside>
    )
  }
}

export default UserLogout