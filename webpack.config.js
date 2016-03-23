/*
config for webpack. Will be used in
the Gulpfile for building our app.
Does not need gulp in order to do so,
but we use gulp to orchestrate
 */
module.exports = {
  output: {
    filename: 'bundle.js'
  },

  devtool: 'sourcemap',

  module: {
    loaders: [
      { test: /\.html$/, loader: 'raw' },
<<<<<<< HEAD:webpack.config.js
      { test: /\.styl$/, loader: 'css!style!stylus' },
      // TODO: create loader for .js filest ransfroming from ES2015 to ES5
=======
      { test: /\.styl$/, loader: 'style!css!stylus' },
      { test: /\.css/, loader: 'style!css' },
      { test: /\.js$/, loader: 'babel?stage=1', exclude: [/client\/lib/, /node_modules/, /\.spec\.js/] }
>>>>>>> ff29bc6cf8832abbb1613d53448639a71408e9d4:webpack.config.js
    ]
  },

  stylus: {
    use: [require('jeet')(), require('rupture')()]
  }
};
