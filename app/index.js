import React, { Component } from 'react';
import './style/index.sass';
import imgMe from '../img/me.jpg';

import { Router, Route, Link } from 'react-router'

export default class Index extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div className="index">
        <div className="header">
          <h1>Dan Hassin</h1>
          <img src={imgMe} />
        </div>

        <div className="content">
          <div className="menu">
            <div className="item">
              <Link to="software">software</Link>
            </div>
            &nbsp;|&nbsp;
            <div className="item">
              <Link to="music">music</Link>
            </div>
            &nbsp;|&nbsp;
            <div className="item">
              <Link to="writing">writing</Link>
            </div>
          </div>
          <div className="about">
            <p>
              hi, oh uh, hi, i haven't decided what to write here yet.
              anyway, thanks for visiting! -dan
            </p>
          </div>
        </div>

        <div className="footer">
          <div className="separator">~</div>

          {!this.state.showEmail && 
            <a className="show" onClick={() => this.setState({showEmail: true})}>
              contact
            </a>
          }
          
          {this.state.showEmail && 
            <span id="email">
              <span className="color-ish">danhassin</span>
              <span className="color-light">at</span>
              <span className="color-ish">mac</span>
              <span className="color-light">dot</span>
              <span className="color-ish">com</span>
            </span>
          }

          <span className="color-light">&nbsp;|&nbsp;</span>

          <a href="stuff/hassin-resume.pdf" target="_blank" className="color-ish">resume</a>
        </div>
      </div>
    );
  }
}
