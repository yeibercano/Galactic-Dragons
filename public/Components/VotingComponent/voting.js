import React, {Component} from 'react'
var axios = require('axios');

class VotingComponent extends React.Component {

  constructor (props) {
    super (props)  
    this.state = {
      allMovies: null
    }
   }

  componentWillMount() {
    axios.get("/movies").then(data => {
      // console.log("This is data.data inside of VotingComponent", data.data)
      this.setState({ allMovies: data.data });
    });
  }

  renderImage(movie){
    // console.log("This is movie inside of renderImage",movie);
    return (
        <section className="voting_image_container">
          <img id="voting_image" src={movie.image} />
          <h4>{movie.synopsis}</h4>
        </section>
      )
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
      <section>
        <h3>Movies To Be Voted On</h3>
        <section className="voting_container">
          {this.state.allMovies.map(movie => this.renderImage(movie.m.properties))}
        </section>
      </section>
    );
  }
}

export default VotingComponent

