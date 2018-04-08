import path from 'path';
import webpack from 'webpack';

export default {
    devtools: 'eval-source-map',

    entry: [
        'webpack-hot-middleware/client',
        path.join(__dirname, '../../client/index.js')
    ],

    output: {
        path: '/',
        publicPath: '/'
    },

    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],

    module: {
        loaders: [
            {
                test: /\.js$/,
                include: [
                    path.join(__dirname, '../../client'),
                    path.join(__dirname, '../../shared'),
                ],
                loaders: [ 'react-hot', 'babel' ]
            },
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }
        ]
    },

    resolve: {
        extensions: [ '', '.js' ]
    }
}

console.log(path.join(__dirname, '../../client'));