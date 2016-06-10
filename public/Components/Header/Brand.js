import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import axios from 'axios';


//this component is for the Logo/Brand
class Brand extends Component {

  selectedItem(item) {
    axios.get('/movies/search', {params: {target: item.target.value}})
    .then(data => {
        localStorage.setItem('searchResults', JSON.stringify(data.data));
      })
    .then(function() {
    hashHistory.push('/search');
    })
    .catch(function(err) {
      if (err) throw err
    })
  }
 
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
            <a value="action" onClick={(value)=> this.selectedItem(value)}>action</a>
            <a value="adventure" onClick={(value)=> this.selectedItem(value)}>adventure</a>
            <a value="children" onClick={(value)=> this.selectedItem(value)}>children</a>
            <a value="comedy" onClick={(value)=> this.selectedItem(value)}>comedy</a>
            <a value="dark humor" onClick={(value)=> this.selectedItem(value)}>dark humor</a>
            <a value="drama" onClick={(value)=> this.selectedItem(value)}>drama</a>
            <a value="fantasy" onClick={(value)=> this.selectedItem(value)}>fantasy</a>
            <a value="sports" onClick={(value)=> this.selectedItem(value)}>sports</a>
            <a value="suspense" onClick={(value)=> this.selectedItem(value)}>suspense</a>
          </div>
       </div>
      </nav>
    )
  }
}

export default Brand

