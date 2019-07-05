import Sequelize from 'sequelize';
import configs  from '@src/config/database';

const env = process.env.NODE_ENV || 'development';

const config = configs[env];

let sequelize;

if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}

export default sequelize;
