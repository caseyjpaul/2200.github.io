// API ENDPOINT
const endPoint = "https://quotes.stormconsultancy.co.uk/random.json"

console.log(endPoint);

// document.querySelector('button'); // NOT THE BEST WAY
// document.querySelector(".new-quote button"); //NOT THE BEST EITHER
const quoteButton = document.querySelector('#js-new-quote');
quoteButton.addEventListener('click', getQuote);

// DEFINE FUNCTION
async function getQuote() {
  try {
    const response = await fetch(endPoint); // access endpoint
    if(!response.ok){
      throw Error (response.statusText);
    }
    const json = await response.json();
    console.log(json.quote);
    displayQuote(json.quote);

  } catch(err) {
    console.log(err);
    alert('failed');
  }
}

function displayQuote(quote){
  const quoteText = document.querySelector('#js-quote-text')
  quoteText.textContent = quote;
}
