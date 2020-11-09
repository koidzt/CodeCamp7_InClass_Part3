import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
  }
  render() {

    return (
      <div className="App">
        <h1 style={{fontSize:"7em"}}>{this.state.count}</h1>
        <button
          onClick={() => { this.setState({ count: this.state.count + 1 }) }}
          style={{fontSize:"1.5em", width:"10%", margin:"1ex"}}
        >
          UP
        </button>
        <button
          onClick={() => { this.setState({ count: this.state.count - 1 }) }}
          disabled={this.state.count === 0}
          style={{fontSize:"1.5em", width:"10%", margin:"1ex"}}
        >
          DOWN
        </button>
        <button
          onClick={() => { this.setState({ count: 0 }) }}
          style={{fontSize:"1.5em", width:"10%", margin:"1ex"}}
        >
          RESET
        </button>
      </div>
    );
  }
}

export default Counter;
