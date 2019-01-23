//@ts-check
import webpack from 'webpack'
import path from 'path'

// plugins
import copyPlugin from 'copy-webpack-plugin'
import defineEnv from './env'

// -----------------------------------------------------------------------------

export default ({ dir, assetsPath }) => {
  const sourcePath = path.join(dir, '.')
  const outPath = path.join(dir, './dist/.dev')

  return {
    context: sourcePath,
    devtool: 'source-map',
    mode: 'development',
    entry: {
      main: [
        '@babel/polyfill',
        'react-hot-loader/patch',
        'webpack-hot-middleware/client?noInfo=true&reload=true',
        'whatwg-fetch',
        './index.tsx',
      ],
    },
    output: {
      path: outPath,
      publicPath: '/',
      filename: 'bundle.js',
    },
    target: 'web',
    resolve: {
      extensions: ['.js', '.ts', '.tsx', '.jsx', '.json'],
      mainFields: ['main'],
      modules: [
        path.resolve(sourcePath),
        path.resolve(path.join(dir, './node_modules')),
        path.resolve(path.join(dir, '../../node_modules')),
      ],
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader', 'autoprefixer-loader'],
        },
        {
          test: /\.jsx?$/,
          use: ['babel-loader'],
          exclude: /node_modules/,
        },
        {
          test: /\.tsx?$/,
          use: ['babel-loader', 'ts-loader'],
        },
        {
          test: /\.styl$/,
          use: ['style-loader', 'css-loader', 'stylus-loader'],
        },
        {
          test: [/\.scss/, /\.sass/],
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                importLoaders: 1,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                includePaths: [sourcePath + '/styles'],
                sourceMap: true,
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.LoaderOptionsPlugin({
        options: {
          context: sourcePath,
        },
      }),
      new webpack.DefinePlugin(defineEnv('development')),
      new webpack.optimize.AggressiveMergingPlugin(),
      new webpack.NamedModulesPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      ...(assetsPath !== undefined
        ? [
            new copyPlugin([
              { from: path.join('./assets', assetsPath), to: 'assets' },
            ]),
          ]
        : []),
    ],
  }
}
