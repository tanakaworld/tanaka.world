import React from 'react';
import {Link} from 'react-router';
import {version} from '../../package.json';

const App = ({children}) => (
    <div>
        <header>
            <h1>TANAKA WORLD</h1>
            <Link to="/about">About</Link>
            <Link to="/poweredby">Powered by</Link>
            <Link to="/gallery">Gallery</Link>
        </header>
        <section>
            {children || 'Welcome to React Starterify'}
        </section>
    </div>
);

App.propTypes = {children: React.PropTypes.object};

export default App;
