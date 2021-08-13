const getMessage = document.getElementById("getMessage");
const tweet = document.getElementById("tweet");

const message = document.getElementById("message");
const author = document.getElementById("author");

const generate = () => {

	var getQuote = "";
	var getAuthor = "";

	//Generate random number for array
	let i = Math.ceil(Math.random() * 1642);

	fetch('https://type.fit/api/quotes')
    	.then( res => res.json())
    	.then( out => {

		getQuote = out[i].text;
		getAuthor = out[i].author;

		message.textContent = out[i].text;
		author.textContent = `- ${out[i].author}`;

		const tweets = () => {
			var twitterURL = "https://twitter.com/intent/tweet" + "?text=" + '"' + getQuote + '"' + "%0A" +  " -" + getAuthor + "&hashtags=quotes";
			window.open(twitterURL);
		};
		
		tweet.addEventListener('click', () => {
			tweets();
		});
	})
	.catch(err => console.error(err));
};

generate();

getMessage.addEventListener('click', () => {
	generate();
});
