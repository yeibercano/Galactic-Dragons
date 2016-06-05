import React, { Component } from 'react'
import { hashHistory } from 'react-router'

//this component is for the Logo/Brand
class Brand extends Component {
 
  render() {
    return (
      <nav className="brand"> 
        <h1 onClick={ ()=> hashHistory.push('home')}>Sovereign</h1>
      </nav>
    )
  }
}

export default Brand