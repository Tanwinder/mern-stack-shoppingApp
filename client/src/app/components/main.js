import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import ShoppingApp from '../containers/ShoppingApp/ShoppingApp';
import About from '../containers/About/About';
import './Main.scss';

const Main = () => (
    <div className="main">
        <Switch>
            <Route path="/about" name={About} component={About} />
            <Route path="/" name={ShoppingApp} component={ShoppingApp} />
            <Route name={About} component={About} />
            <Redirect to="/" />
        </Switch>
    </div>
)

export default Main;


