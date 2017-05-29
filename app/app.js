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
import Photos from 'photos';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  renderFooter() {
    return (~
      .footer
        .separator ~

        .links
          {!this.state.showEmail && (~
            %a.angle-link.contact(onClick={() => this.setState({showEmail: true})}) contact
          ~)}

          {this.state.showEmail && (~
            %span.contact#email
              %span.color-ish danhassin
              %span.color-light at
              %span.color-ish mac
              %span.color-light dot
              %span.color-ish com
          ~)}

          %span.link-separator> |

          %a.angle-link.source(href="https://github.com/dingbat/danhassin.me" target="_blank") source
    ~)
  }

  render() {
    const key = this.props.location.pathname.replace("/","")
    const transition = key === '' ? "pop" : "push"
    return (~
      %div
        %ReactCSSTransitionGroup(
          transitionName={transition}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        )
          .page.container(key={key})
            {this.props.children}
            {this.renderFooter()}
    ~)
  }
}

const routes = {
  path: '/',
  component: App,
  indexRoute: { component: Home },
  childRoutes: [
    { path: 'software', component: Software },
    { path: 'music', component: Music },
    { path: 'writing', component: Writing },
    { path: 'photos', component: Photos },
  ]
}

function handleUpdate() {
  const { action } = this.state.location;

  if (action === "PUSH") {
    window.scrollTo(0, 0);
  }
}

ReactDOM.render(
  <Router
    history={__DEV__ ? hashHistory : browserHistory}
    onUpdate={handleUpdate}
    routes={routes}
  />,
  document.getElementById('root')
);
