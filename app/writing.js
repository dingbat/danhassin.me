import React, { Component } from 'react';
import { Link } from 'react-router';

import 'style/writing.sass';

import Page from 'page';
import * as Papers from 'papers';

import * as Radio from 'radio';

export default class Writing extends Page {
  componentDidMount() {
    Radio.start('writing-radio', 'textile')
  }

  renderItem(item) {
    return (~
      %li(key={item.title})
        .paper-title
          %a(href={item.url} target="_blank")
            {typeof item.title === 'function' ? item.title() : item.title}
        .year.color-light
          {item.year}
    ~)
  }

  renderOtherItem(item) {
    return (~
      %span(key={item.title})
        %a(href={item.url} target="_blank")>
          {item.title}
        %span.other-separator {"//"}
    ~)
  }

  render() {
    return (~
      .writing
        .subheader
          {this.renderBack()}
          %canvas#writing-radio.radio(width="220" height="300")
        .content
          %h2 selected university papers
          %ul.paper-table
            {Papers.papers.map(this.renderItem)}

          %h2 other
          %span.other-separator {"//"}
          {Papers.other.map(this.renderOtherItem)}
    ~)
  }
}