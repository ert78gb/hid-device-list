HID Device List
===============

List HID devices to the console.

[node-hid](https://github.com/node-hid/node-hid) not works with node >= 8.0.0
[issue](https://github.com/node-hid/node-hid/issues/209)

##Usage
Installation

```bash
$ git clone https://github.com/ert78gb/hid-device-list.git
$ cd hid-device-list
$ npm i
```

Run
- write devices to the console
```bash
$ npm start
```
- write devices to file devices.json
```bash
$ npm start -- -f
```

## Sample result
```json
[
  {
    "vendorId": 1452,
    "productId": 611,
    "path": "IOService:/AppleACPIPlatformExpert/PCI0@0/AppleACPIPCI/XHC1@14/XHC1@14000000/HS12@14400000/Apple Internal Keyboard / Trackpad@14400000/Touchpad@2/AppleUSBTCButtons@14400000,2",
    "serialNumber": "",
    "manufacturer": "Apple Inc.",
    "product": "Apple Internal Keyboard / Trackpad",
    "release": 549,
    "interface": -1,
    "usagePage": 1,
    "usage": 2
  },
  {
    "vendorId": 1452,
    "productId": 611,
    "path": "IOService:/AppleACPIPlatformExpert/PCI0@0/AppleACPIPCI/XHC1@14/XHC1@14000000/HS12@14400000/Apple Internal Keyboard / Trackpad@14400000/Touchpad@1/AppleUSBMultitouchDriver@14400000,1",
    "serialNumber": "",
    "manufacturer": "Apple Inc.",
    "product": "Apple Internal Keyboard / Trackpad",
    "release": 549,
    "interface": -1,
    "usagePage": 65280,
    "usage": 1
  },
  {
    "vendorId": 1452,
    "productId": 611,
    "path": "IOService:/AppleACPIPlatformExpert/PCI0@0/AppleACPIPCI/XHC1@14/XHC1@14000000/HS12@14400000/Apple Internal Keyboard / Trackpad@14400000/Apple Internal Keyboard@0/AppleUSBTCKeyboard@14400000,0",
    "serialNumber": "",
    "manufacturer": "Apple Inc.",
    "product": "Apple Internal Keyboard / Trackpad",
    "release": 549,
    "interface": -1,
    "usagePage": 1,
    "usage": 6
  }
]
```
