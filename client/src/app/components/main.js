import React from 'react';
import {Switch, Route} from 'react-router-dom';
import ShoppingApp from '../containers/ShoppingApp/ShoppingApp';

const Main = () => (
    <div>
        <Switch>
            <Route path="/" name={ShoppingApp} component={ShoppingApp} />
        </Switch>
    </div>
)

export default Main;


