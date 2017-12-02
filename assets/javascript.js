https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=e2a00bd64c074740b1fca74ef2f96bde&q=toys&begin_date=20100101&end_date=20150101

$("#")

$("#NYT-search").on("click", function(event) 
{

        // Preventing the submit button from trying to submit the form
        // We're optionally using a form so the user may hit Enter to search instead of clicking the button
        event.preventDefault();

        // Here we grab the text from the input box
        var term = $("#NYT-term").val();
        // Here we grab the text from the input box
        var term = $("#NYT-number").val();
        // Here we grab the text from the input box
        var term = $("#NYT-startYear").val();
        // Here we grab the text from the input box
        var term = $("#NYT-endYear").val();


        // Here we construct our URL
        var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=40e9cece";

        // Write code between the dashes below to hit the queryURL with $ajax, then take the response data
        // and display it in the div with an id of movie-view

        // YOUR CODE GOES IN THESE DASHES. DO NOT MANUALLY EDIT THE HTML ABOVE

        // =================================================================


        $.ajax(
        {
          url: queryURL,
          method: "GET"
        }).done(function(getMovie)
        {
          //$("#movie-view").append(JSON.stringify(getMovie));
          $("#movie-view").append('<br> <h1> Title:' + getMovie.Title + '</h1><br>');
          $("#movie-view").append('<h1>Plot: </h1>' + getMovie.Plot + '<br>');
          $("#movie-view").append("<img src= '" + getMovie.Poster + "'> <br>") ;
          $("#movie-view").append('<br> <h1>Release Date: </h1>' + getMovie.Released + '<br>');
        });

        // =================================================================
      });