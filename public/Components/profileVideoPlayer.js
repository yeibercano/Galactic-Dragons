import React, {Component} from 'react'
import ProfileVideoList from './profileVideoList'
var secret = require("../../private.js")
var axios = require('axios');

//retrieve the videos from the user and display them 
// when clicked, they play in the ProfilePlayer

class ProfileVideoPlayer extends React.Component {

  constructor (props) {
    //Signifies what is coming from the super class?
    // console.log("For kicks: ", this.props.userInfo);
    // get request to db to retrieve the movie nodes and subsequent video url contained within
    // let urlServer = '';
    // axios.get("/movies", {params: {userName: this.props.userInfo.userName}})
    // .then(function(movieResponse){
    //   urlServer = movieResponse.data[movieResponse.data.length-1].m.properties.video
      
    //   // TODO: Get video url from movieResponse at very last index if it comes back in an array
    //   // remember to put the component back into profile once finished with TODO. Place array of movies into allMovies property
    // })
    super (props)  
    // console.log(this.props)
    this.state = {
      url: "",
      allMovies: ""
    }
   }
    componentWillMount() {
      // console.log('this.props.info', this.props.userInfo)
      axios.get("/movies", {params: {userName: this.props.userInfo.userName}}).then(data => {
        console.log('data', data)
        this.setState( { url: data.data[data.data.length-1].m.properties.video, allMovies: data.data } );
  
      });
    }



  render() {
    console.log('url inside render ', this.state.url)

    // console.log('allMovies inside render ', this.state.allMovies)
    return (
      <div>
        <h1>This is The Users Most Recent Upload</h1>
        <video controls src={this.state.url} type="video/mp4" />
         <ProfileVideoList moviesList = {this.state.allMovies}/>
         
        

      </div>
    );
  }
}

export default ProfileVideoPlayer

