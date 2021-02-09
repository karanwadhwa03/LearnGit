import React, { Component } from "react";
import Buttons from "./Buttons";
import { DataContext } from "./Context/GlobalState";

export default class Child extends Component {
  static contextType = DataContext;
  

  render() {
    return (
      <div>
        <h1>{this.context.text}</h1>
        <Buttons clicked={this.context.clicked}></Buttons>
      </div>
    );
  }
}
