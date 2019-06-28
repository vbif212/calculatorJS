'use strict';

module.exports = env => {
    return {
        context: __dirname + '/src',
        mode: env.NODE_ENV,
        entry: {
            index: "./index",
        },
        output: {
            path: __dirname + "/public",
            filename: "[name].js",
            chunkFilename: "[name].js",
            library: "[name]",
        },

        watch: env.NODE_ENV === 'development',

        watchOptions: {
            aggregateTimeout: 100
        },

        module: {
            rules: [
                {
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                }
            ]
        }
    }
};
