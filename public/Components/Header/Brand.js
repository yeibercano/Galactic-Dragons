import React, { Component } from 'react'
import { hashHistory } from 'react-router'

//this component is for the Logo/Brand
class Brand extends Component {
 
  render() {
    return (
      <nav className="brand"> 
        <h1 onClick={ ()=> hashHistory.push('home')}>Sovereign
        </h1>
        <div className="dropdown menu"> 
          <button className="dropbtn dropdown menu">
            categories
          </button>
          <div className="dropdown-content">
            <a href="#search">comedy</a>
            <a href="#search">action</a>
            <a href="#search">children</a>
          </div>
       </div>
      </nav>
    )
  }
}

export default Brand