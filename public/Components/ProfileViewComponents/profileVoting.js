import React, {Component} from 'react'
import { hashHistory } from 'react-router'
var axios = require('axios');

class VotingComponent extends React.Component {

  constructor (props) {
    super (props)  
    this.state = {
      allMovies: null
    }
   }

  componentWillMount() {
    axios.get("/movies/profile").then(data => {
      this.setState({ allMovies: data.data });
    });
  }
  onClickHandler (e, movie){
    e.preventDefault();
    localStorage.setItem('viewerMovie', JSON.stringify(movie));
    hashHistory.push("vote");
  }

  renderImage(movie){
    console.log("This is movie", movie);
    let currentUser = JSON.parse(localStorage.getItem('user'));
    currentUser = currentUser.userName;

    if(currentUser !== movie.userName){
      // console.log("This is currentUser:::::" + currentUser + "This is movie.userName:::::::::" + movie.userName )

      // if(!movie.voters.includes(currentUser)){
        return (
            <section className="voting_image_container">
              <img id="voting_image" src={movie.image} onClick={e => this.onClickHandler(e, movie)}/>
              <section className="voting_information">
              <h3>{movie.title}</h3>
              <h4>{movie.synopsis}</h4>
              </section>
            </section>
          )
      // }
    }

    
  }

  selectedMovie (movie) {
    // console.log('A new movie was selected!', movie.video);
    this.setState({url: movie.video})
  }

  render() {

    if (this.state.allMovies === null) {
      return <div>Loading...</div>
    }



    return (
      <section className="voting_container">
        <section>
          {this.state.allMovies.map(movie => this.renderImage(movie.m.properties))}
        </section>
      </section>
    );
  }
}

export default VotingComponent
