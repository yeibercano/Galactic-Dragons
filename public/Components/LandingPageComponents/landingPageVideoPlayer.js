import React, {Component} from 'react'
import { default as Video, Controls, Play, Mute, Seek, Fullscreen, Time, Overlay } from 'react-html5video';
var secret = require("../../../private.js")
var axios = require('axios');

//retrieve the videos from the user and display them 
// when clicked, they play in the ProfilePlayer

class LandingPageVideoPlayer extends React.Component {

  constructor (props) {
    
    super (props)  
    
   }
    // componentWillMount() {
    //   // console.log('this.props.info', this.props.userInfo)
    //   axios.get("/movies", {params: {userName: this.props.userInfo.userName}}).then(data => {
    //     console.log('data', data)
    //     this.setState( { url: data.data[data.data.length-1].m.properties.video } );
    //     this.setState( { allMovies: data.data } );
    //   });
    // }



  render() {
    
    return (
      <div>
        <video controls src="https://s3-us-west-2.amazonaws.com/galactic.video/Earth.mp4" type="video/mp4"/>
      </div>
    );
  }
}

export default LandingPageVideoPlayer

        // <Video controls>
        //     <source src="https://s3-us-west-2.amazonaws.com/galactic.video/Earth.mp4" type="video/mp4" />
        //     <Overlay />
        //     <Controls>
        //         <Play />
        //         <Seek />
        //         <Time />
        //         <Mute />
        //         <Fullscreen />
        //     </Controls>
        // </Video>
