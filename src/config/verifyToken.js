const User = require("../models/User");

function verifyToken(req, res, next){
    
    console.log("check Token!!!");

    const bearrerToken = req.header('user');
    console.log("user:", bearrerToken);
    if(typeof bearrerToken !== 'undefined'){
        req.token = bearrerToken;
        next();
    } else {
        res.sendStatus(403);
    }
}

module.exports =  verifyToken