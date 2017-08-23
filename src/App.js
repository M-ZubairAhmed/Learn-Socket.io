import React, { Component } from 'react';
import { subscribeToTimer } from './api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timestamp: 'no time yet'
    };
    subscribeToTimer((err, timestamp) => this.setState({ timestamp }));
  }
  render() {
    return (
      <div>
        {this.state.timestamp}
      </div>
    );
  }
}

export default App;
