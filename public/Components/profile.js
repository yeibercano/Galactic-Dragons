import React, { Component } from 'react'
var axios = require('axios');

//import child components of profile
import ProfileVideoPlayer from './profileVideoPlayer'
import ProfileInfo from './profileInfo'
import UploadVideos from './uploadVideo'

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
        <ProfileVideoPlayer />
        <ProfileInfo />
        <UploadVideos />
      </div>
    )
  }
}

export default Profile