/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import 'babel-polyfill';
import App from './app/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById('app')
);
