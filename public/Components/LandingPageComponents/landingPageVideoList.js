import React, {Component} from 'react'
import Load from 'react-loading';
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
    localStorage.setItem('viewerMovie', JSON.stringify(movieSelected));
    hashHistory.push('viewer')  
  }

  movieInfo(movieInfo) {
   if (movieInfo.rating > 2) {
       if (movieInfo.rating < 15) {
         return (
       <section onClick={(movieSelected) => this.movieSelected(movieInfo)} className="landing_page_movieInfo">
         <a href={(movieSelected) => this.movieSelected(movieInfo)}>
           <img id="landing_page_movieInfo_image"src={movieInfo.image} /> 
         </a>
       </section>
     )
       }
     
   }
 }

  render() {

    if (this.props.allMovies === null) {
      return <Load />
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


