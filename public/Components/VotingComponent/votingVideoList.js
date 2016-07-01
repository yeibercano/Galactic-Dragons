import React, { Component } from 'react'
var axios = require('axios');



// this is the parent component 
class VotingVideoList extends Component {

 
  render() {
    // console.log("What is this.props?:", this.props.movie.videoTitle)
    // if (this.props.movie === null) {
    //   return <div>Loading...</div>
    // }

    return (
    
        <section className="vote_contain">
            <section id="voting_image_viewer">
              <img src={this.props.movie.videoImage} />
            </section>
            <section id="voting_information_viewer" >
            <h2>{this.props.movie.videoTitle}</h2>
            <section id="synopsis">
            <h5>{this.props.movie.videoSynopsis}</h5>
            </section>
            <h5>Actors:   {this.props.movie.videoActors}</h5>
            <h5>Director:   {this.props.movie.videoDirector}</h5>
            <h5>Released:   {this.props.movie.videoYear}</h5>
            </section>
        </section>
    
    );
  }
}

export default VotingVideoList