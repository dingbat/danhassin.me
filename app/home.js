import React, { Component } from 'react';
import 'style/home.sass';
import imgMe from 'img/me.jpg';

import { Router, Route, Link } from 'react-router'

import * as Radio from 'radio';

import 'style/music.sass';

export default class Home extends Component {
  componentDidMount() {
    Radio.start('home-radio', 'static');
  }

  render() {
    return (~
      .index
        .subheader
          %canvas#home-radio.radio(width="200" height="200")

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
              you’ve found this site. think about everything that had to happen
               for this moment to occur. i mean everything. well, maybe not.

            %p
              this paragraph text alignment is set to
              %span.monospace> justify
              because it’s attempting to justify the existence of this site, but
               that is difficult because at first this site doesn’t really seem
               like anything beyond self-advertisement.

            %p
              although it may seem unfair, it may lie within your own power
               and responsibility to make that judgment. luckily for you, there
               is a fair amount of content around here of different form which
               increases the chances that you will appreciate something for its
               own merit. unluckily for you, or maybe me, there’s a fairly high
               chance of you being here to recruit me for something, and thus,
               the value (or non-value) of the things here for you are,
               ultimately, me.

            %p.unjustified
              or, you could reject the very notion of self-advertisement and
               come up with a hypothesis of your own. for instance, the tangled
               relationships between self, its creations, and others make
               it unclear what exactly is advertising what. or maybe there exist
               justifications for this site of an entirely different nature,
               or maybe justifications don’t even matter at all. &nbsp;

            %p
              anyway, this site is provided 'as is', with no warranty of any
               kind. contact me with stuff and i’ll try to respond.
    ~)
  }
}
