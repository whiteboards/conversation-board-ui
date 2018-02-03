const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const {
  HotModuleReplacementPlugin,
  NamedModulesPlugin,
  NoEmitOnErrorsPlugin,
} = require('webpack');

module.exports = {
  entry: [
    // Defines webpack's entry points for compiling the app.
    // activate HMR for React
    'react-hot-loader/patch',

    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint
    'webpack-dev-server/client?http://localhost:8080',

    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates
    'webpack/hot/only-dev-server',

    // the entry point of our app
    './src/index.tsx',
  ],

  output: {
    path: path.resolve(__dirname, 'dist'), // Sets the build's output path
    publicPath: '/', // Sets the webpack-dev-server hosting path
    filename: 'static/js/[name].[hash].js', // Defines the name pattern for compiled bundles
  },

  devtool: 'eval-source-map',

  module: {
    // The 'rules' option defines the file extensions that can be bundled and how they are bundled.
    rules: [{
        // Lint TS files
        test: /\.tsx?$/,
        include: /src/,
        loader: 'tslint-loader',
        enforce: 'pre',
        options: {
          emitErrors: false,
          failOnHint: true,
        }
      },
      {
        // Compile TS files
        test: /\.tsx?$/,
        include: /src/,
        use: ['react-hot-loader/webpack', 'awesome-typescript-loader'],
      },
      {
        // The "file" loader handles *all* assets unless explicitly excluded.
        // The `exclude` list *must* be updated with every change to loader extensions.
        // When adding a new loader, you must add its `test`
        // as a new entry in the `exclude` list in the "file" loader.

        // "file" loader makes sure those assets end up in the `dist` folder.
        // When you `import` an asset, you get its filename.
        exclude: [
          /\.html$/,
          /\.(js|jsx)$/,
          /\.(ts|tsx)$/,
          /\.css$/,
          /\.scss$/,
          /\.json$/,
          /\.bmp$/,
          /\.gif$/,
          /\.jpe?g$/,
          /\.png$/,
          /\.ejs$/,
        ],
        loader: require.resolve('file-loader'),
        options: {
          name: 'static/assets/[name].[ext]',
        },
      },
      {
        // "url" loader works just like "file" loader but it also embeds
        // assets smaller than specified size as data URLs to avoid requests.
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: require.resolve('url-loader'),
        options: {
          limit: 10000,
          name: 'static/assets/[name].[ext]',
        },
      },
      {
        // Collect and compile SCSS files
        test: /\.scss$/,
        include: /src/,
        use: [{
            loader: 'style-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        // Collect and compile CSS files
        test: /\.css$/,
        include: /src/,
        use: [{
            loader: 'style-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },

  plugins: [
    // Generates our 'index.html' file and includes all our resources.
    new HTMLWebpackPlugin({
      title: 'Conversation Board',
      template: 'src/index.ejs',
      chunksSortMode: 'dependency',
    }),

    // SCSS linting
    new StyleLintPlugin({
      syntax: 'scss',
      failOnError: false,
    }),

    // Enable HMR globally
    new HotModuleReplacementPlugin(),

    // prints more readable module names in the browser console on HMR updates
    new NamedModulesPlugin(),

    // do not emit compiled assets that include errors
    new NoEmitOnErrorsPlugin(),
  ],

  // Configures the webpack-dev-server
  devServer: {
    host: 'localhost',
    port: 8080,

    historyApiFallback: true,
    contentBase: './',

    // Enable HMR
    hot: true,
  },
};