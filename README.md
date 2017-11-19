# Essential Webpack 3 + PostCSS boilerplate

A super minimal and basic boilerplate that I use as starter-kit on my personal projects! 😎

## What is rocking here
* [Webpack 3](https://webpack.js.org/guides/getting-started/)
  * [tree-shaking](https://webpack.js.org/guides/tree-shaking/)
  * [file-loader](https://github.com/webpack-contrib/file-loader)
* [PostCSS 6](http://postcss.org/)
  * [Normalize](https://necolas.github.io/normalize.css/) IE10+
  * [postcss-import](https://github.com/postcss/postcss-import)
  * [postcss-cssnext](http://cssnext.io/)

### Extras
* [Babel](https://babeljs.io/) - *Use next generation JavaScript, today.*
* [BrowserSync](https://www.browsersync.io/) - *Time-saving synchronised browser testing.*
  * Tunnel - *Make your website online through a random Public URL*
* [Jest](https://facebook.github.io/jest/) with (Babel) - *Delightful JavaScript Testing*
* [ESLint](http://eslint.org/) - *The pluggable linting utility for JavaScript and JSX*
* [StyleLint](https://stylelint.io/) - *A mighty, modern CSS linter and fixer in your stylesheets.*


## How to rock
* `git clone https://github.com/sandrina-p/essential-webpack-boilerplate.git your-project`
* `cd your-project` - go to `/your-project` folder
* `npm install` - get everything to run the project
* `npm start` - run the project... wait a few seconds
* A tab on Chrome should open - **http://localhost:3001/** - you can rock with it 💥
* `npm test` - don't forget to test your code ⚙️
* `npm run build` - set all the code ready and minified into `/build` folder


## Before you start
- Install [NodeJs](https://nodejs.org/en/)
- Install [Webpack](https://webpack.js.org/guides/getting-started/) `npm i -g webpack`

## How to Add Multiple files
This boilerplate is set for only 1 page: `index.html` but is easy to add more pages. You just need to add the HTML and JS files to `config/webpack.config.js`:

### Add HTML file
- On `line 83` you have all your project Pages. Each `new HtmlWebpackPlugin` is used to create a new page.

```js
// YOUR PROJECT PAGES
new HtmlWebpackPlugin({
    chunks: ['index'], // where it is reading the JS files from
    template: './index.html', // location of the HTML file
}),
```

To add a Page, add a new instance of `HtmlWebpackPlugin` and create your HTML file. In this case the file is at `./pages/my-page/index.html`.

```js
new HtmlWebpackPlugin({
    chunks: ['index'],
    template: './index.html',
}),
new HtmlWebpackPlugin({
    chunks: ['my-page'],
    template: './pages/my-page/index.html',
}),
```

### Add JS file
`chunks: ['my-page']` refers to the key of your JS file entry point (`line 26`). There you set the entry points for your project. Each entry point is a JS file.

Just add a new entry-point with the same name as the `chunks` value used on the step before.

```js
entry: {
    'index': './index.js',
    'my-page': './pages/my-page/index.js',
},
```

That's it! Save the file, `npm start` again and keep rocking at http://localhost:3001/pages/my-page/index.html


### Different HTML Files, same JS file
You also can have HTML files that use the same JS file:
```js
new HtmlWebpackPlugin({
    chunks: ['index'],
    template: './index.html',
}),
new HtmlWebpackPlugin({
    chunks: ['index'], // read from the same entry point as `index.html`
    template: './pages/my-page/about.html',
}),
```

## Suggestions & Questions
Just [create an issue](https://github.com/sandrina-p/essential-webpack-boilerplate/issues).

---

**Have fun!**
