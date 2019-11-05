const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

let opt = {
    entry:'./index.vue',
    mode:'development',
    module: {
        rules: [
          {
            test: /\.vue$/,
            loader: 'vue-loader'
          }
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
