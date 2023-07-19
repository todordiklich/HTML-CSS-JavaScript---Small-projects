const quoteContainerEl = document.getElementById('quote-container');
const quoteEl = document.getElementById('quote');
const authorEl = document.getElementById('author');
const newQuoteBtnEl = document.getElementById('new-quote');
const twitterBtnEl = document.getElementById('twitter');
const loaderEl = document.getElementById('loader');

let quotes = [];

//Show-Hide Loading spinner
function showLoadingSpinner() {
  loaderEl.hidden = false;
  quoteContainerEl.hidden = true;
}

function removeLoadingSpinner() {
  if (!loaderEl.hidden) {
    loaderEl.hidden = true;
    quoteContainerEl.hidden = false;
  }
}

//Fetch Quotes from API
let getQuotesCounter = 0;
async function getQuotes() {
  showLoadingSpinner();
  const quotesUrl =
    'https://jacintodesign.github.io/quotes-api/data/quotes.json';

  try {
    const res = await fetch(quotesUrl);
    quotes = await res.json();

    newQuote();
    removeLoadingSpinner();
    getQuotesCounter = 0;
  } catch (error) {
    getQuotesCounter++;
    if (getQuotesCounter >= 10) {
      alert('Sorry, the page is not workig!');
    } else {
      getQuotes();
    }
  }
}

getQuotes();

//Show new Qoute
function newQuote() {
  showLoadingSpinner();
  let quoteIdx = Math.floor(Math.random() * quotes.length);
  let quote = quotes[quoteIdx];

  quoteEl.textContent = quote.text;

  if (quote.text.length > 120) {
    quoteEl.classList.add('long-quote');
  } else {
    quoteEl.classList.remove('long-quote');
  }

  authorEl.textContent = quote.author;
  removeLoadingSpinner();
}

//Tweet Quote
function tweetQuote() {
  const tweetUrl = `https://twitter.com/intent?text${quoteEl.textContent} - ${authorEl.textContent}`;
  window.open(tweetUrl, '_blank');
}

//Buttons functionality
newQuoteBtnEl.addEventListener('click', newQuote);
twitterBtnEl.addEventListener('click', tweetQuote);
