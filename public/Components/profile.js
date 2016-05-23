import React from 'react'
var axios = require('axios');

//import child components of profile
import ProfileVideos from './profileVideos'
import ProfileInfo from './profileInfo'

// this is the parent component 
// shows userInfo - ProfilePlayer - ProfileVideos - ProfileUpload

const Profile = React.createClass({
  render() {
    return (
      <div> 
        <div> PROFILE PARENT COMPONENT SHOWING</div>
        <ProfileVideos/>
        <ProfileInfo/>
      </div>
    )
  }
});

export default Profile