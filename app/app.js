import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, hashHistory } from 'react-router';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import 'style/main.sass';
import 'style/animation.sass';
import 'font-awesome-webpack';

import Home from 'home';
import Software from 'software';
import Music from 'music';
import Writing from 'writing';

const App = ({children, location}) => {
  const key = location.pathname.replace("/","")
  const transition = key === '' ? "pop" : "push"
  return (~
    %div
      %ReactCSSTransitionGroup(
        transitionName={transition}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
      )
        .page.container(key={key})
          {children}
  ~)
}

const routes = {
  path: '/',
  component: App,
  indexRoute: { component: Home },
  childRoutes: [
    { path: 'software', component: Software },
    { path: 'music', component: Music },
    { path: 'writing', component: Writing },
  ]
}

ReactDOM.render(
  <Router history={__DEV__ ? hashHistory : browserHistory} routes={routes} />,
  document.getElementById('root')
);
