const api = "https://dummyjson.com/quotes/random";

const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.getElementById("btn");

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
