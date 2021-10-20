
// npm -- version

//local dependency - use it only in thie particular project
//npm i <packagename>

//global dependency - use it in any project
//npm install -g <packageName>
//sudo npm install -g <packageName> on the MAC platform

//package.json - manifest file (stores important info about the project/package)
//manual approach (create package.json in the root, create properties etc)
//npm init (step by step, press enter to skip)
//npm init -y (everytihin default)

const _ = require('lodash')

const items = [1,[2,[3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)