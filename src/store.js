import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import userReducer from './reducers/userReducers.js';

const rootReducer = combineReducers({
    // here you can add more reducers as your app scales
    user: userReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
