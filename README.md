# jekyll-tailwind-stimulus-starter

This is a [Jekyll](https://jekyllrb.com/) starter kit that can be used to quickly build
out a production-ready Jekyll static site using TailwindCSS, StimulusJS and Turbolinks. This template was Inspired by [jekyll-fun](https://github.com/joeybeninghove/jekyll-fun).

## Features

* [Webpack](https://webpack.js.org/) for managing all of the assets
* [Tailwind](https://tailwindcss.com/) baked in for utility-first CSS
* [Stimulus](https://stimulusjs.org/) as a lightweight javascript framework
* [PostCSS](https://github.com/postcss/postcss) used to load Tailwind and make
    [autoprefixer](https://github.com/postcss/autoprefixer) available
    to use
* [Turbolinks](https://github.com/turbolinks/turbolinks) to get the performance benefits of a single-page application
* [Foreman](https://github.com/ddollar/foreman) to easily run our application in development

## Setup

1. `bundle install`
2. `yarn install`

## Directory Structure

### `_src`

All of the CSS, JS and images are stored in the `_src` directory, which is
managed by Webpack.

## Usage

### Development
`foreman start`

### Build for production
`yarn build`

When running  `foreman start` both the web and webpack instances will be started.

Webpack has a development config file, `webpack.dev.js` that has a faster build process convenient for development whereas the production config file, `webpack.prod.js` optimizes for production by minimizing the assets and using cache busting. 

When Webpack runs, it compiles all of the assets into the `/assets` directory
and then generates and injects the appropriate
`<link>` and `<script>` tags into it `_includes/packs.html`.
