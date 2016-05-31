import React, {Component} from 'react'

var secret = require("../../../private.js")
var axios = require('axios');

class VoteVideoPlayer extends React.Component {
  constructor (props) {
    super (props) 
    // let textvid = document.getElementsByTagName('video'); 
    // console.log("This is textvid", textvid);
  }

   movieEnded (e){
    e.preventDefault();
    alert("You may now vote on this movie");
    let what = document.getElementById("star-rating")

    console.log("This is what", what);
    return what.style={{display:"inline"}}
//show rating, alert user they may vote push username to viewed array

    // axios.post()
   }

  render() {
    return (
      <section >
        <h1>This is The Users Most Recent Upload</h1>
        <video autoPlay controls src={this.props.movie} id="myVideo" type="video/mp4" onEnded={this.movieEnded} />
      </section>
    );
  }
}
export default VoteVideoPlayer