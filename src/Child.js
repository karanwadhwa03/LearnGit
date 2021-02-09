import React, { useContext } from 'react'
import ButtonArray from './ButtonArray';
import Buttons from './Buttons';
import {DataContext} from './Context/GlobalState'
const Child=()=>{
    const {text,Changetext}=useContext(DataContext);
   // console.log(data)
    // const clickHandler=(data)=>{
    //     if(data===ButtonArray[3].name)
    //     settext("HI PRESS ANY KEY");
    //     else
    //     settext(`YOU CLICKED ${data}`)
        
    // }

    
    return(
        <div>
        <h1>{text}</h1>
        <Buttons clicked={Changetext}></Buttons>
        </div>
    )
}

export default Child