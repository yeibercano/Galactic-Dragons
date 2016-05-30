import React, { Component } from 'react'
import ViewingInfo from './viewingInfo'
import ViewingPlayer from './viewingPlayer'
var axios = require('axios');



// this is the parent component 
class ViewingPage extends Component {

  constructor (props) {
    super (props) 
    let movieSelected = localStorage.getItem('viewerMovie');
    movieSelected = JSON.parse(movieSelected);
    console.log("this is movie selected", movieSelected);
    this.state ={
      videoUrl: movieSelected.video
    }
  }
 
  render() {

    return (
      <div>
      <h1>This is a test</h1>
      <video controls src={this.state.videoUrl} type="video/mp4" />
      </div>
    )
  }
}

export default ViewingPage
