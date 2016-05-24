import React from 'react'
var secret = require("../../private.js")
var axios = require('axios');

//retrieve the videos from the user and display them 
// when clicked, they play in the ProfilePlayer

const ProfileVideos = React.createClass({
  render() {
    return (
        <video controls>
            <source src="https://s3-us-west-2.amazonaws.com/galactic.video/shawty.mp4" type="video/mp4" />
        </video>
    );
}
})

export default ProfileVideos