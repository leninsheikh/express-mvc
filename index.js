/* eslint-disable */
require = require("esm")(module);

require('module-alias/register');

require('dotenv').config();

module.exports = require("./src/app.js");
