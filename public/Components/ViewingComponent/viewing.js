import React, { Component } from 'react'
import ViewingInfo from './viewingInfo'
import ViewingPlayer from './viewingPlayer'
var axios = require('axios');



// this is the parent component 
class ViewingPage extends Component {

  constructor (props) {
    super (props) 
    
  }

 

  render() {
    return (
      <div> 
        <h1> Viewing the Movies</h1>
        <ViewingPlayer />
        <ViewingInfo />
      </div>
    )
  }
}

export default ViewingPage
