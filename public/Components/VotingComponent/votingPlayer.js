import React, {Component} from 'react'

var secret = require("../../../private.js")
var axios = require('axios');

class VoteVideoPlayer extends React.Component {
  constructor (props) {
    super (props)  
    
   }


  render() {
    return (
      <section >
        <h1>This is The Users Most Recent Upload</h1>
        <video controls src={this.props.movie} type="video/mp4" />
      </section>
    );
  }
}
export default VoteVideoPlayer