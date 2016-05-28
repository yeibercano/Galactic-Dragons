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
      console.log('this.state.allMovies', this.state.allMovies)
      axios.get("/movies").then(data => {
        this.setState( { allMovies: data.data } );
      })
    }
 

  render() {
    console.log(this.state.allMovies);
    return (
      <section> 
        <h1> Landing Page for All Users</h1>
        <LandingPageVideoList />
        <LandingPageVideoPlayer allMovies = {this.state.allMovies} />
      </section>
    )
  }
}

export default LandingPage
