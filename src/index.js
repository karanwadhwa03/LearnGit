import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux'
import {Provider} from 'react-redux'


//Reducer
const ButtonReducer=(state={text:'HI PRESS ANY TEXT'},action)=>{
  switch(action.type){
    case "RESET":
      return {
        ...state,text:'HI PRESS ANY TEXT'
      }
    case "CHANGETEXT":
      return{
        ...state,text:`You Clicked ${action.payload}`
      }
    default:
      return state
  }
}

const Store=createStore(ButtonReducer);




ReactDOM.render(
  <Provider store={Store}>
    <App />
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
