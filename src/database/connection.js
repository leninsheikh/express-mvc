import Sequelize from 'sequelize';
import configs from '@src/config/database.config';
const env = process.env.ENV || 'development';

const config = configs[env];
export default new Sequelize(config.database, config.username, config.password, config);
