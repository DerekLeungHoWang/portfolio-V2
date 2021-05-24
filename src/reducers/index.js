import { combineReducers } from 'redux'
 import AnimationReducer from './AnimationReducer'

const  rootReducer = combineReducers({
    AnimationReducer
})

export default (state, action) =>{
    
    return rootReducer( state, action);
}
  