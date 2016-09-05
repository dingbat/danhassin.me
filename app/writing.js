import React, { Component } from 'react';
import { Link } from 'react-router';

import 'style/writing.sass';

const papers = [
  {
    title: "“Skedge” – Honors senior thesis",
    url: "https://dropbox.com/s/dg0zic5376d7re4/thesis.pdf?raw=1",
    year: "2016",
  },
  {
    title: "“Advice & Dissent”",
    url: "papers/ad.pdf",
    year: "2015",
  },
  {
    title: "“The Memetic Cigarette”",
    url: "papers/cig.pdf",
    year: "2015",
  },
  {
    title: () => (~ .
      “Between Two Worlds: Mysticism in 
      %span.italics Four Quartets
    ~),
    url: "papers/eliot.pdf",
    year: "2014",
  },
  {
    title: "“Non-Duality” – A study of Zen philosophy",
    url: "papers/zen-nonduality.pdf",
    year: "2014",
  },
  {
    title: "Refutation of a proof of P=NP",
    url: "http://arxiv.org/abs/1404.5352",
    year: "2014",
  },
]

const other = [ 
  {
    title: "twitter",
    url: "http://twitter.com/2nf340",
  },
  {
    title: "2nf340",
    url: "http://2nf340.danhassin.me",
  },
  {
    title: "how i felt in the summer of 2013",
    url: "stuff/poems.pdf",
  },
]

export default class Writing extends Component {
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
      .(key={item.title})
        %a(href={item.url} target="_blank")
          {item.title}
    ~)
  }

  render() {
    return (~
      .writing
        .header
          %h1
            %Link(to="/") %i.fa.fa-angle-left
            Writing
            .back-counterbalance
          
        .content
          %h2 selected university papers
          %ul.paper-table
            {papers.map(this.renderItem)}

          %h2 other
          .other-table
            {other.map(this.renderOtherItem)}
    ~)
  }
}