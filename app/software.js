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
    name: "probabilistic programming",
    img: "ide.png",
    link: "cs200/index.html",
    links: {
      live: "cs200/index.html",
      paper: "cs200/paper.pdf",
      source: "https://github.com/RocHack/jschain",
    },
    tech: 'js, node.js, escodegen, esprima',
    description: () =>
      <p>
        proof of concept system for generating javascript programs and code snippets based off 
        a corpus of source files, using a <a href="https://en.wikipedia.org/wiki/Markov_chain">markov-chain</a> mechanism for tree structures.
      </p>
  },

  {
    name: "nsrails",
    img: "iror.png",
    noBorder: true,
    link: "https://github.com/dingbat/nsrails",
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

const SmallItems = [
  {
    name: "crm114_native",
    link: "https://github.com/dingbat/crm114_native",
    links: {
      source: "https://github.com/dingbat/crm114_native",
    },
    tech: 'ruby gem, ruby-C bindings',
    description: () =>
      <p>
        a native ruby wrapper around <a href="http://crm114.sourceforge.net/wiki/doku.php">CRM114</a>,
        a machine learning library in C for text classification.
      </p>
  },

  {
    name: "clockout",
    img: "clockout.png",
    noBorder: true,
    link: "https://github.com/dingbat/clockout",
    links: {
      source: "https://github.com/dingbat/crm114_native",
    },
    tech: 'ruby gem/executable, git hook',
    description: () =>
      <p>
        tool that analyzes a git repository and converts your commits into blocks of time worked
        (useful as a replacement/addition to contract timekeeping)
      </p>
  },

  {
    name: "blarfb",
    img: "blarfb.jpg",
    link: "https://chrome.google.com/webstore/detail/blarfb/japabiflacoedddenbhneajhepopkdif",
    links: {
      chrome: "https://chrome.google.com/webstore/detail/blarfb/japabiflacoedddenbhneajhepopkdif",
      safari: "stuff/blarfb.safariextz",
      source: "https://github.com/dingbat/blarfb",
    },
    tech: 'chrome, safari extension',
    description: () =>
      <p>
        got the idly-scroll-fb-when-there's-stuff-to-be-done disease? this may help
      </p>
  },

  {
    name: "'memoring'",
    img: "memoring.jpg",
    link: "https://chrome.google.com/webstore/detail/blarfb/japabiflacoedddenbhneajhepopkdif",
    links: {
      'hackny standings': "http://hackny.org/a/2013/10/fall-2013-hackny-hackathon-recap-and-winners/",
    },
    tech: 'ios, shapeways API, php',
    description: () =>
      <div><p>
        a 24-hour hack, done for the fall 2013 HackNY Hackathon in NYC, my first hackathon.
        tracks your location throughout a night, and allows you to order a 3d-printed ring in the shape of your walk.
      </p>
      <p>
        won 2nd place overall, among around 250 competitors and 50 other projects, and was presented at the november 2013 NY Tech Meetup.
      </p></div>
  },

  {
    name: "λ-calculus interpreter",
    img: "lambda.png",
    link: "lambda",
    links: {
    },
    tech: 'js',
    description: () =>
      <p>
        an interpreter for <a href="http://en.wikipedia.org/wiki/Lambda_calculus">the lambda calculus</a>
      </p>
  },
  
]

export default class Software extends Component {
  renderItem(item) {
    return (
      <div key={item.name} className="item">
        <a href={item.link}>
          {item.img &&
            <img className={item.noBorder && 'no-border'} src={require(`../img/s/${item.img}`)} />
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