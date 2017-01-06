const path = require('path')

module.exports = {
  title: 'Parmenion Library',
  components: './app/library/components/**/*.jsx',
  serverPort: 3005,
  previewDelay: 0,
  showCode: true,
  updateWebpackConfig(webpackConfig) {
   const dir = path.join(__dirname, 'app')

   webpackConfig.resolve.alias['rsg-components/Wrapper'] = path.join(__dirname, 'resources/styleguide/wrapper')

   webpackConfig.module.loaders.push(
     {
       test: /\.jsx?$/,
       include: dir,
       loader: 'babel',
       query: {
         "presets": ["react", "es2015", "stage-0", "react-hmre"]
       }
     },
     {
       test: /\.jsx?$/,
       include: path.join(__dirname, 'resources'),
       loader: 'babel',
       query: {
         "presets": ["react", "es2015", "stage-0", "react-hmre"]
       }
     },
     {
       test: /\.json?$/,
       include: dir,
       loader: 'json'
     }
   )

   return webpackConfig
 },
}
