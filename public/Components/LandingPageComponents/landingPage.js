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
      
      <main> 
        <LandingPageVideoPlayer allMovies = {this.state.allMovies} />
        <div style= {{width: "auto",
                      marginLeft: "10%",
                      marginRight: "10%"}}>
          <LandingPageVideoList 
            selectedMovie = {(selectedMovie) => this.selectedMovie(selectedMovie)}
            allMovies = {this.state.allMovies} />
        </div>
      </main>
      
    )
  }
}

export default LandingPage
