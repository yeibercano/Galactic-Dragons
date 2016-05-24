import React, { Component } from 'react'
var axios = require('axios');

//import child components of profile
import ProfileVideos from './profileVideos'
import ProfileInfo from './profileInfo'

// this is the parent component 
// shows userInfo - ProfilePlayer - ProfileVideos - ProfileUpload

class Profile extends Component {

  constructor (props) {
    super (props) 
    let userLS = localStorage.getItem('user');
    let parseUser = JSON.parse(userLS);
    // console.log('userLS PROFILE COMPONENT', parseUser);
    // this.props.user = localStorage.getItem(JSON.parse(user))
  }

  render() {
    return (
      <div> 
        <div> PROFILE PARENT COMPONENT SHOWING</div>
        <ProfileVideos/>
        <ProfileInfo/>
      </div>
    )
  }
}

export default Profile