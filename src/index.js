/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import 'babel-polyfill';
import App from './app/App';

ReactDOM.render(<App />, document.getElementById('app'));
