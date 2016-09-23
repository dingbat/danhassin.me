import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Page extends Component {
  renderBack() {
    return (~
      %Link(to="/")
        .back
          %i.fa.fa-angle-left
          %span back
    ~)
  }

  render() {
    return null;
  }
}