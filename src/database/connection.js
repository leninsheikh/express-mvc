import Sequelize from 'sequelize';
import config from '@src/config/database';

export default new Sequelize(config.database, config.username, config.password, config);
