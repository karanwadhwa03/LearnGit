import React, { Component } from "react";
import Child from "./Child";
import GlobalState from "./Context/GlobalState";

class App extends Component {
  render() {
    return (
      <GlobalState>
        <h1>BUTTON TASK WITH CONTEXT API CLASS</h1>
        <Child></Child>
      </GlobalState>
    );
  }
}
export default App;
