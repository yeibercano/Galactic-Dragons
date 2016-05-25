import React, {Component} from 'react'
var secret = require("../../private.js")
var axios = require('axios');

//retrieve the videos from the user and display them 
// when clicked, they play in the ProfilePlayer

class ProfileVideoPlayer extends Component{

  constructor (props) {
    //Signifies what is coming from the super class?
    super(props)  
    console.log("For kick: ", this.props.userInfo);

  
  }

  render() {
    return (
      <div>
        <h1>This is The Users Most Recent Upload</h1>

      </div>
    );
  }
}

export default ProfileVideoPlayer


        // <video controls>
        //     <source src={this.props.userInfo.video[this.props.userInfo.video.length - 1]} type="video/mp4" />
        // </video>