const  sequelize = require('@src/database/connection');
const  Sequelize = require('sequelize');

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
    },
    password: {
        type: Sequelize.STRING,
        allowNull: true
    }
  }, {});
User.prototype.toJSON =  function () {
    let values = Object.assign({}, this.get());

    delete values.password;
    return values;
};
module.exports =  User;
