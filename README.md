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
`rake serve`

### Build
`rake build`

When running `rake serve` both the web and webpack instances will be started with foreman. Behind the scene foreman will running `bundle exec jekyll serve` and `cross-env NODE_ENV=development webpack --watch --config webpack.dev.js`. Webpack manages the assets for development with the `webpack.dev.js` config file which has a faster build process convenient for development.

When running `rake build` webpack bundles our assets and jekyll builds the site for production.  Webpack manages the assets for production with the `webpack.prod.js` config file which optimizes our build by using cache busting, minimizing the assets, and tree shaking unused styles with Tailwind's `purge` option.

## Process

When Webpack runs, it compiles all of the assets into the `/assets` directory
and then generates and injects the appropriate
`<link>` and `<script>` tags into the `_includes/packs.html` partial.
