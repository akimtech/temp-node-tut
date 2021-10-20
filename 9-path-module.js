


const path = require('path')

console.log(path.sep)

const filepath = path.join('/views', 'index.html')

const base = path.basename(filepath)

console.log(base)

const absolute = path.resolve(__dirname, 'view', 'index.html')

console.log(absolute)