

import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { AppHeader } from './cmps/AppHeader/AppHeader';
import { RestDetails } from './pages/RestDetails/RestDetails';
import Scroll from './cmps/Scroll/Scroll';
import { Cart } from './cmps/Cart/Cart';
import { useState } from 'react';




export function App() {
    
    return (
        <div className="App">
            <Router>
                <AppHeader />
                <Scroll />
                <Switch>
                    <Route path="/restaurant/:id" render={props => <RestDetails {...props} />}></Route>
                    <Route path="/" component={HomePage}></Route>
                </Switch>
            </Router>
        </div>
    );
}



// <Route path="/cart" component={Cart}></Route>


