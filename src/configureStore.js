import {createStore, applyMiddleware} from 'redux'


import thunk from 'redux-thunk';
import combineReducers from './reducers/index'

 


 
const store = createStore(combineReducers,applyMiddleware(thunk))

export default store;


//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()