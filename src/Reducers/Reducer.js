import ButtonArray from './../ButtonArray'
import * as Variable from '../Variable/Variable'
const ButtonReducer=(state={text:"HI PRESSS ANY KEY"},action)=>{
    switch(action.type){
        
        case Variable.RESET:
            return{
            ...state,
            text:"HI PRESS ANY KEY"
            }
        case Variable.CHANGETEXT:
            console.log(action.payload)
            return{
                ...state,
                text:`YOU CLICKED ${action.payload}`
                }
        default:
           
            return state
    }
}
export default ButtonReducer