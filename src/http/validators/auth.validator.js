const { body }  =  require("express-validator");
const { isPasswordEqual, isUniqueEmail } = require('./custom.validator');

/**
 * validation rules for user register
 * @type {ValidationChain[]}
 */
module.exports.registerRequest = [
    body('email')
        .isEmail().withMessage('this not a valid email address')
        .custom(isUniqueEmail),
    body('password').isLength({ min: 6 }),
    body('confirmPassword').custom(isPasswordEqual),
    body('firstName', 'firstName is required').not().isEmpty(),
    body('lastName', 'lastName is required').not().isEmpty(),
];

/**
 * validation rule for user login
 * @type {ValidationChain[]}
 */
module.exports.loginRequest = [
    body('email', 'this not a valid email address').isEmail(),
    body('password', 'password filed can not be empty').not().isEmpty()
];
