module.exports = (env, rest = {}) => {
  return Object.assign(
    {
      'process.env': {
        NODE_ENV: JSON.stringify(env),
        BABEL_ENV: JSON.stringify(env),
      },
      __ENV_DEV__: process.env.ENV_DEV === '1',
      __ENV_STAGE__: process.env.ENV_STAGE === '1',
      __ENV_PROD__: process.env.ENV_PROD === '1',
      __ENV_TEST__: process.env.ENV_TEST === '1',
      __ENV_SSR__: process.env.ENV_SSR === '1',
    },
    rest,
  )
}
