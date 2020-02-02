$(function () {
    $(".eat-btn").on("click", function (event) {
        event.preventDefault();
        var id = $(this).data("id");
        // PUT request
        $.ajax("/api/burgers/" + id, {
            type: "PUT"
        }).then(
            function () {
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        var newBurger = {
            burger_name: $("#burger").val(),
            devoured: 0
        };

        // POST request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                location.reload();
            }
        );
    });
});