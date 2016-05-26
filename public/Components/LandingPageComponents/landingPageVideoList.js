import React, {Component} from 'react'
var secret = require("../../../private.js")
var axios = require('axios');

//retrieve the videos from the user and display them 
// when clicked, they play in the ProfilePlayer

class LandingPageVideoList extends Component {
  constructor(props){
    super(props)
    // let movies = this.props
    // console.log("This is movies inside ProfileVideoList: ", movies);
  }

    render() {
    return (
      <div>
        <h1>This is Where the List of Users Videos Will Be</h1>
      </div>
    );
  }

}

export default LandingPageVideoList

 
          // {this.props.moviesList ? this.props.moviesList.map(function(movie) {
          //   return (
          //   <div>
          //     {movie.m.properties.title}
          //   </div>
          //   )  
          // }) :null}