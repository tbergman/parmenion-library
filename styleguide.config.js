/* eslint-disable */

const path = require('path');

module.exports = {
  title: 'Parmenion Library',
  serverPort: 3005,
  previewDelay: 0,
  showCode: false,
  resolver: require('react-docgen').resolver.findAllExportedComponentDefinitions,
  sections: [
    {
      name: 'Typography',
      content: './docs/typography.md',
      sections: [
        { name: 'Components', components: './app/library/components/Type/**/*.jsx' },
      ],
    },
    {
      name: 'Forms',
      sections: [
        { name: 'Components', components: './app/library/components/Form/**/*.jsx' },
      ],
    },
    {
      name: 'Navigation',
      sections: [
        { name: 'Components', components: './app/library/components/Navigation/**/*.jsx' },
      ],
    },
  ],
  updateWebpackConfig(webpackConfig, env) {
    const dir = path.join(__dirname, 'app');
    const isProd = env === 'production';

    webpackConfig.resolve.alias['rsg-components/Wrapper'] = path.join(__dirname, 'resources/styleguide/wrapper');
    webpackConfig.resolve.alias['library'] = path.join(__dirname, './app/library');

    const presets = !isProd
      ? ['react', 'es2015', 'stage-0', 'react-hmre']
      : ['react', 'es2015', 'stage-0']

    webpackConfig.module.loaders.push(
      {
        test: /\.jsx?$/,
        include: dir,
        loader: 'babel',
        query: {
          presets,
        },
      },
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'resources'),
        loader: 'babel',
        query: {
          presets,
        },
      },
      {
        test: /\.json?$/,
        include: dir,
        loader: 'json',
      }
    );

    return webpackConfig;
  },
};
