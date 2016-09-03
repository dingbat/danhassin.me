import React, { Component } from 'react';
import './style/software.sass';

import { Link } from 'react-router'

const iosItems = []
const BigItems = [
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

  {
    name: "quicktrainer",
    img: "qt.jpg",
    links: {
      'news – WXXI Rochester': "http://innovationtrail.org/post/upstate-researchers-tackle-toilet-training-autistic-children",
    },
    tech: 'cocoatouch (objective-C), bgscript',
    description: () =>
      <p>
        a system to more effectively toilet-train children with autism.
        r & d at the university of rochester that involves communication between an iOS app
        and a bluetooth module placed in the child's underwear.
      </p>
  },

  {
    name: "nsrails",
    img: "iror.png",
    noBorder: true,
    link: "http://www.sightunseen.audio",
    links: {
      source: "https://github.com/dingbat/nsrails",
      site: "http://nsrails.com",
      railsconf: "http://www.youtube.com/watch?feature=player_detailpage&v=5GS9Ta8dqhE#t=311",
    },
    tech: 'objective-C, coredata, xcunit',
    description: () =>
      <p>
        objective-c framework for high-level, easy, and flexible communication with a RESTful back-end (with rails conventions).
      </p>
  },
  
]
const SmallItems = []

export default class Software extends Component {
  renderItem(item) {
    return (
      <div key={item.name} className="item">
        <a href={item.link}>
          <img className={item.noBorder && 'no-border'} src={require(`../img/s/${item.img}`)} />
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
            {iosItems.map((item) =>
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