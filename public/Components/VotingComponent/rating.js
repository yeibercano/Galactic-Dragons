import React from 'react';
import ReactStars from 'react-stars'
 
class Rating extends React.Component {
  constructor() {
      super();
      this.state = {
          rating: 1
      };
      this.ratingChanged = this.ratingChanged.bind(this);
  }
  ratingChanged(vote) {
      this.setState({rating: vote}, function(){  
      alert("This will be your only opportunity to vote");
      console.log("What is this.state.rating", this.state.rating);
      
    });

  }
  render() {
    const { rating } = this.state;
    return (                
      <div>
        <h2>Rating from state: {rating}</h2>
        <ReactStars
          count={5}
          onChange={vote=>this.ratingChanged(vote)}
          size={24} 
          color2={'#ffd700'} />
      </div>
    );
  }
}
export default Rating
