import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import 'babel-polyfill';
import App from './app/App.js'

ReactDOM.render(
    // <Provider>
        <App />,
    // </Provider>,
    document.getElementById('app')
);