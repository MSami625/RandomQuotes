const api = "https://dummyjson.com/quotes/random";

const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.getElementById("btn");

const copyBtn = document.getElementById('copyBtn');
 const tweetBtn = document.getElementById('tweetBtn');

btn.addEventListener("click", getQuote);
 getQuote();
function getQuote() {
  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      quote.innerHTML = `"${data.quote}"`;
      author.innerHTML = `- ${data.author}`;
    });
}


copyBtn.addEventListener('click', () => {
  const quoteToCopy = `${quote.innerHTML} ${author.innerHTML}`;
  navigator.clipboard.writeText(quoteToCopy).then(() => {
      alert("Quote copied to clipboard!");
  }).catch(err => {
      alert("Failed to copy quote.");
  });
});


tweetBtn.addEventListener('click', () => {
  const tweetText = `${quote.innerHTML} ${author.innerHTML}`;
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
  window.open(tweetUrl, '_blank');
}); 
