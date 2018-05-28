
// make sure we wait to attach our handlers unti the DOM is fully loaded.
$(function() {
    $(".change-devoured").on("click", function(event) {
        var id = $(this).data("id");
        var newDevoured = $(this).data("newDevoured");

        var newDevouredState = { devoured: newDevoured };
        // send put request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function() {
                console.log("changed devoured to", newDevoured);
                // reload the page to get the updated list of burgers
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
        // send post request
        $.ajax("/api/burgers", {
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

        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function() {
                console.log("deleted burger", id);
                location.reload();
            }
        );
    });
});