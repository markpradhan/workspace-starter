module.exports = {
  env: {
    development: {
      presets: [['@babel/env'], '@babel/react'],
      plugins: [
        'lodash',
        'babel-plugin-inline-import',
        'react-hot-loader/babel',
        ['babel-plugin-styled-components'],
      ],
    },
    staging: {
      presets: [['@babel/env', { modules: false }], '@babel/react'],
      plugins: [
        'lodash',
        'babel-plugin-inline-import',
        ['babel-plugin-styled-components'],
      ],
    },
    production: {
      presets: [['@babel/env', { modules: false }], '@babel/react'],
      plugins: ['lodash', 'babel-plugin-inline-import'],
    },
    test: {
      presets: [['@babel/env'], '@babel/react'],
      plugins: ['lodash', 'babel-plugin-inline-import'],
    },
    babelNode: {
      presets: [
        [
          '@babel/env',
          {
            targets: {
              esmodules: true,
            },
          },
        ],
        '@babel/react',
      ],
      plugins: ['lodash', 'babel-plugin-inline-import'],
    },
  },
}
