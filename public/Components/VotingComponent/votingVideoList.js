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
            <section id="voting_image">
              <img src={this.props.movie.videoImage} />
            </section>
            <section id="voting_information" >
            <h2>{this.props.movie.videoTitle}</h2>
            <h4>{this.props.movie.videoSynopsis}</h4>
            <h4>{this.props.movie.videoActors}</h4>
            <h4>{this.props.movie.videoDirector}</h4>
            <h4>{this.props.movie.videoYear}</h4>
            </section>
        </section>
    
    );
  }
}

export default VotingVideoList