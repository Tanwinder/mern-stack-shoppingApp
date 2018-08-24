/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import 'babel-polyfill';
import App from './app/App';
import NavBar from './app/components/Navbar/NavBar';
import Footer from './app/components/Footer/Footer';

const RootApp = () => (
    <div>
        <NavBar />
        <App />
        <Footer />
    </div>
);

ReactDOM.render(<RootApp />, document.getElementById('app'));
