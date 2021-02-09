import React, { Component, PureComponent } from 'react'
import ButtonArray from './ButtonArray'
import Buttons from './Buttons'

export default class App extends Component {
  state={
    text:"HI PRESS ANY TEXT"
  }
  clickHandler=(name)=>{
    if(name===ButtonArray[3].name)
      this.setState({text:"HI PRESS ANY TEXT"});
    else
    this.setState({text:`YOU CLICKED ${name}`})
  }
  // TO STOP RERENDERING WHEN THE PREVIOS BUTTON IS CLICKED AGAIN AND AGAIN
  // PURE COMPONENT
  // OR USE SHOULCOMPONENTUPDATE
  shouldComponentUpdate(nextProps,nextState){
    if(nextState.text===this.state.text)
      return false
    return true
  }

  render() {
    console.log("YES")
    return (
      <div>
        <h1>BUTTON TASK WITH CLASS COMPONENT</h1>
        <h1>{this.state.text}</h1>
        <Buttons clicked={this.clickHandler}></Buttons>
      </div>
    )
  }
}
