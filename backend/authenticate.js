const jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
const config = require("./config");

exports.getToken = (payload) => {
    return jwt.sign(payload, config.secretKey, {expiresIn: '10m'});
}

exports.verifyUser = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]
    if(token == null)
        return res.sendStatus(401);

    jwt.verify(token, config.secretKey, (err, user) => {
        if(err){
            return res.sendStatus(401);
        }
        next();
    })
}
