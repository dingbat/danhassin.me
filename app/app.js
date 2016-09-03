import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, hashHistory } from 'react-router';

import Index from './index.js';
import Software from './software.js';

import './style/main.sass';
import 'font-awesome-webpack';

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
    { path: 'software', component: Software },
  ]
}

ReactDOM.render(
  <Router history={__DEV__ ? hashHistory : browserHistory} routes={routes} />,
  document.getElementById('root')
);
