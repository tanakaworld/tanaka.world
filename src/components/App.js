import React from 'react';
import {Link} from 'react-router';
import {version} from '../../package.json';
import Home from './Home';

const App = ({children}) => (
    <div>
        <header>
            <h1 id="title">
                <Link to="/">TANAKA WORLD</Link>
            </h1>
            <nav id="nav">
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                </ul>
            </nav>
        </header>
        <section>
            {children || <Home/>}
        </section>
    </div>
);

App.propTypes = {children: React.PropTypes.object};

export default App;
