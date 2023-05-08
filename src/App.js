import React from "react";
import Food from "./Food";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    count: 0,
  };
  add = () => {
    // let count = ++this.state.count;
    // this.setState({
    //   ...this.state,
    //   count,
    // });
    this.setState((current) => ({
      count: current.count + 1,
    }));
  };
  minus = () => {
    this.setState((current) => ({
      count: current.count + 1,
    }));
  };
  render() {
    return (
      <div>
        <h1>Привет {this.state.count}</h1>
        <button onClick={this.add}>Plus</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}
export default App;
