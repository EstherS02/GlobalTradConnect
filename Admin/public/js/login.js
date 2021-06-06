$(document).ready(function(){


    $("#loginForm").submit(function(event){
        event.preventDefault();

        var logInObj = {
            email: $('#email').val(),
            password: $('#password').val()
        };

        $.ajax({
            type: "POST",
            url: '/api/admin/login',
            data: logInObj,
            success: function(res){
               console.log("success");
               console.log(res);

               window.location.href = '/tasks';
            },
            error: function(error){
                $('#errMsg').text("Invalid Credentials");
                console.log("err")
            }
        });
    });
});