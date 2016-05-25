import React, {Component} from 'react'
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
      url: ''
    }
    //get request to db to retrieve the movie nodes and subsequent video url contained within
    axios.get("users/movies", {params: {userName: this.props.userInfo.userName}})
    .then(function(movieResponse){
      //TODO: Get video url from movieResponse at very last index if it comes back in an array
      //remember to put the component back into profile once finished with TODO
      let movieUrl;
      this.setState({url: movieUrl});
    });

  
  }

  render() {
    return (
      <div>
        <h1>This is The Users Most Recent Upload</h1>
        <video controls>
            <source src={this.state.url} type="video/mp4" />
        </video>
      </div>
    );
  }
}

export default ProfileVideoPlayer

