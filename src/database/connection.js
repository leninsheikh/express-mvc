import Sequelize from 'sequelize';
import config from '@src/config/database.config';

export default new Sequelize(config.database, config.username, config.password, config);
