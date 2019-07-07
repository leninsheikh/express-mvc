const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require('passport');
const User = require('@src/database/models/user');


const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET;
/**
 * verifying token
 * @type {Authenticator}
 */
module.exports = passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
        let user = await User.findOne({where:{email: jwt_payload.email}});
        if (user) {
            return done(null, user)
        }
        return done(null, true)
    } catch (e) {
        return e;
    }
}) );
