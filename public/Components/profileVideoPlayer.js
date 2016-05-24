import React from 'react'
var secret = require("../../private.js")
var axios = require('axios');

//retrieve the videos from the user and display them 
// when clicked, they play in the ProfilePlayer

const ProfileVideoPlayer = React.createClass({

  
  render() {
    return (
      <div>
        <h1>This is The Users Most Recent Upload</h1>
        <video controls>
            <source src="https://s3-us-west-2.amazonaws.com/galactic.video/shawty.mp4" type="video/mp4" />
        </video>
      </div>
    );
}
})

export default ProfileVideoPlayer