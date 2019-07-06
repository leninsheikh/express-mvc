import Sequelize from 'sequelize';
import configs from '@src/config/database';

const env = process.env.ENV || 'development';

const config = configs[env];

console.log(env);

let sequelize = new Sequelize(config.database, config.username, config.password, config);

export default sequelize;
