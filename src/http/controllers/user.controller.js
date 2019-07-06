const  bcrypt = require('bcrypt');
const  User  = require('@src/database/models/user');

module.exports = {
    async index(req, res) {
        try {
            res.status(200).json(await User.findAll());
        } catch (e) {
            res.send(e)
        }
    },
    async store(req, res) {
        try {
            let user = await User.build(req.body);
            user.password = await bcrypt.hash(req.body.password, 10);
            await user.save();
            res.json(user);
        } catch (e) {
            res.json(e);
        }
    }
};
