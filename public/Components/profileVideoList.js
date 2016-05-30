import React, {Component} from 'react'
var secret = require("../../private.js")
var axios = require('axios');

//retrieve the videos from the user and display them 
// when clicked, they play in the ProfilePlayer

class ProfileVideoList extends Component {
  constructor(props){
    super(props)
    // let movies = this.props
    // console.log("This is movies inside ProfileVideoList: ", movies);
    console.log('inside ProvieVideoList - props:', props)
  }

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
      console.log('inside render:', this.props.selectedMovie);
      console.log('this.moviesList is: ', this.props.moviesList);

    return (
      <div>
        <h1>This is Where the List of Users Videos Will Be</h1>
          {this.props.moviesList.map(movie => this.videoInfo(movie.m.properties))}
      </div>
    );
  }

}

export default ProfileVideoList

// const ProfileVideoList = (props) => {

//   console.log('this is props:', props)
//   if (props.moviesList === '') {
//     return <div>Loading...</div>
//   }

//   const videoItems = props.moviesList.map((movie) => {
//     return (
//       <div 
//         onClick={this.props.selectedMovie}>
//         {movie.m.properties.title}
//       </div>
//     );
//   })

//   return (
//       <div>
//         <h1>This is Where the List of Users Videos Will Be</h1>

//       </div>
//     );
// };

  //  render() {
  //   let movieNode = this.props.moviesList.map(function(movie) {
  //     return (
  //       <div>
  //         {movie.m.properties.title}
  //       </div>
  //     )  
  //   })
  //   return (
  //     <div>
  //       <h1>This is Where the List of Users Videos Will Be</h1>
  //       {movieNode}
  //     </div>
  //   );
  // }