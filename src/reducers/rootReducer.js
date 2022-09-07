import { combineReducers } from 'redux'
import { anotherComponentReducer } from './anotherComponentReducer'
import { messageReducer } from './messageReducer'

export  const rootReducer = combineReducers({ message: messageReducer, another: anotherComponentReducer })