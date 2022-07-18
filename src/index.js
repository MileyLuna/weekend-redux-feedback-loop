import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const survey = (state = [], action) => {
    switch (action.type) {
        case 'GET_SURVEYS':
            console.log(`feelings rating is: ${action.payload}`);
            return [...state, action.payload];
        default:
            return state;
    }
};

const feeling = (state = [], action) => {
    switch (action.type) {
        case 'ADD_FEELING':
            return action.payload;
        case 'CLEAR':
            return [];
        default:
            return state;
    }

};

const understanding = (state = [], action) => {
    switch (action.type) {
        case 'ADD_UNDERSTANDING':
            return action.payload;
        case 'CLEAR':
            return [];
        default:
            return state;
    }

};
const support = (state = [], action) => {
    switch (action.type) {
        case 'ADD_SUPPORT':
            return action.payload;
        case 'CLEAR':
            return [];
        default:
            return state;
    }

};

const comments = (state = [], action) => {
    switch (action.type) {
        case 'ADD_COMMENTS':
            return action.payload;
        case 'CLEAR':
            return [];
        default:
            return state;
    }

};




const storeInstance = createStore(
    combineReducers({
        survey,
        feeling,
        understanding,
        support,
        comments
    }),
    applyMiddleware(logger)
);


ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
