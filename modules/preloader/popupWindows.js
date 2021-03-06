/**
@module preloader PopupWindows
*/

require('./popupWindowsNoWeb3.js');
require('./include/web3CurrentProvider.js');
const Q = require('bluebird');
const web3Admin = require('../web3Admin.js');
const https = require('https');

web3Admin.extend(window.web3);

// make variables globally accessable
window.Q = Q;
window.https = https;

// Initialise the Redux store
window.store = require('./rendererStore');
