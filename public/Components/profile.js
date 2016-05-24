import React from 'react'
var axios = require('axios');

//import child components of profile
import ProfileVideoPlayer from './profileVideoPlayer'
import ProfileInfo from './profileInfo'
import UploadVideos from './uploadVideo'

// this is the parent component 
// shows userInfo - ProfilePlayer - ProfileVideos - ProfileUpload

const Profile = React.createClass({
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
});

export default Profile