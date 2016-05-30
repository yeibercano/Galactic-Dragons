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
        videoUrl: movieSelected.video,
        videoImage: movieSelected.image,
        videoTitle: movieSelected.title,
        videoSynopsis: movieSelected.synopsos,
        videoActors: movieSelected.actors,
        videoDirector: movieSelected.director,
        videoYear: movieSelected.year


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
        <div>
            <img style={{height: 150, width:150}} src={this.state.videoImage} />
            <h3>{this.state.videoTitle}</h3>
            <h5>{this.state.videoSynopsis}</h5>
            <h5>{this.state.videoActors}</h5>
            <h5>{this.state.videoDirector}</h5>
            <h5>{this.state.videoYear}</h5>
        </div>
      </div>
    );
  }
}

export default ViewingPage