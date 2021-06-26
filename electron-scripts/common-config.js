const appInfo = require('./app-info');
module.exports = {
    "dir": "./",
    "icon": "resources/icon.ico",
    "ignore": ["./builds", "./.git", "./config", "./platforms", ",/electron-scripts"],
    "out": "./platforms",
    "overwrite": true,
    "prune": true,
    "version": "1.3.2",
    ...appInfo,
}