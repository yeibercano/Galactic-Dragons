import React, { Component } from 'react';
import axios from 'axios';
import {hashHistory} from 'react-router';

//this component is for the Logo/Brand
class SearchBar extends Component {

  searchTerm (e) {
    let searchedItem = e;
    localStorage.setItem('searchTerm', searchedItem);
  }

  submitSearch (e) {
     if (e.charCode == 13) {
        alert('Enter... (KeyPress, use charCode)');
    }
    e.preventDefault();
    let searchedItem = localStorage.getItem('searchTerm');
    axios.get('/movies/search', {params: {target: searchedItem}})
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

      <aside className="searchBar"> 
        <div>
          <input className="inputSearch" onKeyDown={event => this.searchTerm(event.target.value)} onChange={event => this.searchTerm(event.target.value)} />
          <button 
            onClick= {this.submitSearch}
            type="submit"
            className="search_button">
            <img id="search_button_img" src="../../style/assets/search-icon-hi.png" />
            </button>
        </div>  
      </aside>
    )
  }
}

export default SearchBar