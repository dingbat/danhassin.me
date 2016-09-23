import React, { Component } from 'react';
import { Link } from 'react-router';

import * as Radio from 'radio';

import 'style/music.sass';

export default class Music extends Component {
  componentDidMount() {
    Radio.start('music-radio', 'waves')
  }

  render() {
    return (~
      .music
        .subheader
          %canvas#music-radio.radio(width="500" height="351")

        .content
          %h2 speedway racer boy
          %p.color-ish
            music made with my friends chris and kevin. see our
            %a.show(href="http://swrb.info")> website
            and
            %a.show(href="https://www.facebook.com/speedwayracerboy/")> facebook page
          .
            %iframe(src="https://bandcamp.com/EmbeddedPlayer/album=3806414790/size=medium/bgcol=d6d6d6/linkcol=333333/transparent=true/"
                    width="530px"
                    seamless={true})
              %a(href="https://swrb.bandcamp.com/album/sutherland")


          %h2 ambient solo work
          %p.color-ish
            this is me playing around with a microkorg and a looper
            %br
            listen w headphones

          .soundcloud
            %iframe(width="100%" height="166" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/139168849&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_artwork=true")
            .sc-sub.color-ish
              %p january 2012

            %iframe(width="100%" height="166" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/184856527&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_artwork=true")
            .sc-sub.color-ish
              %p april 2013

            %iframe(width="100%" height="166" src="https://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F104186145%3Fsecret_token%3Ds-fyR86")
            %div.sc-sub.color-ish
              %p july 2013


          %h2 other
          %iframe(src="https://player.vimeo.com/video/39452010" width="500" height="281" allowFullScreen={true})
          .sc-sub.color-ish
            %p march 2012, first jam with kaoss pad and microkorg

          .piano
            %iframe(width="560" height="315" src="https://www.youtube.com/embed/eJnsdyKWD_w" allowFullScreen={true})
            %iframe(width="560" height="315" src="https://www.youtube.com/embed/Sp0s_uRFm9U" allowFullScreen={true})
            %iframe(width="560" height="315" src="https://www.youtube.com/embed/-rVQIij_lV8" allowFullScreen={true})

          %p.color-ish
            october 2012 solarium piano improvisations
    ~)
  }
}