import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, hashHistory } from 'react-router';

import Index from './index.js';
import Software from './software.js';

import './style/main.sass';
import 'font-awesome-webpack';

import { RouteTransition, presets } from 'react-router-transition';

export default class App extends Component {
  render() {
    return (
      <div>
        <RouteTransition
          pathname={this.props.location.pathname}
          {...presets.pop}
        >
          {this.props.children}
        </RouteTransition>
      </div>
    )
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
