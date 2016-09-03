import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

import Index from './index.js';
import Software from './software.js';

import './main.sass';

export default class App extends Component {
  render() {
    return this.props.children;
  }
}

const routes = {
  path: '/',
  component: App,
  indexRoute: { component: Index },
  childRoutes: [
    { path: 'software*', component: Software },
  ]
}

ReactDOM.render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('root')
);
