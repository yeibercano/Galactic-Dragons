import React from 'react';
import ReactStars from 'react-stars'
 
class Rating extends React.Component {
  constructor() {
      super();
      this.state = {
          rating: 1
      };
  }
  ratingChanged(name, value) {
      this.setState({rating: value});
  }
  render() {
    const { rating } = this.state;
    return (                
      <div>
        <h2>Rating from state: {rating}</h2>
        <ReactStars
          count={5}
          onChange={this.ratingChanged}
          size={24}
          color2={'#ffd700'} />
      </div>
    );
  }
}
export default Rating
