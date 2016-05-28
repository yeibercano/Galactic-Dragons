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
    let movieLS = localStorage.getItem('movieInfo');
    //parses the info brought down (object)
    let parseMovie = JSON.parse(movieLS);
    // console.log('this is the new parsed movie info:', parseMovie)
    this.state = {
      userInfo: parseUser,
      // video: parseMovie.video
    }
    // console.log("This is this.state.userInfo inside constructor: ", this.state.userInfo)

    //get request to database to retrieve video 
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
        <ProfileInfo userInfo = {this.state.userInfo}/>
        <ProfileVideoPlayer userInfo = {this.state.userInfo} />
        <UploadVideos />
      </div>
    )
  }
}

export default Profile