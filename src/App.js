import React from 'react';
import './index.scss';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)


  }
  increment() {
    this.setState({ count: this.state.count + 1 })
  }
  decrement() {
    this.setState({ count: this.state.count - 1 })
  }
  render() {
    return (
      <div className='App'>
        <div>
          <h2>Счетчик</h2>
          <h1>{this.state.count}</h1>
          <button className='plus' onClick={this.increment}>+</button>
          <button className='minus' onClick={this.decrement}>-</button>
        </div>
      </div>
    )
  }
}

export default App;
