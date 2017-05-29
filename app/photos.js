import React, { Component } from 'react';
import { Link } from 'react-router';

import 'style/photos.sass';

import Page from 'page';

import * as Radio from 'radio';

export default class Photos extends Page {
  componentDidMount() {
    Radio.start('photos-radio', 'circles')
  }

  renderPair(letter) {
    const path1 = `bw/${letter}1.jpeg`;
    const path2 = `bw/${letter}2.jpeg`;
    return (~
      .
        %a.image(href={path1})
          %img(src={path1})
        %a.image(href={path2})
          %img(src={path2})
    ~);
  }

  render() {
    return (~
      .photos
        .subheader
          {this.renderBack()}
          %canvas#photos-radio.radio(width="420" height="300")
        .content
          %h2 film photography

          {this.renderPair("a")}
          {this.renderPair("b")}
          {this.renderPair("c")}
          {this.renderPair("d")}
          {this.renderPair("e")}
          {this.renderPair("f")}
          {this.renderPair("g")}
    ~)
  }
}
