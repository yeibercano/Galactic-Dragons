import React, { Component } from 'react'

//this component is for the Logo/Brand
class Nav extends Component {
 
  render() {
    return (
      <div className="dropdown menu"> 
        <a href="#/home"> home </a>
        <button className="dropbtn">Categories</button>
          <div className="dropdown-content">
            <a href="#search">comedy</a>
            <a href="#search">action</a>
            <a href="#search">children</a>
          </div>
      </div>
    )
  }
}

export default Nav