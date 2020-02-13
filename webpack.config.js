const path = require('path');

module.exports = {
    entry: ['@babel/polyfill', './src/app/index.js'],
    output: {
        path: path.join(__dirname, '/src/public/'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                    },
                    {
                        loader: "css-loader" // translates CSS into CommonJS
                    }
                ]
            }
        ]
    }
}