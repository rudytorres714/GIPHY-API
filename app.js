//  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//  pseudo code - get jquery $ to make and append div for button have that button take on click event
//  so when u click it searchs data person and raiting to pass into the param, have a click state of
//  animate and stop or non-animate, and jquery selector $ to append div for gifs
//
//  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
$("button").on("click", function() {
    var state = $(this).data("state");
    var person = $(this).data("person");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + person + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .done(function (response)  {

        var results = response.data;
        var personDiv = $("<div class='personResult'>");
        var rating = response.Rated;
        var postRating = $("<p>").text("Rating: " + rating);

        personDiv.append(postRating);
        var image = $("<img>").attr("src", imgURL);
        var nameImage = $("<img>");
        nameImage.attr("src", results.images.fixed_height.url);
        personDiv.prepend(p);
        personDiv.prepend(nameImage);
        $("#imgDiv").prepend(personDiv);

    });

    if (state === "still") {
        $(this).attr("src", $(this).data("animate"));
        $(this).data("state", "animate");

    }
    else {
        $(this).attr("src", $(this).data("still"));
        $(this).data("state", "still");
    }
});