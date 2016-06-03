import React, { Component } from 'react'
import { hashHistory } from 'react-router'

//this component is for the Logo/Brand
class UserProfile extends Component {
 
  render() {
    return (
      <aside class="userLogin"> 
        <h1 onClick={()=> hashHistory.push('profile')}>Profile</h1>
      </aside>
    )
  }
}

export default UserProfile