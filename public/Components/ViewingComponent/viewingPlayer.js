import React, {Component} from 'react'
var secret = require("../../../private.js")
var axios = require('axios');

//retrieve the videos from the user and display them 
// when clicked, they play in the ProfilePlayer

class ViewingPlayer extends React.Component {

  constructor (props) {

    super (props)  
    // console.log(this.props)

   }


  render() {
    return (
      <div>
        <h1>This is Where You Watch Movies</h1>
      </div>
    );
  }
}

export default ViewingPlayer

