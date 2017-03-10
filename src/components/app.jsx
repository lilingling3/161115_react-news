import React, {Component} from 'react'
import NewsHeader from './news_header'

class App extends Component {
  render() {
    return (
      <div>
        <NewsHeader />
        {this.props.children}
        <div>footer...</div>
      </div>
    )
  }
}

export default App