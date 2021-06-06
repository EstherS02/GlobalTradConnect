const TaskService = require("../../api/tasks/tasks.service");
const UserService = require("../../api/users/users.service");

const getTasks = (req, res)=>{
    TaskService.getTasks(req).then((taskArr)=>{
        console.log("task....................",taskArr)
        res.render('task', {
            title:"Task Page",
            taskArr: taskArr
        })
    }).catch((err)=>{
        res.status(500).send("Unable to render that page")
    });
};

const addTask = (req, res)=>{
    UserService.getUser(req).then((users)=>{
        res.render('addTask',{
            users:users
        })
    }).catch((err)=>{
        console.log(err);
        res.status(500).send("Unable to render that page")
    })
};

const editTask = async (req, res)=>{
    try {
        var users = await UserService.getUser(req);
        var task = await TaskService.getTaskById(req);

        res.render('addTask',{
            title: "Edit Task",
            task: task,
            users: users
        })
    } catch(e){
        console.log(e)
        res.status(500).send("Unable to render that page")
    }
};


module.exports = {
    getTasks: getTasks,
    addTask: addTask,
    editTask: editTask
}