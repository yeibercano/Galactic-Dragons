import React, { Component } from 'react'

class Test extends Component {
  render() {
    return (
      <div>
      <form action="#">
        <input type="file"></input>
        <input type="submit" onClick={console.log('yes')}></input>
       </form> 
      </div>
    )
  }
}

export default Test