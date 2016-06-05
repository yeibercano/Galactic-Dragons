import React, {Component} from 'react'
var secret = require("../../../private.js")
var axios = require('axios');
import { hashHistory } from 'react-router'

class LandingPageVideoList extends Component {
  constructor(props){
    super(props)
    localStorage.setItem('viewerMovie', JSON.stringify({}));
    this.state = {
        movieSent: null
    }
    this.movieSelected = this.movieSelected.bind(this);
   }

  movieSelected(movieSelected) {
    console.log('This movie was selected:', movieSelected);
    localStorage.setItem('viewerMovie', JSON.stringify(movieSelected));
    hashHistory.push('viewer')  
  }

  movieInfo(movieInfo) {
    return (
        <section onClick={(movieSelected) => this.movieSelected(movieInfo)} className="landing_page_movieInfo">
          <img id="landing_page_movieInfo_image"src={movieInfo.image} />
        </section>
    )
   }

  render() {

    if (this.props.allMovies === null) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <h2>Featured Movies</h2>
      <section className="landing_page">
        {this.props.allMovies.map(movie => this.movieInfo(movie.m.properties))}
      </section>
      </div>
    );
  }

}


export default LandingPageVideoList


