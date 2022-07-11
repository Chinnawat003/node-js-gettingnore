const {readFileSync} = require('fs')

const vnl2022_models = () => JSON.parse(readFileSync('data.json'))

module.exports = {vnl2022}

console.log(vnl2022_models())