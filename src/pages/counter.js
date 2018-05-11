import React from 'react';
import Link from 'gatsby-link';

export default class Counter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <p>current count: {this.state.count}</p>
        <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>plus</button>
        <button onClick={() => { this.setState({ count: this.state.count - 1 }) }}>minus</button>
        <br/>
        <div>
          <Link to="/">Home</Link>
        </div>
      </div>
    );
  }
}