const apiRoutes = (app)=>{
    // api routes
    app.use('/api/admin', require('./api/admin'));
    app.use('/api/users', require('./api/users'));
    app.use('/api/tasks', require('./api/tasks'));

    // hbs routes
    app.use('/tasks', require('./hbs-routes/tasks'));
    //app.use('/users', require('./hbs-routes/users'));
    app.use('', require('./hbs-routes/admin'));
}

module.exports = {
    apiRoutes: apiRoutes
};