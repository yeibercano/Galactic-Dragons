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
    //pulls info from localStorage
    let userLS = localStorage.getItem('user');
    //parses the info brought down (object)
    let parseUser = JSON.parse(userLS);
    // console.log('userLS PROFILE COMPONENT', parseUser);
    // this.props.user = localStorage.getItem(JSON.parse(user))
    this.state = {
      userInfo: parseUser
    }
    console.log("This is this.state.userInfo inside constructor: ", this.state.userInfo)
    // this.setUser(parseUser);
  }

  // setUser (user) {
  //   this.setState({
  //     userInfo: user
  //   })
  //   console.log("This is the new user: ", this.state.userInfo);
  // }

  render() {
    return (
      <div> 
        <div> PROFILE PARENT COMPONENT SHOWING</div>
        <ProfileVideoPlayer userInfo = {this.state.userInfo} />
        <ProfileInfo />
        <UploadVideos />
      </div>
    )
  }
}

export default Profile