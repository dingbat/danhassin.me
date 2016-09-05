import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, hashHistory } from 'react-router';

import Index from './index.js';
import Software from './software.js';

import './style/main.sass';
import 'font-awesome-webpack';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const App = ({children, location}) => {
  const key = location.pathname.replace("/","")
  const transition = key.length === 0 ? "pop" : "push"
  return (~
    %div
      %ReactCSSTransitionGroup(
        transitionName={transition}
        transitionEnterTimeout={750}
        transitionLeaveTimeout={750}
      )
        .page.container(key={key})
          {children}
  ~)
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
