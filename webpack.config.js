const Path = require('path');
const HtmlWebpackPugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    
    entry : './index.js',

    output: {
        path: Path.resolve(__dirname, 'dist'),
        filename: 'app-bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader'
            }
        ]
    },

    plugins: [
        new HtmlWebpackPugin({
            template: './public/index.html',
            filename: 'index.html'
        })
    ]
};

