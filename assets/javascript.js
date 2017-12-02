//https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=e2a00bd64c074740b1fca74ef2f96bde&q=toys&begin_date=20100101&end_date=20150101
//$("#NYT-search").on("click", function(event) 
$(".btn-default").on("click", function(event)
{

        // Preventing the submit button from trying to submit the form
        // We're optionally using a form so the user may hit Enter to search instead of clicking the button
        event.preventDefault();
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=e2a00bd64c074740b1fca74ef2f96bde&q="
        // Here we grab the text from the input box

        if(length($("#NYT-term").val()) > 0)
        {
        	var term = $("#NYT-term").val();
        	 // Here we construct our URL
        	queryURL = queryURL + term;
        	console.log(queryURL);
        }
        else
        {
        	console.log("no search term provided")
        }
        //how many articles will we show?
        var number = $("#NYT-number").val();
        console.log(number);
        if(length($("#NYT-startYear").val()) > 0)
        {
        	var startYear = $("#NYT-startYear").val();
        	 // Here we construct our URL
        	queryURL = queryURL + "&begin_date=" + startYear +"0101";
        	console.log(queryURL);
        }
        if(length($("#NYT-endYear").val()) > 0)
        {
        	var endYear = $("#NYT-endYear").val();
        	 // Here we construct our URL
        	queryURL = queryURL + "&end_date=" + endYear +"1231";
        	console.log(queryURL);
        }

        //ajax time!
        $.ajax(
        {
          url: queryURL,
          method: "GET"
        }).done(function(getStories)
        {
        	console.log(getStories.response.docs[0].headline.main);
        	console.log(getStories.response.docs[0].headline.main);
        	console.log(getStories.response.docs[0].headline.main);
        	console.log(JSON.stringify(getStories));
          //$("#movie-view").append(JSON.stringify(getMovie));
          //$(".panel-body").append('<br> <h1> Title:' + getMovie.Title + '</h1><br>');
          //$("#movie-view").append('<h1>Plot: </h1>' + getMovie.Plot + '<br>');
          //$("#movie-view").append("<img src= '" + getMovie.Poster + "'> <br>") ;
          //$("#movie-view").append('<br> <h1>Release Date: </h1>' + getMovie.Released + '<br>');
        });

        // =================================================================
});