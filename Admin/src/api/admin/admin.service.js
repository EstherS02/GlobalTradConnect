const Admin = require("../../models/admin");

const getAdmin = (req) => {
    try {
        return Admin.find(req.query)
    } catch(e) {
        throw new Error(e);
    }
};

const saveAdmin = (req)=>{
    try{
        var task = new Admin(req.body)
        return task.save();
    }catch(err){
        throw new Error(err);
    }
};

module.exports = {
    getAdmin : getAdmin,
    saveAdmin:saveAdmin
}