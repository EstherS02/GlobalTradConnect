$(document).ready(function(){
    var url = window.location.href;
    var id = url.substring(url.lastIndexOf('/') + 1);


    if(url.includes("edit")){
        $("#addBtn").hide();
    } else {
        $("#updBtn").hide();
    }

    $("#taskForm").submit(function(event){
        event.preventDefault();

        var taskInput = {
            description: $("#description").val(),
            completed: $('#status').val(),
            owner: $("#owner").val()
        }

        var apiUrl, method;

        if(id && id == 'add') {
            method = 'POST';
            apiUrl = '/api/tasks'
        } else {
            method = 'PUT';
            apiUrl = `/api/tasks/${id}`
        }

        $.ajax({
            type: method,
            url: apiUrl,
            data: taskInput,
            success: function(res){
                window.location.href ="/tasks";
            },
            error: function(error){
                console.log(error);
                console.log("err")
            }
        });
    });
});