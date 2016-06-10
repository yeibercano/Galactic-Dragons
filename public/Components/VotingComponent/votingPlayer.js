import React, {Component} from 'react'

var secret = require("../../../private.js")
var axios = require('axios');

class VoteVideoPlayer extends React.Component {
  constructor (props) {
    super (props) 
    
    // let textvid = document.getElementsByTagName('video'); 
    // console.log("This is textvid", textvid);
  }

   ratingTimeout(){
    console.log("made it into ratingTimeout");
    alert("Voting for the movie" + this.props.title + "is about to close, please rate");
  }

   movieEnded (e, movie){
    e.preventDefault();
    alert("You may now vote on this movie");
    let what = document.getElementById("star-rating")
    what.style.visibility= "visible"
    // console.log("This is movie: ",movie);

    //Alert user that voting will be closing for a particular movie
    // window.setTimeout(function(){
    //   console.log("made it into ratingTimeout");
    //   alert("Voting for the movie " + movie + " is about to close, please rate");
    // }.bind(this), 25000)

    return 
    //update tha plays on the node for this specific movie
    // axios.post()
   }


  render() {
    return (
      <section className="voting_player_container">
        <video autoPlay controls src={this.props.movie} id="myVideo" type="video/mp4" onEnded={e=> this.movieEnded(e, this.props.title)} />
      </section>
    );
  }
}
export default VoteVideoPlayer