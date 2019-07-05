import sequelize from '@src/database/connection';
import * as Sequelize from 'sequelize';

const User = sequelize.define('User', {
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    email: Sequelize.STRING
  }, {});

export default User;
