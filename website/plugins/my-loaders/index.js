module.exports = function (context, options) {
    return {
        name: 'my-loaders',
        configureWebpack(config, isServer) {
            return {
                resolve: {
                    fallback: {
                        'timers': require.resolve('timers-browserify'),
                        'stream': require.resolve('stream-browserify')
                    }
                }
            }
        }
    }
}

