import React, { Component } from 'react'
var axios = require('axios');



// this is the parent component 
class ViewingPage extends Component {

  constructor (props) {
    super (props) 

    let movieSelected = localStorage.getItem('viewerMovie')
    console.log('this is movieSelected:', movieSelected)
    if (movieSelected === '{}') {
      this.state = {
        videoUrl: null
      }
    } else {
      movieSelected = JSON.parse(movieSelected);
      this.state = {
        videoUrl: movieSelected.video
      }
      console.log('this is now the new state:', this.state.videoUrl);
    }
  }
 
  render() {

    if (this.state.url === null) {
      return <div>Loading...</div>
    }

    return (
      <div>
      <h1>This is a test</h1>
        <video controls src={this.state.videoUrl} type="video/mp4" />
      </div>
    );
  }
}

export default ViewingPage