import React, { Component } from 'react'
import ViewingInfo from './viewingInfo'
import ViewingPlayer from './viewingPlayer'
var axios = require('axios');



// this is the parent component 
class ViewingPage extends Component {

  // constructor (props) {
  //   super (props) 

  //   // console.log("This is props inside the constructor of ViewingPage", this.props);
  //   this.state ={
  //     movie: null
  //   }
  // }
  settingFunc(movie) {
    console.log("This is movie inside of settingFunc", movie);
    return (
        <video controls src="https://s3-us-west-2.amazonaws.com/galactic.video/smallToy.mp4" type="video/mp4" />
      )
  }
  
 
  render() {
     if (this.props.movieSent) {
        return this.settingFunc(this.props.movieSent)
    }
    // if (this.props.movieSent === null) {
    //     return (
    //         <div>Loading...</div>
    //     );
    // }

    console.log('#######this is this.props inside render of viewing.js:', this.props);
    return (
      <div>
      <h1>This is a test</h1>
      </div>
    )
  }
}

export default ViewingPage
