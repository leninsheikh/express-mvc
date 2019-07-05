import User  from '@src/database/models/user';

export default {
    index(req, res) {
        User.findAll()
            .then(user => {
                res.send(user)
            }).catch(err => {
                console.log('Oh Noooo', err);
        })
    }
}
