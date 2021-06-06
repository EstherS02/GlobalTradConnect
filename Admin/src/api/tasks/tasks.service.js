const Task = require("../../models/task");

const getTasks = async (req)=>{
    try{
        return await Task.find(req.query);
    } catch(err){
        console.log(err)
        throw Error(err)
    }
};

const saveTask = (req)=>{
    try{
        var task = new Task(req.body)
        return task.save();
    }catch(err){
        throw new Error(err);
    }
};

const updateTask = (req) => {
    try {
        return Task.findByIdAndUpdate(req.params.id,req.body);
    } catch(err) {
        throw new Error(err);
    }
};

const deleteTask = (req) => {
    try {
        return Task.findByIdAndDelete(req.params.id)
    } catch(err) {
        throw new Error(err);
    }
};

const getTaskById = (req) => {
    try {
        return Task.findById(req.params.id)
    } catch(err) {
        throw new Error(err);
    }
}

module.exports = {
    getTasks: getTasks,
    saveTask: saveTask,
    updateTask: updateTask,
    deleteTask: deleteTask,
    getTaskById: getTaskById
}