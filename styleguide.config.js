const path = require('path')

module.exports = {
  title: 'Parmenion Library',
  components: './app/library/components/**/*.jsx',
  defaultExample: true,
  updateWebpackConfig(webpackConfig) {
   const dir = path.join(__dirname, 'app')

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
       test: /\.json?$/,
       include: dir,
       loader: 'json'
     }
   )

   return webpackConfig
 },
}
