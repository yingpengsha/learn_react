import React from "react";
import ReactDOM from "react-dom";
import { sum } from "./utils";
export default class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      counter: 0,
      a: 1,
      b: 1,
    };
  }
  render() {
    return (
      <div>
        <h2>hello react</h2>
        <h2>{this.state.counter}</h2>
        <h2>{sum(this.state.a, this.state.b)}</h2>
      </div>
    );
  }
}
