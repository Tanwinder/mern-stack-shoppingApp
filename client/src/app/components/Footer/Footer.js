import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.scss';

const Footer = () => (
    <div className="footer">
        <NavLink to="/">Home</NavLink>
        <div><small>Sidhu</small></div>
        <NavLink to="/about">about</NavLink>
    </div>
);

export default Footer;
