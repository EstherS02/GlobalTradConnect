const service = require('./tasks.service');

const getTasks = (req, res)=>{
    service.getTasks(req).then((result)=>{
        res.status(201).send(result);
    }).catch((err)=>{
        res.status(500).send(err)
    });
};

const saveTask = (req, res)=>{
    service.saveTask(req).then((result)=>{
        res.status(201).send(result);
    }).catch((err)=>{
        res.status(500).send(err);
    });
};

const updateTask = (req, res)=>{
    service.updateTask(req).then((result)=>{
        res.status(201).send("Record Updated");
    }).catch((err)=>{
        res.status(500).send(err);
    });
};

const deleteTask = (req,res)=>{
    service.deleteTask(req).then((result)=>{
        res.status(201).send("Record Deleted");
    }).catch((err)=>{
        res.status(500).send(err);
    });
};

const getTaskById = (req,res)=>{
    service.getTaskById(req).then((result)=>{
        console.log("--------------------",result)
        res.status(200).send(result);
    }).catch((err)=>{
        res.status(500).send(err);
    });
}

module.exports = {
    getTasks: getTasks,
    saveTask: saveTask,
    updateTask: updateTask,
    deleteTask: deleteTask,
    getTaskById: getTaskById
}
