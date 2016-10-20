$(document).ready(function(){
	//global variable
	var getQuote;
	var getAuthor;

	function executeSuccess(value)
	{
	  var key = JSON.parse(value);
	  getQuote = key.quote;
	  getAuthor = key.author;
	  
	  $(".message").html('" ' + getQuote + ' "');
	  $(".author").html('-' + getAuthor);
	}

	function generate()
	{
	  $.ajax({
		url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=",
		headers: {
		"X-Mashape-Key": "7lVinfet9ImshcyRSDbvVQt2cu0Lp1HoshFjsnzwosjdFwr8fQ",
		"Content-Type": "application/x-www-form-urlencoded",
		"Accept": "application/json"
		},
		success: executeSuccess
	  });
	}

	function tweet() {
	  var twitterURL = "https://twitter.com/intent/tweet" + "?text=" + '"' + getQuote + '"' + "%0A" +  " -" + getAuthor + "&hashtags=quotes";
	  window.open(twitterURL);
	}
  
  generate();
  
  $("#getMessage").on("click", function(){
    generate();
  });  
  $(".tweet").on("click", function(){
    tweet();
  });
});