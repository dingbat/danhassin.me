import React from 'react';

export default [
  {
    name: "camena",
    img: "app/camena.png",
    app: true,
    link: "https://itunes.apple.com/us/app/camena/id312578836?mt=8",
    links: {
      'app store': "https://itunes.apple.com/us/app/camena/id312578836?mt=8",
    },
    description: () =>
      <div><p>
        shows you the lyrics to the song you're listening to. also shows you album, artist, music video, and tour dates.
      </p>
      <p>
        my most successful app! (not so much anymore). was #1 in the music category &
        eventually reached #24 of all paid apps on the app store
      </p></div>
  },

  {
    name: "newsalert",
    img: "app/na.png",
    app: true,
    link: "https://itunes.apple.com/us/app/camena/id312578836?mt=8",
    links: {
      'web access': "http://app.newsalertapp.com/",
      'app store': "https://itunes.apple.com/us/app/camena/id312578836?mt=8",
    },
    description: () =>
      <p>
        notifies you automatically whenever keywords of your choice appear in the news.
      </p>
  },
  
  {
    name: "dissolve",
    img: "app/dissolve.png",
    app: true,
    link: "https://itunes.apple.com/us/app/dissolve/id554344914?mt=8",
    links: {
      'app store': "https://itunes.apple.com/us/app/dissolve/id554344914?mt=8",
    },
    description: () =>
      <p>
        make awesome, living doodles and share them with others.
        each stroke you make will dissolve away as you start your next ones,
        bringing your drawings to life in continuous evolution.
        save the replays of the drawing and share them with friends.
      </p>
  },

  {
    name: "angles",
    img: "app/angles.png",
    app: true,
    link: "https://itunes.apple.com/us/app/angles/id390865784?mt=8",
    links: {
      'app store': "https://itunes.apple.com/us/app/angles/id390865784?mt=8",
      video: "http://vimeo.com/dq/angles"
    },
    tech: 'chipmunk 2d (C physics)',
    description: () =>
      <p>
        physics-based action/puzzle game, where you continuously bounce a ball into targets using a platform you control.
        avoid traps, falling off the edge, or more exciting things in later levels
      </p>
  },

  {
    name: "countdown",
    img: "app/count.png",
    noBorder: true,
    links: {
      'download': "stuff/countdown.zip",
    },
    description: () =>
      <p>
        an applet for macOS that’ll show you how many days away you are from any number of target dates, color-coded
      </p>
  },
]
