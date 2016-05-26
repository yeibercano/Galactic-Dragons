import React, { Component } from 'react'
import LandingPageVideoList from './landingPageVideoList'
import LandingPageVideoPlayer from './landingPageVideoPlayer'
var axios = require('axios');



// this is the parent component 
class LandingPage extends Component {

  constructor (props) {
    super (props) 
    
  }

 

  render() {
    return (
      <div> 
        <h1> Landing Page for All Users</h1>
        <LandingPageVideoList />
        <LandingPageVideoPlayer />
      </div>
    )
  }
}

export default LandingPage
