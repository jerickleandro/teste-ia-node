
const aiGenerate = require('./teste');
module.exports = function (app) {
    app.get('/', aiGenerate);
}