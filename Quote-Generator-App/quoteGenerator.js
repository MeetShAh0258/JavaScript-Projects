const quote = document.getElementById("quote");
const author = document.getElementById("author");

const apiURL = "https://api.quotable.io/random";

async function getQuote(url) {
    const response = await fetch(url);
    let data = await response.json();

    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

getQuote(apiURL);

function threadsQuote() {
    window.open('https://www.threads.net/intent/post?text=\"' + quote.innerHTML + '\" -' + author.innerHTML, "Threads Window", "width=600, height = 300");
}