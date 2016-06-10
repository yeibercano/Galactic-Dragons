import React, { Component } from 'react'
var axios = require('axios');

//import child components of profile
import ProfileVideoPlayer from './profileVideoPlayer'
import ProfileInfo from './profileInfo'
import UploadVideos from './uploadVideo'
import VoteMovies from './profileVoting.js'
import UploadNewVideo from './uploadNewVideo'


// this is the parent component 
// shows userInfo - ProfilePlayer - ProfileVideos - ProfileUpload
class Profile extends Component {

  constructor (props) {
    super (props) 
    //pulls info from localStorage
    let userLS = localStorage.getItem('user');
    //parses the info brought down (object)
    let parseUser = JSON.parse(userLS);
    let movieLS = localStorage.getItem('movieInfo');
    //parses the info brought down (object)
    let parseMovie = JSON.parse(movieLS);
    this.state = {

      userInfo: parseUser,
    }
  }


  render() {
    
    return (
      <section>
        <section className="profile_container" >
          <ProfileInfo userInfo = {this.state.userInfo}/>
          <ProfileVideoPlayer 
            userInfo = {this.state.userInfo}
            allMovies = {this.state.allMovies} />
          <UploadVideos />
        </section>
          <VoteMovies />
      </section>
    )
  }
}

export default Profile
         