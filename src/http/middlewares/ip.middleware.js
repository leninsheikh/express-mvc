module.exports =  (req, res, next) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log(ip);
    next();
}
