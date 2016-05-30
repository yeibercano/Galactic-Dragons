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
 

  render() {
    return (
      <section> 
        <LandingPageVideoPlayer allMovies = {this.state.allMovies} />
        <LandingPageVideoList />
      </section>
    )
  }
}

export default LandingPage
