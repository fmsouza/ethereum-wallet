module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@assets': './assets',
          '@common': './src/common',
          '@components': './src/components'
        }
      }
    ],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    [
      '@babel/plugin-transform-runtime',
      {
        helpers: true,
        regenerator: false
      }
    ]
  ]
};
