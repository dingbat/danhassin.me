import React from 'react';

export default [
  {
    name: "haml-jsx-loader",
    link: "https://github.com/dingbat/haml-jsx-loader",
    links: {
      github: "https://github.com/dingbat/haml-jsx-loader",
      npm: "https://www.npmjs.com/package/haml-jsx-loader",
    },
    tech: 'js, webpack, mocha',
    description: () =>
      <p>
        a webpack loader that lets you embed HAML into your react.js JSX.
        never settle for pointy brackets again
      </p>
  },

  {
    name: "crm114_native",
    img: "crm114.jpg",
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
    tech: "ios, shapeways API, php (just a tiny bit, don't worry)",
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
    app: true,
    links: {},
    description: () =>
      <p>
        an interpreter for <a href="http://en.wikipedia.org/wiki/Lambda_calculus">the lambda calculus</a>
      </p>
  }, 
]