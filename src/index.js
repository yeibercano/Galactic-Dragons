import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FirstComponent from './components/first_component'

class App extends Component {

  render() {
    return (
      <div>
        This is only the beginning!
        <FirstComponent />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));