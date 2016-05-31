import React, { Component } from 'react'
var axios = require('axios');

//import child components of profile
import ProfileVideoPlayer from './profileVideoPlayer'
import ProfileInfo from './profileInfo'
import UploadVideos from './uploadVideo'
<<<<<<< HEAD
import Voting from '../VotingComponent/voting.js'

=======
import UploadNewVideo from './uploadNewVideo'
>>>>>>> 111b3c829a3429c0fdb1c8c73ee1a9bffe47df1c

// this is the parent component 
// shows userInfo - ProfilePlayer - ProfileVideos - ProfileUpload
class Profile extends Component {

  constructor (props) {
    super (props) 
    // //pulls info from localStorage
    // let userLS = localStorage.getItem('user');
    // //parses the info brought down (object)
    // let parseUser = JSON.parse(userLS);
    // // console.log('userLS PROFILE COMPONENT', parseUser);
    // // this.props.user = localStorage.getItem(JSON.parse(user))
    // let movieLS = localStorage.getItem('movieInfo');
    // //parses the info brought down (object)
    // let parseMovie = JSON.parse(movieLS);
    // // console.log('this is the new parsed movie info:', parseMovie)
    let local = JSON.parse(localStorage.getItem('user'))
    let token = local.token;
    console.log('token in localStorage constructor: ', token)

    var config = {
      headers: {'Authorization': token}
    };

   
    this.state = {
<<<<<<< HEAD
      userInfo: parseUser,
    }
  }

  
=======
      userInfo: '',
      token: token,
      config: config, 
      allMovies: ""
      // video: parseMovie.video
    }
  }

  componentDidMount() {
    console.log('token in component this.state.token :', this.state.token)
   axios.get('/users/single', {params: {token: this.state.token}})
    .then(function(res){
      console.log('res', res.data)
      console.log('response passing token', res.data[0].user.properties)
      this.setState( { userInfo: res.data[0].user.properties } );
    }.bind(this))
    .then(function(){
      axios.get("/movies/user", {params: {token: this.state.token, userName: this.state.userInfo.userName}})
      .then(data => {
        console.log('data after user request', data)
        this.setState({ allMovies: data.data });
      });
    }.bind(this))

  }

>>>>>>> 111b3c829a3429c0fdb1c8c73ee1a9bffe47df1c

  render() {
    
    return (
<<<<<<< HEAD
      <section>
        <section className="profile_container" >
          <ProfileInfo  userInfo = {this.state.userInfo}/>
          <ProfileVideoPlayer userInfo = {this.state.userInfo} />
            <UploadVideos />
        </section>
        <Voting />
      </section>
=======
      <div> 
        <ProfileInfo userInfo = {this.state.userInfo}/>
        <ProfileVideoPlayer 
        userInfo = {this.state.userInfo}
        allMovies = {this.state.allMovies}
         />
        <UploadVideos />
      </div>
>>>>>>> 111b3c829a3429c0fdb1c8c73ee1a9bffe47df1c
    )
  }
}

export default Profile
         