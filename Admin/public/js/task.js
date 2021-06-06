$(document).ready(function(){
    $("#addBtn").click(function(){
        window.location.href = "/tasks/add";
    });

    $("#deleteBtn").click(function(){
        var checked = $("input[type=checkbox]:checked").length;

        if(!checked || checked>1){
            alert("Please select only one checkbox to delete");
            return;
        };

        var check = confirm("Are you sure you want to delete?");

        if(check){
            var all = $("input:checkbox");
            var checked = all.filter(":checked");

            var checkedIds = checked.map(function() {
                return this.id;
            });

            $.ajax({
                type: "DELETE",
                url: `/api/tasks/${checkedIds[0]}`,
                success: function(res){
                   console.log("success")
                   window.location.href = '/tasks';
                },
                error: function(error){
                    console.log(error);
                    console.log("err")
                }
            });
        }
    });

    $("#editBtn").click(function(){
        var checked = $("input[type=checkbox]:checked").length;

        if(!checked || checked>1){
            alert("Please select only one checkbox to edit");
            return;
        };

        var all = $("input:checkbox");
        var checked = all.filter(":checked");

        var checkedIds = checked.map(function() {
            return this.id;
        });

        window.location.href = `/tasks/edit/${checkedIds[0]}`;

    });

    $("#searchBtn").click(function(){
        var searchInp = $("#searchField").val();
        if(searchInp == ""){
            alert("Please enter something to search");
            location.href = '/tasks';
            return;
        }
        location.href = `/tasks?description=${searchInp}`;
    });

    $('#logoutBtn').click(function(){
        $.ajax({
            type: 'GET',
            url: '/api/admin/logout',
            success: function(res){
               console.log("success");
               location.href = '/';
            },
            error: function(error){
                console.log(error);
                console.log("err")
            }
        });
    })
})