import React, { Component } from 'react';
import 'style/index.sass';
import imgMe from 'img/me.jpg';

import { Router, Route, Link } from 'react-router'

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (~
      .index
        .header
          %h1 Dan Hassin
          %img(src={imgMe})
        
        .content
          .menu
            .item>
              %Link(to="software") software
            |
            .item>
              %Link(to="music") music
            |
            .item>
              %Link(to="writing") writing
          
          .about
            %p
              hi, oh uh, hi, i haven't decided what to write here yet.
               anyway, thanks for visiting! -dan
            
        .footer
          .separator ~

          {!this.state.showEmail && (~
            %a(className="show" onClick={() => this.setState({showEmail: true})})
              contact
          ~)}
          
          {this.state.showEmail && (~
            %span#email
              %span.color-ish danhassin
              %span.color-light at
              %span.color-ish mac
              %span.color-light dot
              %span.color-ish com
          ~)}

          %span.color-light> |

          %a(href="stuff/hassin-resume.pdf" target="_blank" className="color-ish") resume
    ~)
  }
}
