import React, { Component } from 'react';
import './index.sass';

class App extends Component {
  render() {
    return (
      <div className="index">
        <div className="header">
          <h1>Dan Hassin</h1>
          <img src="img/me.jpg" />
        </div>

        <div className="content">
          <div className="menu">
            <div className="item">
              <a href="projects">software</a>
            </div>
            &nbsp;|&nbsp;
            <div className="item">
              <a href="music">music</a>
            </div>
            &nbsp;|&nbsp;
            <div className="item">
              <a href="writing">writing</a>
            </div>
          </div>
          <div className="about">
            <p>
              i've worked in <a href="http://www.democracynow.org/" className="line">new york</a> and <a href="http://kpcbfellows.com/" className="line">silicon</a> <a href="http://upthere.com" className="line">valley</a>, and <a href="incontext" className="line">freelanced</a> while backpacking through europe. i am now looking for full-stack web and/or ios contract work.
            </p>
            <p>
              this site contains some of the things i've made–alone and with others–that i hope will intrigue your literary, musical, and digital curiosities.
            </p>
            <p>
              thank you for visiting!
              <br />
              -dan
            </p>
          </div>
        </div>

        <div className="footer">
          <div className="separator">~</div>

          <a href="#" id="contact">contact</a>
          
          <span id="email" className="hidden">
            <span className="color-ish">danhassin</span>
            <span className="color-light">at</span>
            <span className="color-ish">mac</span>
            <span className="color-light">dot</span>
            <span className="color-ish">com</span>
          </span>

          <span className="color-light">&nbsp;|&nbsp;</span>

          <a href="stuff/hassin-resume.pdf" target="_blank" className="color-ish">resume</a>
        </div>
      </div>
    );
  }
}

export default App;
