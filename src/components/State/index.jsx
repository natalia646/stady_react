import React, { Component } from "react";

export default class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false,
      name : "Natalia"
    };
   
    this.handelClick = this.handelClick.bind(this);
  }

  handelClick() {
    this.setState((state) => ({
      visibility: !state.visibility,
    }));
  }

  render() {
    if (this.state.visibility) {
      return (
        <div>
          <h1>{this.state.name}</h1>
          <button onClick={this.handelClick}>Click</button>
        </div>
      );
    } else {
      return (
        <div>
          <h1>I'm developer</h1>
          <button onClick={this.handelClick}>Click</button>
        </div>
      );
    }
  }
}
