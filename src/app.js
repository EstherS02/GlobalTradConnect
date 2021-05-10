require("./db/mongoose");

const express = require("express");
const app = express();
const User = require("./models/user");
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());


// CRUD operation for user table

app.post('/api/users',(req,res)=>{
    var user = new User(req.body);
    user.save().then((user)=>{
        res.status(201).send({
            "user" : user
        })
    }).catch((err)=>{
        res.status(500).send(err);
    });
});

app.get('', (req,res)=>{
    res.send({
        "task-manger":"home page"
    })
})

app.listen(8080,()=>{
    console.log('Server is up on port 8080');
});