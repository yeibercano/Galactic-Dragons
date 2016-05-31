import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
 
class Rating extends React.Component {
  constructor() {
      super();

      this.state = {
          rating: 1
      };
  }

  onStarClick(name, value) {
      this.setState({rating: value});
  }

  render() {
    const { rating } = this.state;
    return (                
      <div>
        <h2>Rating from state: {rating}</h2>
        <StarRatingComponent 
            name="rate1" 
            starCount={10}
            value={rating}
            onStarClick={this.onStarClick.bind(this)} />
      </div>
    );
  }
}

export default Rating