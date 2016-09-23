import React, { Component } from 'react';
import { Link } from 'react-router';

import 'style/software.sass';

import iOSItems from 'projects/ios';
import BigItems from 'projects/big';
import SmallItems from 'projects/small';

import * as Radio from 'radio';
import Page from 'page';

export default class Software extends Page {
  componentDidMount() {
    Radio.start('software-radio', 'squares')
  }

  renderItem(item) {
    return (~
      .item(key={item.name})
        %a(href={item.link})
          {item.img && (~
            %img(
              className={item.noBorder ? 'no-border' : item.app ? 'app' : null}
              src={require(`img/s/${item.img}`)}
            )
          ~)}
          %h3 {item.name}

        {item.description()}
        %p.tech
          {item.tech}
        .links
          {Object.keys(item.links).map((link) =>
            (~ %a.angle-link(key={link} href={item.links[link]}) {link} ~)
          )}
    ~)
  }

  render() {
    return (~
      .software
        .subheader
          {this.renderBack()}
          %canvas#software-radio.radio(width="700" height="251")
          %p
            follow me on github:
            %a.angle-link(href="https://github.com/dingbat")>
              %i.fa.fa-github
              dingbat

        .content
          .col
            %h2 iOS/macOS
            {iOSItems.map(this.renderItem)}
          .col
            %h2 bigger things
            {BigItems.map(this.renderItem)}
          .col
            %h2 smaller things
            {SmallItems.map(this.renderItem)}
    ~)
  }
}