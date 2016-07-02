import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import axios from 'axios';


//this component is for the Logo/Brand
class Brand extends Component {

  selectedItem(item) {
    axios.get('/movies/categories', {params: {target: item.target.value}})
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
            <a value="comedy" onClick={(value)=> this.selectedItem(value)}>comedy</a>
            <a value="drama" onClick={(value)=> this.selectedItem(value)}>drama</a>
            <a value="dark humor" onClick={(value)=> this.selectedItem(value)}>dark humor</a>
          </div>
       </div>
      </nav>
    )
  }
}

export default Brand

