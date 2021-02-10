import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import ButtonArray from './ButtonArray'
import Buttons from './Buttons'

export default function App() {
  const text=useSelector(state=>{console.log(state)
    return state.text} )
  const dispatch = useDispatch();
  const clickHandler=(data)=>{
    if(data===ButtonArray[3].name)
    return dispatch({type:"RESET",payload:`${data}`})
    return dispatch({type:"CHANGETEXT",payload:`${data}`})
  }
  


  return (
    <div>
      <h1>BUTTON TASK WITH REDUX HOOKS</h1>
      <h1>{text}</h1>
      <Buttons clicked={clickHandler} ></Buttons>
    </div>
  )
}
