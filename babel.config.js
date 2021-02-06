module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            assets: './assets',
            components: './App/components',
            screens: './App/screens',
            store: './App/store',
          },
        },
      ],
    ],
  }
}
