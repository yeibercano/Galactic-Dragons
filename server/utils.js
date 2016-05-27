function authenticate (req, res, next){
    var body = req.body;
    if(!body.userName || !body.password) {
        res.status(400).end('Must provide username and password')
    }

    if((body.userName !== user.userName || body.password !== user.password)) {
        res.status(401).end('Username or password incorrect');
    }
    next();
}

module.exports = authenticate;