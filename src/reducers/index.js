import { combineReducers } from 'redux'
import AnimationReducer from './AnimationReducer'
import NavReducer from './NavReducer'
const rootReducer = combineReducers({
    AnimationReducer,
    NavReducer
})

export default (state, action) => {

    return rootReducer(state, action);
}
