import React, { Component } from 'react'
import 'isomorphic-fetch'


class Test extends Component {

  constructor (props) {
  super(props);
  this.state = { file: 'puppies' };
  this._handleSubmit = this._handleSubmit.bind(this)
  }


  _handleSubmit(e) {
  e.preventDefault();
  let file = this.state.file;
  // TODO: do something with -> this.state.file
  // console.log('this is props inside handlesubmit:', this.props);
  console.log('inside handlesubmit with the new state:', file);

  fetch('/test', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({file})
  }, console.log('this is inside fetch post:', file))
  // .then(response =>{ console.log('this is response.json:', response.json()), response.json()})
  //   .then(json => console.log('this is the undefined we were looking at earlier:', json))

  // fetch('/test')
  //   .then(response =>{console.log('this is response:', response), console.log('this is response.json:', response.json()), response.json()})
  //   .then(json => console.log('this is the undefined we were looking at earlier:', json))
  }

  render() {
    return (

       <div>
          <form > 
            <input
            type="file"
            value= {this.state.file}
            onChange={event => this.setState({ file: event.target.value })} />
            <input type="submit" onClick={this._handleSubmit} value="POST"/>
          </form>
      </div>
 
    )
  }
}

export default Test