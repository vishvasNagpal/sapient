const path = require('path');
module.exports = function(rootDir){
    global.__rootDir = rootDir;
    global.__production = (process.env.NODE_ENV === "production");
    global.requireLib = function (name) {
        return require(path.join(__rootDir, 'lib', name));
    };
};