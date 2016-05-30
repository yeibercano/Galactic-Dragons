import React, {Component} from 'react'
import ProfileVideoList from './profileVideoList'
var secret = require("../../private.js")
var axios = require('axios');

class ProfileVideoPlayer extends React.Component {

  constructor (props) {
    super (props)  
    this.state = {
      url: "",
      allMovies: ""
    }
   }

  componentWillMount() {
    axios.get("/movies", {params: {userName: this.props.userInfo.userName}}).then(data => {
      this.setState({ url: data.data[data.data.length-1].m.properties.video, allMovies: data.data });
    });
  }

  selectedMovie (movie) {
    console.log('A new movie was selected!', movie.video);
    this.setState({url: movie.video})
  }

  render() {

    return (
      <div>
        <h1>This is The Users Most Recent Upload</h1>
        <video controls src={this.state.url} type="video/mp4" />
         <ProfileVideoList 
          selectedMovie = {(selectedMovie) => this.selectedMovie(selectedMovie)}
          moviesList = {this.state.allMovies}
         />
      </div>
    );
  }
}

export default ProfileVideoPlayer

