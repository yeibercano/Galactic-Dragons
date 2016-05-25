import React, {Component} from 'react'
import ProfileVideoList from './profileVideoList'
var secret = require("../../private.js")
var axios = require('axios');

//retrieve the videos from the user and display them 
// when clicked, they play in the ProfilePlayer

class ProfileVideoPlayer extends Component{

  constructor (props) {
    //Signifies what is coming from the super class?
    super(props)  
    console.log("For kicks: ", this.props.userInfo);

    this.state = {
      url: "https://s3-us-west-2.amazonaws.com/galactic.video/VideoForMarc.mp4",
      allMovies: ["title1","title2","title3"]
    }
    //get request to db to retrieve the movie nodes and subsequent video url contained within
    // axios.get("users/movies", {params: {userName: this.props.userInfo.userName}})
    // .then(function(movieResponse){
    //   TODO: Get video url from movieResponse at very last index if it comes back in an array
    //   remember to put the component back into profile once finished with TODO. Place array of movies into allMovies property
      
   
    // });
      // let movieUrl = ;
      // this.setState({url: movieUrl});
      // this.setState({allMovies: })
      // console.log("What is allMovies: ", this.state.allMovies);

  
  }

  render() {
    return (
      <div>
        <h1>This is The Users Most Recent Upload</h1>
        <video controls>
            <source src={this.state.url} type="video/mp4" />
        </video>
        <div>
          <ProfileVideoList moviesList = {this.state.allMovies}/>
        </div>

      </div>
    );
  }
}

export default ProfileVideoPlayer

