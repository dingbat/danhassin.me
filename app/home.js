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
              you’ve found this site. think about, for a second, everything that
               had to happen for this moment to occur.

            %p
              the text alignments of these paragraphs are set to
              %span.monospace> justify
              because they’re attempting to justify the existence of this site,
               but that is difficult because at first this site doesn’t really
               seem like anything beyond self-advertisement.

            %p
              although it may at first seem unfair, it may be within
              %span.emph> your
              own power
               and responsibility to make such a judgment regarding this site.
               luckily for you, there is a fair amount of content around here
               of various different form, which increases the chances of you
               appreciating something for its own merit. unluckily for you, or maybe
               me, there’s a fairly high chance of you being here to recruit me
               for something, and thus, the value (or non-value) of this content
               for you ultimately reflects only me, and thus you. is there even
               a difference between the two valuations&mdash;of creation vs.
               creator&mdash;and could one exist without the other?

            %p.unjustified
              the tangled relationships between self, others, and art can
               muddle exactly who (or what) is advertising what, and to whom.
               or what constitutes the difference between advertising and
               boasting, or between boasting and self-expression. maybe there
               exists justification for this site of an entirely different nature,
               known or unknown to us. or is there even any justification at all,
               beyond the motives of the forces that brought me to write this
               and that brought you to read this?
               maybe the justifications don’t
               &nbsp;
               matter at all.
               &nbsp;&nbsp;&nbsp;

            %p
              anyway, contact me with stuff and i’ll try to respond.
    ~)
  }
}
