import React from 'react';
import {Link} from 'react-router';
import {version} from '../../package.json';
import Home from './Home';

const App = ({children}) => (
    <div>
        <header>
            <h1>
                <Link to="/">TANAKA WORLD</Link>
            </h1>
            <Link to="/about">About</Link>
            <Link to="/gallery">Gallery</Link>
        </header>
        <section>
            {children || <Home/>}
        </section>
    </div>
);

App.propTypes = {children: React.PropTypes.object};

export default App;
