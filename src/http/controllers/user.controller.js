import User  from '@src/database/models/user';

export default {
    async index(req, res) {
        res.status(200).json(await User.findAll());
    },
    async store(req, res) {
        try {
            let user = await User.create(req.body);
            res.json(user);
        } catch (e) {
            res.json(e);
        }
    }
}
