const portfinder = require('portfinder')

portfinder.getPort(function (err, port) {
})

module.exports = {
    transpileDependencies: ['vuex-persist']
}