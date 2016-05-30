import React, {Component} from 'react'
var secret = require("../../../private.js")
var axios = require('axios');

//retrieve the videos from the user and display them 
// when clicked, they play in the ProfilePlayer

class ViewingPlayer extends React.Component {
   

  render() {    
    console.log("%%%%%%%%%%%%%%%",this.props)  
    return (
      <div>
        <h1>This is Where You Watch Movies</h1>
      </div>
    );
  }
}

export default ViewingPlayer

          // <video controls src={"https://s3-us-west-2.amazonaws.com/galactic.video/smallToy.mp4"} type="video/mp4"/>
