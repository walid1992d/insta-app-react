var packager = require('electron-packager');
const config = require('./common-config');
console.log('Building Linux App......');

var options = {
    ...config,
    platform: "linux",
    arch: 'x64',
    asar:true,
};
packager(options, function done_callback(err, appPaths) {
    if(err) {
    console.log(err);
    } else {
        console.log("Packaging Done", appPaths);
    }
});