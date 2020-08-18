### personal website

https://danhassin.me

deployed on github pages, built with webpack, react, [haml-jsx-loader](https://github.com/dingbat/haml-jsx-loader), and react-router

> how is a single-page app with dynamic routing deployed on github pages?

simple -- webpack [is configured](https://github.com/dingbat/danhassin.me/blob/master/webpack.config.js#L40-L42) to copy `index.html` (the single page) to all routes.
