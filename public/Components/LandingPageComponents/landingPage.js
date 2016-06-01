import React, { Component } from 'react'
import LandingPageVideoList from './landingPageVideoList'
import LandingPageVideoPlayer from './landingPageVideoPlayer'

const axios = require('axios');



// this is the parent component 
class LandingPage extends Component {

  constructor (props) {
    super (props) 

    this.state = {
      allMovies: null
    }
    
  }

  componentWillMount() {
      axios.get("/movies").then(data => {
        this.setState( { allMovies: data.data } );

      })
    }
  
 selectedMovie(movie) {
  console.log('this is the movie selected!');
 }

  render() {
    return (
      <section> 
        <LandingPageVideoPlayer allMovies = {this.state.allMovies} />
        <LandingPageVideoList 
        selectedMovie = {(selectedMovie) => this.selectedMovie(selectedMovie)}
        allMovies = {this.state.allMovies} />
      </section>
    )
  }
}

export default LandingPage
