import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import 'normalize.css/normalize.css';
import 'pokemon-font/css/pokemon-font.css';
import '../styles/index.sass';

import Home from './Home';
import About from './About';
import Gallery from './Gallery';

const routes = [
  {
    path: '/',
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <Home/>,
  },
  {
    path: '/about',
    sidebar: () => <div>about!</div>,
    main: () => <About/>,
  },
  {
    path: '/gallery',
    sidebar: () => <div>gallery!</div>,
    main: () => <Gallery/>,
  },
];

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <header>
            <h1 id="title">
              <Link to="/">TANAKA WORLD</Link>
            </h1>
            <nav id="nav">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
              </ul>
            </nav>
          </header>
          <section>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
          </section>
        </div>
      </Router>
    );
  }
}
