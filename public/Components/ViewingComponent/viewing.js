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
        videoSynopsis: movieSelected.synopsis,
        videoActors: movieSelected.actors,
        videoDirector: movieSelected.director,
        videoYear: movieSelected.year


      }
      // console.log('this is now the new state:', this.state.videoUrl);
    }
  }
 
  render() {

    if (this.state.url === null) {
      return <div>Loading...</div>
    }

    return (
      <section>
        <h1 id="viewer_title">{this.state.videoTitle}</h1>
        <section >
          <video className="viewing_video" autoPlay controls src={this.state.videoUrl} type="video/mp4" />
        </section>  
        <aside className="viewing_info">
            <section id="poster_info">
              <img src={this.state.videoImage} />
            </section>
            <section id="movie_info">
            <h2>{this.state.videoTitle}</h2>
              <section id="sub_movie_info">
                <section id="synopsis">
                <h4>{this.state.videoSynopsis}</h4>
                </section>
                <h4>Actors: {this.state.videoActors}</h4>
                <h4>Director: {this.state.videoDirector}</h4>
                <h4>Release: {this.state.videoYear}</h4>
              </section>
            </section>
        </aside>
      </section>
    );
  }
}

export default ViewingPage