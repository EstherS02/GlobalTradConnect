const service = require('./users.service');


const getUser = (req, res)=>{
    service.getUser(req).then((result)=>{
        res.status(200).send(result);
    }).catch((err)=>{
        console.log("Error::",err);
        res.status(500).send(err);
    })
};

const saveUser = (req, res)=>{
    service.saveUser(req).then((result)=>{
        res.status(200).send(result);
    }).catch((err)=>{
        console.log("Error::",err);
        res.status(500).send(err);
    })
};

const updateUser = (req, res)=>{
    res.status(201).send("Update User");
};

const deleteUser = (req,res)=>{
    res.status(200).send("delete User");
};


module.exports = {
    getUser: getUser,
    saveUser: saveUser,
    updateUser: updateUser,
    deleteUser: deleteUser
}
