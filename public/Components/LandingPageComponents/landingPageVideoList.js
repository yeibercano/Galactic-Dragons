import React, {Component} from 'react'
var secret = require("../../../private.js")
var axios = require('axios');

class LandingPageVideoList extends Component {
  constructor(props){
    super(props)
    let movies = props
  }

  movieInfo(movieInfo) {
    return (
        <div>
          {movieInfo.title}
        </div>
    )
   }

  render() {

    if (this.props.allMovies === null) {
      return <div>Loading...</div>
    }

    return (
      <section>
        {this.props.allMovies.map(movie => this.movieInfo(movie.m.properties))}
      </section>
    );
  }

}

export default LandingPageVideoList