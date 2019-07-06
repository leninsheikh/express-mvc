const  path = require("path");

module.exports.root = filePath => {
    return resolvePath(filePath)
}

module.exports.views = filePath => {
    return resolvePath(filePath, 'src/resources/views')
}

module.exports.src = filePath => {
    return resolvePath(filePath, 'src')
}
module.exports.asset = (filePath = '') => {
    return resolvePath(filePath, 'src/resources/assets')
}

module.exports.html = filePath => {
    if(!filePath.includes('.html')) {
        filePath = filePath.slice() + '.html'
    }
    return resolvePath(filePath, 'src/resources/views')
}

const resolvePath = (filePath, subPath = '') => {
    return path.join(
        path.dirname(process.mainModule.filename),
        ...subPath.split('/'),
        ...filePath.split('/')
    )
}
