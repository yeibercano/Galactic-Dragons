import React from 'react';
import ReactStars from 'react-stars'
import { hashHistory } from 'react-router'
var axios = require('axios');
 
class Rating extends React.Component {
  constructor() {
      super();
      let movieSelected = localStorage.getItem('viewerMovie')
      movieSelected = JSON.parse(movieSelected);
      let user = localStorage.getItem('user')
      user = JSON.parse(user);

      this.state = {
          rating: 1, 
          title: movieSelected.title, 
          voter: user.userName
      };
      this.ratingChanged = this.ratingChanged.bind(this);
  }
  ratingChanged(vote) {
      this.setState({rating: vote}, function(){   
      axios.post('/movies/rating', { rating: this.state.rating, title: this.state.title, voter: this.state.voter });
      hashHistory.push("profile");

    });
    // axios.post('/movies/rating', { rating: this.state.rating, title: this.state.title, voter: this.state.voter })
    // .then(function(res){
    //   // console.log('res', res)
    // })

  }


  render() {
    const { rating } = this.state;
    return (                
      <section className="stars">
        <ReactStars
          count={5}
          onChange={vote=>this.ratingChanged(vote)}
          size={24} 
          color2={'#ffd700'} />
      </section>
    );
  }
}
export default Rating
