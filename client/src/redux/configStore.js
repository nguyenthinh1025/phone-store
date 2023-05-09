import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import reduxThunk from 'redux-thunk';
import { brandReducer } from './reducer/brandReducer';
import { phoneReducer } from './reducer/phoneReducer';
import { orderReducer } from './reducer/orderReducer';
import { authReducer } from './reducer/authReducer';



const rootReducer = combineReducers({
    brandReducer,
    phoneReducer,
    orderReducer,
    authReducer,
})

let middleWare = applyMiddleware(reduxThunk);
let composeCustom = compose(middleWare, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const store = createStore(rootReducer, composeCustom);