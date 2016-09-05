import React, { Component } from 'react';
import { Link } from 'react-router';

import 'style/software.sass';

import iOSItems from 'projects/ios';
import BigItems from 'projects/big';
import SmallItems from 'projects/small';

export default class Software extends Component {
  renderItem(item) {
    return (
      <div key={item.name} className="item">
        <a href={item.link}>
          {item.img &&
            <img
              className={item.noBorder ? 'no-border' : item.app ? 'app' : null}
              src={require(`img/s/${item.img}`)}
            />
          }
          <h3>{item.name}</h3>
        </a>
        {item.description()}
        <p className="tech">
          {item.tech}
        </p>
        <div className="links">
          {Object.keys(item.links).map((link) =>
            <a key={link} href={item.links[link]}>{link}</a>
          )}
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="software">
        <div className="header">
          <h1>
            <Link to="/"><i className="fa fa-angle-left" /></Link>
            Software
            <div className="back-counterbalance" />
          </h1>
          <div>
            <i className="fa fa-github" />
            follow me on github!&nbsp;
            <a href="https://github.com/dingbat">@dingbat</a>
          </div>
        </div>
        <div className="content">
          <div className="col">
            <h2>iOS/macOS</h2>
            {iOSItems.map((item) =>
              this.renderItem(item)
            )}
          </div>
          <div className="col">
            <h2>bigger things</h2>
            {BigItems.map((item) =>
              this.renderItem(item)
            )}
          </div>
          <div className="col">
            <h2>smaller things</h2>
            {SmallItems.map((item) =>
              this.renderItem(item)
            )}
          </div>
        </div>
      </div>
    )
  }
}