import React, { Component } from 'react'
var axios = require('axios');



// this is the parent component 
class ViewingPage extends Component {

  constructor (props) {
    super (props) 

    let movieSelected = localStorage.getItem('viewerMovie')
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
    }
  }
 
  render() {

    if (this.state.url === null) {
      return <div>Loading...</div>
    }

    return (
      <section>
      <h1>{this.state.videoTitle}</h1>
        <section >
          <video className="viewing_video" autoPlay controls src={this.state.videoUrl} type="video/mp4" />
        </section>  
        <aside className="viewing_info">
            <section id="poster_info">
              <img style={{height: 250, width:250}} src={this.state.videoImage} />
            </section>
            <section id="movie_info">
            <h2>{this.state.videoTitle}</h2>
            <h4>{this.state.videoSynopsis}</h4>
            <h4>{this.state.videoActors}</h4>
            <h4>{this.state.videoDirector}</h4>
            <h4>{this.state.videoYear}</h4>
            </section>
        </aside>
      </section>
    );
  }
}

export default ViewingPage