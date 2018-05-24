$(function () {
    $(".change-devour").on("click", function (event) {
        var id = $(this).data("id");
        var newDevoured = $(this).data("newDevoured");

        var newDevouredState = { devoured: newDevoured };

        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function () {
                console.log("changed devoured to", newDevoured);
                location.reload();
            }
        );
    });
    $(".create-form").on("submit", function(event) {
        event.preventDefault();
        var newBurger = {
            name: $("#bu").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };
        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new burger");
                location.reload();
            }
        );
    });
    $(".delete-burger").on("click", function(event) {
        var id = $(this).data("id");

        $.ajax("/api/burger/" + id, {
            type: "DELETE"
        }).then(
            function() {
                console.log("deleted burger", id);
                location.reload();
            }
        );
    });
});