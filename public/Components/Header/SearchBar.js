import React, { Component } from 'react';
import axios from 'axios';

//this component is for the Logo/Brand
class SearchBar extends Component {

  searchTerm (e) {
    let searchedItem = e;
    console.log(searchedItem)
    // this._submitSearch = _submitSearch.bind(this);
    // localStorage.setItem('movieSearched', JSON.stringify(searchedItem));
    localStorage.setItem('searchTerm', searchedItem);
  }

  submitSearch () {
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
      <aside class="searchBar"> 
        <form>
          <input onChange={event => this.searchTerm(event.target.value)} />
          <button 
            onClick= {this.submitSearch}
            type="submit"
            className="search_button"
            >Search</button>
        </form>
      </aside>
    )
  }
}

export default SearchBar