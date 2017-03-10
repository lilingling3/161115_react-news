import React, {Component} from 'react'

class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
        <div>footer...</div>
      </div>
    )
  }
}

export default App