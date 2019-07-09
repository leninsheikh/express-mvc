const User = require('@src/database/models/user');
/**
 * validation for password equality
 * @param value
 * @param req
 * @returns {boolean}
 */
module.exports.isPasswordEqual = (value, {req}) => {
    if (value !== req.body.password) {
        throw new Error('Password confirmation does not match password');
    }
    return true;
};

/**
 * validation for unique email
 * @param value
 * @param req
 * @returns {Promise<boolean>}
 */
module.exports.isUniqueEmail = async (value, {req}) => {
    let user = await User.count({where: {email: value}});
    if (user > 0) {
        if (value !== req.body.password) {
            throw new Error(value + ' email is already taken');
        }
        return true;
    }
};
