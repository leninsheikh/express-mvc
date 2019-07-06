const Sequelize = require('sequelize');
const configs = require('@src/config/database.config');
const env = process.env.ENV || 'development';

const config = configs[env];
module.exports =  new Sequelize(config.database, config.username, config.password, config);
