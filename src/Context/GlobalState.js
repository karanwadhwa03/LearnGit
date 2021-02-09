import React, { useState } from 'react'
import {createContext} from 'react'
import ButtonArray from '../ButtonArray';

export const DataContext=createContext();
const GlobalState=(props)=>{
    const [text,settext]=useState("Hi PRESS ANY KEY");
    const Changetext=(data)=>{
        if(data===ButtonArray[3].name)
        settext("HI PRESS ANY KEY")
        else
        settext(`YOU CLIKCED ${data}`)
    }



    return (
        <DataContext.Provider value={{text,Changetext}}>
            {props.children}
        </DataContext.Provider>
    )

}
export default GlobalState

