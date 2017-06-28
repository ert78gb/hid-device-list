'use strict';

const HID = require('node-hid');
const path = require('path');
const jsonfile = require('jsonfile');
const commandLineArgs = require('command-line-args');

const optionDefinitions = [
    {name: 'file', alias: 'f', type: Boolean}
];

const options = commandLineArgs(optionDefinitions);

const devices = HID.devices();

if (options.file) {
    const file = path.join(__dirname + '/devices.json');
    jsonfile.writeFileSync(file, devices, {spaces: 2});
} else {
    console.log(devices);
}

console.log('list OK');
