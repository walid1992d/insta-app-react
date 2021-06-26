var packager = require('electron-packager');
const config = require('./common-config');
console.log('Building Windows App......');
var options = {
    ...config,
    platform: "win32",
    arch: 'ia32',
};
packager(options, function done_callback(err, appPaths) {
    if(err) {
    console.log(err);
    } else {
        console.log("Packaging Done", appPaths);
    }
});