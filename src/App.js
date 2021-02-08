import React,{useState} from 'react'
import ButtonArray from './ButtonArray';
import Buttons from './Buttons';

export default function App() {
  const [text,settext] = useState("HI PRESS BUTTON");
  const clickedHandler=(name)=>{
    if(name===ButtonArray[3].name){
      settext("HI PRESS BUTTON");
    }
    else
      settext(`YOU CLICkED ${name}`)
  }
  
  return (
    <div>
      <h1>{text} </h1>
      <Buttons clicked={clickedHandler}></Buttons>
    </div>
  )
}
