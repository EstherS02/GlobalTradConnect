const jwt = require("jsonwebtoken");
const Admin = require("../models/admin");

const auth = async (req, res, next) =>{
    try{
       // var token = req.header('Authorization').replace('Bearer ', '');
        var token = req.cookies.jwt;
        const decoded = jwt.verify(token, 'thisisgtcproject');
        const admin = await Admin.findById(decoded._id);

        if(!admin){
            res.status(400).send("Unauthorized");
            return;
        }
        next();

    } catch(e){
        res.status(400).send("Unauthorized");
    }
}

module.exports = auth;