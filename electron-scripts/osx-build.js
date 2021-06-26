var packager = require('electron-packager');
const config = require('./common-config');
console.log('Building OSX App......');

var options = {
    ...config,
    platform: "darwin",
    arch: 'x64',
};
packager(options, function done_callback(err, appPaths) {
    if(err) {
    console.log(err);
    } else {
        console.log("Packaging Done", appPaths);
    }
});