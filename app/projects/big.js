import React from 'react';

export default [
  {
    name: "sight unseen",
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
        horror audio game.
        <br />
        coming soon
      </p>
  },

  {
    name: "worksource",
    links: {},
    tech: 'rails, react.js, react native (iOS & android), letsencrypt',
    description: () =>
      <p>
        freelance project for <a href="http://earthmov.es/">Earth Moves</a>.
        <br />
        full-stack (including iOS and android apps), custom CMS for creating and
        maintaining health insurance benefits guides for employers/employees.
      </p>
  },

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