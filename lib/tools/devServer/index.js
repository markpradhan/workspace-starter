// Libs
import express from 'express'
import webpack from 'webpack'
import portfinder from 'portfinder'
import colors from 'colors'

// ---------------------------------------------------------------------------

/* eslint-disable no-console */
export default (config, indexHTML, port = 3000) => {
  const app = express()
  const compiler = webpack(config)

  // set default port
  portfinder.basePort = port

  app.use(
    require('webpack-dev-middleware')(compiler, {
      publicPath: config.output.publicPath,
      quiet: false,
      // It suppress everything except error, so it has to be set to false as well
      // to see success build.
      noInfo: false,
      stats: {
        // Config for minimal console.log mess.
        assets: false,
        colors: true,
        version: true,
        hash: false,
        timings: false,
        chunks: false,
        chunkModules: false,
      },
    }),
  )

  app.use(require('webpack-hot-middleware')(compiler))

  app.get('*', function(req, res) {
    res.sendFile(indexHTML)
  })

  // Opens the port on the given port or +1 if its taken
  portfinder.getPort(function(err, port) {
    console.log(
      colors.yellow('[app] Running on port ') + colors.underline.white(port),
    )
    app.listen(port, function(err) {
      if (err) {
        console.log(err)
      } else {
        // // opens to port at a certain port
        // open(`http://localhost:${port}`)
      }
    })
  })
}
