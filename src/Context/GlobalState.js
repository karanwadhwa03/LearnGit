import React, { Component } from "react";
import { createContext } from "react";
import ButtonArray from "../ButtonArray";

export const DataContext = createContext();
const DataProvider = DataContext.Provider;

class GlobalState extends Component {
  state = {
    text: "PRESS ANY KEY",
  };
  clicked = (data) => {
      if(data===ButtonArray[3].name)
        this.setState({text:"PRESS ANY KEY"})
      else
        this.setState({text:`YOU CLICKED ${data}`})
  };

  render() {
    return (
      <DataProvider value={{ text: this.state.text,clicked:this.clicked }}>
        {this.props.children}
      </DataProvider>
    );
  }
}
export default GlobalState;
