const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports ={
    entry:'./index.vue',
    mode:'development',
    module: {
        rules: [
          {
            test: /\.vue$/,
            loader: 'vue-loader'
          },
          {
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
            options: {
              appendTsSuffixTo: [/\.vue$/],
            }
          },
        ]
      },
      plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin()
      ]
}