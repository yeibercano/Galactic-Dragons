import React, { Component } from 'react'
import { render } from 'react-dom'
import Test from './public/Components/test'

class HelloWorld extends Component {
  render() {
    return (
      <div>Hello World!
        <Test />
      </div>

    )
  }
}

render(<HelloWorld/>, document.getElementById('app'))