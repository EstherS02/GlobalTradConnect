const User = require("../../models/user");

const getUser = (req) => {
    try {
        return User.find(req.query)
    } catch(e) {
        throw new Error(e);
    }
};

const saveUser = (req)=>{
    try{
        var task = new User(req.body)
        return task.save();
    }catch(err){
        throw new Error(err);
    }
};

module.exports = {
    getUser : getUser,
    saveUser:saveUser
}