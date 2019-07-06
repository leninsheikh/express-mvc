import sequelize from '@src/database/connection';
import * as Sequelize from 'sequelize';

const User = sequelize.define('user', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    }
  }, {});

export default User;
