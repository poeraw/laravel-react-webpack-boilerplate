import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './combiner.js'
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import thunk from 'redux-thunk';

const client = axios.create({
  baseURL: 'http://marketplace.local/api',
  responseType: 'json'    
});

const defaultState = {
    example : {
        text : "Hello World"
    }
};

const store = createStore(reducers, defaultState, compose(applyMiddleware(
    thunk, axiosMiddleware(client)
    ), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

export default store;