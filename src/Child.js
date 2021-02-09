import React, { Component } from "react";
import Buttons from "./Buttons";
import { DataContext } from "./Context/GlobalState";

export default class Child extends Component {
 // static contextType = DataContext;
  

  render() {
    return (
      <DataContext.Consumer>
        {
          (context)=>
        
      <div>
        <h1>{context.text}</h1>
        <Buttons clicked={context.clicked}></Buttons>
      </div>
  }
      </DataContext.Consumer>
    );
  }
}


