import path from "path";

export const root = filePath => {
    return resolvePath(filePath,)
}

export const views = filePath => {
    return resolvePath(filePath, 'src/resources/views')
}

export const src = filePath => {
    return resolvePath(filePath, 'src')
}
export const asset = (filePath = '') => {
    return resolvePath(filePath, 'src/resources/assets')
}

export const html = filePath => {
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