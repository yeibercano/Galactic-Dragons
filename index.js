import React, { Component } from 'react'
import { render } from 'react-dom'
import Test from './public/Components/test'
import CreateAccountScreen from './public/Components/register'

class HelloWorld extends Component {
  render() {
    return (
      <div>Hello World!
        <Test/>
        <CreateAccountScreen />
      </div>

    )
  }
}

render(<HelloWorld/>, document.getElementById('app'))