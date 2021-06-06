const service = require('./admin.service');
const Admin = require('../../models/admin');

const getAdmin = (req, res)=>{
    service.getAdmin(req).then((result)=>{
        res.status(200).send(result);
    }).catch((err)=>{
        console.log("Error::",err);
        res.status(500).send(err);
    })
};

const saveAdmin = (req, res)=>{
    service.saveAdmin(req).then((result)=>{
        res.status(200).send(result);
    }).catch((err)=>{
        console.log("Error::",err);
        res.status(500).send(err);
    })
};

const updateAdmin = (req, res)=>{
    res.status(201).send("Update Admin");
};

const deleteAdmin = (req,res)=>{
    res.status(200).send("delete Admin");
};

const loginAdmin = async (req,res)=>{
    try{
        var admin = await  Admin.findByCredential(req.body.email, req.body.password);

        var token = await admin.generateAuthToken();

        res.cookie("jwt", token, {
            expires : new Date(Date.now()+ 5000000),
            httpOnly: true
        });

        res.status(200).send({
            admin: admin,
            token : token
        });
    } catch(e) {

        res.status(400).send("Unable to Login")
    }
}

const logoutAdmin = (req,res)=>{

    res.clearCookie("jwt");
    res.status(200).send("success");
}

module.exports = {
    getAdmin: getAdmin,
    saveAdmin: saveAdmin,
    updateAdmin: updateAdmin,
    deleteAdmin: deleteAdmin,
    loginAdmin:loginAdmin,
    logoutAdmin: logoutAdmin
}
