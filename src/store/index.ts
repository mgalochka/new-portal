import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import newsReducer from './news/reducers';

const rootReducer = combineReducers({newsReducer})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;