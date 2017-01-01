import React from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import App from './components/App';
import About from './components/About';
import Gallery from './components/Gallery';

window.React = React;

render(
    (<Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="/about" component={About}/>
            <Route path="/gallery" component={Gallery}/>
        </Route>
    </Router>), document.getElementById('content')
);
