import React, {Component} from 'react'
var secret = require("../../../private.js")
var axios = require('axios');

class ProfileVideoList extends Component {

  videoInfo(videoInfo) {
    return (
        <section className="list-item-container" onClick={()=> this.props.selectedMovie(videoInfo)}>
          <img src={videoInfo.image} />
          <h3>{videoInfo.title}</h3>
        </section>
    )
  }

  render() {

    if (this.props.moviesList === '') {
      return <div>Loading...</div>
    }

    return (
      <section>
        <h1>Your Uploaded Content</h1>
        <section className="profile_video_list">
            {this.props.moviesList.map(movie => this.videoInfo(movie.m.properties))}
        </section>
      </section>
    );
  }

}

export default ProfileVideoList