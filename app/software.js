import React, { Component } from 'react';
import './style/software.sass';

export default class Software extends Component {
  renderItem(item) {
    return (
      <div key={item.name} className="item">
        <a href={item.link}>
          <img src={require(`../img/s/${item.img}`)} />
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
    const iosItems = []
    const bigItems = [
      {
        name: "skedge",
        img: "skedge.png",
        link: "http://www.skedgeur.com",
        links: {
          live: "http://skedgeur.com",
          source: "https://github.com/RocHack/skedge",
          thesis: "https://dropbox.com/s/dg0zic5376d7re4/thesis.pdf?raw=1",
        },
        tech: 'rails, postgres, react.js, facebook & google integration, latex',
        description: () =>
          <p>
            alternative to rochester's&nbsp;
            <a href="https://cdcs.ur.rochester.edu">course finder/scheduler system</a>.
          </p>
      },

      {
        name: "blackoutVR",
        img: "blackout.png",
        link: "http://www.sightunseen.audio",
        links: {
          teaser: "http://www.sightunseen.audio",
          fb: "https://www.facebook.com/blackoutvirtualreality",
          twitter: "https://twitter.com/sightunseengame",
        },
        tech: 'unity (C#), wwise',
        description: () =>
          <p>
            horror audio game coming soon
          </p>
      },

      
    ]
    const smallItems = []

    return (
      <div className="software">
        <div className="header">
          <h1>Software</h1>
          <div>
            <i className="fa fa-github" />
            follow me on github!&nbsp;
            <a href="https://github.com/dingbat">@dingbat</a>
          </div>
        </div>
        <div className="content">
          <div className="col">
            <h2>iOS/macOS</h2>
            {iosItems.map((item) =>
              this.renderItem(item)
            )}
          </div>
          <div className="col">
            <h2>bigger things</h2>
            {bigItems.map((item) =>
              this.renderItem(item)
            )}
          </div>
          <div className="col">
            <h2>smaller things</h2>
            {smallItems.map((item) =>
              this.renderItem(item)
            )}
          </div>
        </div>
      </div>
    )
  }
}