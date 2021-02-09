import React from 'react'
import {createStore} from 'redux'
import ButtonReducer from "./../Reducers/Reducer";
const Store=createStore(ButtonReducer)
export default Store