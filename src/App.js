import React, { Component } from "react";
import { connect } from "react-redux";
import Buttons from "./Buttons";
import * as Variable from "./Variable/Variable";

//STRUCTURE WILL BE CLEAN IF WRITE REDUCER AND STORE IN INDEX.JS
//VIEW 7.1 AND 7 TASK

class App extends Component {
  clickHandler = (data) => {
    if (data === Variable.RESET) {
      console.log(data);
      return this.props.dispatch({ type: Variable.RESET, payload: data });
    } else {
      console.log(data);
      return this.props.dispatch({ type: Variable.CHANGETEXT, payload: data });
    }
  };

  render() {
    return (
      <div>

        <h1>BUTTON TASK WITH REDUX CLASS</h1>
        <h1>{this.props.text}</h1>
        <Buttons clicked={this.clickHandler}></Buttons>
        <p>Just try demo</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    text: state.text,
  };
};
const mapDispatchToProps = (dispatch) => {
  return dispatch;
};
export default connect(mapStateToProps, null)(App);
