import React, {Component} from 'react'
var secret = require("../../../private.js")
var axios = require('axios');

class ProfileVideoList extends Component {

  videoInfo(videoInfo) {
    return (
        <div onClick={()=> this.props.selectedMovie(videoInfo)}>
          {videoInfo.title}
        </div>
    )
  }

  render() {

    if (this.props.moviesList === '') {
      return <div>Loading...</div>
    }

    return (
      <div>
        <h1>This is Where the List of Users Videos Will Be</h1>
          {this.props.moviesList.map(movie => this.videoInfo(movie.m.properties))}
      </div>
    );
  }

}

export default ProfileVideoList