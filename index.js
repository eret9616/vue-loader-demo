const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

let opt = {
    entry:'./src/index.vue',
    mode:'development',
    module: {
        rules: [
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
          },
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

const compiler = webpack(opt)
compiler.run((err,stat)=>{
    console.log(stat.toString())
})
