const jwt = require('jsonwebtoken');
const User = require('@src/database/models/user');
const bcrypt = require('bcrypt');

module.exports = {
    /**
     * login user
     * @param req
     * @param res
     * @returns {Promise<*|createServer.NextHandleFunction|Json|Response|Promise<any>|*>}
     */
    async login(req, res) {
        let {email, password} = req.body;

        // res.send(user);
        try {
            let user = await User.findOne({where: {email}});
            if (user) {
                if (await bcrypt.compare(password, user.password)) {
                    let expiresIn = 60 * 60;
                    const opts = {expiresIn};
                    const token = jwt.sign({email: user.email, id: user.id}, process.env.JWT_SECRET, opts);
                    return res.status(200).send({token, expiresIn})
                }
                return res.status(422).json({message: 'password incorrect!'})
            }
            res.status(422).json({message: `${email} does not exist in database`})
        } catch (e) {
            res.status(400).send('error' + e,)
        }
    },
    /**
     * user registration
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    async register(req, res) {
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
