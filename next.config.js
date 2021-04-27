const path = require('path')
const webpack = require('webpack')

module.exports = {
  webpack: (config, options) => {
    config.resolve.alias['@components'] = path.resolve(__dirname)
      //  config.plugins.push()

    config.module.rules.push({
      test: /\.svg/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: 'svg-url-loader',
          options: {
            limit: 10000,
          },
        },
      ],
    })

    // config.module.rules.push({
    //   test: /\.(png|jpg|jpeg|gif)$/i,
    //   use: [
    //     {
    //       loader: 'url-loader',
    //       options: {
    //         limit: 10000
    //       }
    //     },
    //   ],
    // })

    config.module.rules.push({
      issuer: {
        // nextjs already handles url() in css/sass/scss files
        test: /\.\w+(?<!(s?c|sa)ss)$/i,
      },
      test: /\.(jpg|jpeg|gif|png|ico)$/i,
      use: [
        {
          loader: 'url-loader',
          options: {
            // sample options
            limit: 8192
          },
        },
      ],
    });


    return config
  }
}

// 'react': path.resolve('./node_modules/react').
