const button = document.getElementById('button');
const audioElement = document.getElementById('audio');

// Enable/Disable Button
function toggleButton() {
  button.disabled = !button.disabled;
}

// Passing Joke to VoideRSS API
function tellMe(joke) {
  const jokeString = joke.trim().replace(/ /g, '%20');

  VoiceRSS.speech({
    key: '7e06e4beed4c4c6084a2e1d9e1955843',
    src: jokeString,
    hl: 'en-us',
    v: 'Linda',
    r: 0,
    c: 'mp3',
    f: '44khz_16bit_stereo',
    ssml: false,
  });
}

// Get Jokes from API
async function getJokes() {
  let joke = '';
  const apiUrl =
    'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist';
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.setup) {
      joke = `${data.setup} ... ${data.delivery}`;
    } else {
      joke = data.joke;
    }

    // Text-to-Speech
    tellMe(joke);
    //Disable Button
    toggleButton();
  } catch (error) {
    console.log('Joke failed', error);
  }
}

button.addEventListener('click', getJokes);
audioElement.addEventListener('ended', toggleButton);
