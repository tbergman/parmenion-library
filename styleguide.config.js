/* eslint-disable */

const path = require('path');

module.exports = {
  title: 'Parmenion Library',
  serverPort: 3005,
  previewDelay: 0,
  showCode: false,
  resolver: require('react-docgen').resolver.findAllExportedComponentDefinitions,
  getExampleFilename: componentpath => path.join(path.dirname(componentpath), 'README.md'),
  sections: [
    {
      name: 'Introduction',
      content: './docs/introduction.md',
    },
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
      name: 'Containers',
      sections: [
        { name: 'Components', components: './app/library/components/Containers/**/*.jsx' },
      ],
    },
    {
      name: 'Navigation',
      sections: [
        { name: 'Components', components: './app/library/components/Navigation/**/*.jsx' },
      ],
    },
    {
      name: 'Status',
      sections: [
        { name: 'Components', components: './app/library/components/Status/**/*.jsx' },
      ],
    },
    {
      name: 'Data',
      sections: [
        { name: 'Components', components: './app/library/components/Data/**/*.jsx' },
      ],
    },
    {
      name: 'Layout',
      sections: [
        { name: 'Components', components: './app/library/components/Layout/**/*.jsx' },
      ],
    },
  ],
  updateWebpackConfig(webpackConfig, env) {
    const dir = path.join(__dirname, 'app');
    const isProd = env === 'production';

    webpackConfig.resolve.alias['rsg-components/Wrapper'] = path.join(__dirname, 'resources/styleguide/wrapper');
    webpackConfig.resolve.alias['library'] = path.join(__dirname, './app/library');

    webpackConfig.entry.unshift('babel-polyfill');

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
