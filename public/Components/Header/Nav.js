import React, { Component } from 'react'

//this component is for the Logo/Brand
class Nav extends Component {

  selectedOption(value) {
    console.log('this was selected:', value);
  }
 
  render() {
    return (
      <div className="dropdown menu"> 
        <button className="dropbtn">Categories</button>
          <div className="dropdown-content">
            <option value="comedy" onSelect={this.selectedOption(value)}>comedy</option>
            <option value="action">action</option>
            <option value="children">children</option>
          </div>
      </div>
    )
  }
}

export default Nav