module.exports = {
    login: (req, res) => {
        let {email, password} = req.body;
        //This lookup would normally be done using a database
        if (email === "a@a.com") {
            if (password === "xxxxxx") {
                // return res.send(req.body);//the password compare would normally be done using bcrypt.
                const opts = {}
                opts.expiresIn = 60 * 60;  //token expires in 2min
                const secret = "SECRET_KEY" //normally stored in process.env.secret
                const token = jwt.sign({email}, secret, opts);
                return res.status(200).json({
                    message: "Auth Passed",
                    token
                })
            }
        }
    }
}
