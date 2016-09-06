import React, { Component } from 'react';
import 'style/home.sass';
import imgMe from 'img/me.jpg';

import { Router, Route, Link } from 'react-router'

export default class Home extends Component {
  render() {
    return (~
      .index
        .subheader
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
              hi, oh uh, hi, i haven‘t decided what to write here yet. 
              anyway, thanks for visiting! -dan
    ~)
  }
}
