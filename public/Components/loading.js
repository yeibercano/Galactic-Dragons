import React, {Component} from 'react';
import Loading from 'react-loading';



class Load extends Component{

  render() {
    return (
        <Loading type='spinningBubbles' color='white' height='800' width='800' />
      )
  }
} 

export default Load