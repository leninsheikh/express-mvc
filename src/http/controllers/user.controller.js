const  User  = require('@src/database/models/user');

module.exports = {
    /**
     * get user list
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    async index(req, res) {
        try {
            res.status(200).json(await User.findAll());
        } catch (e) {
            res.send(e)
        }
    }
};
