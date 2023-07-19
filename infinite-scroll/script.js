const imgContainerEl = document.getElementById('image-container');
const loader = document.getElementById('loader');

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];

// Unsplash API
let count = 5;
const apiKey = 'Kaa7BkfPtXf6miv-W2qY4yUTRk4QVWNPkr2jjLG3lwQ';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// check if all images were loaded
function imageLoaded() {
  imagesLoaded++;
  if (imagesLoaded === totalImages) {
    ready = true;
    loader.hidden = true;
    count = 30;
  }
}

// Helper function for setting attributes to DOM elements
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

// Create elements for links and photos
function displayPhotos() {
  imagesLoaded = 0;
  totalImages = photosArray.length;

  photosArray.forEach((photo) => {
    // Create <a>
    const anchorEl = document.createElement('a');

    setAttributes(anchorEl, {
      href: photo.links.html,
      target: '_blank',
    });

    // Create <img>
    const imgEl = document.createElement('img');

    setAttributes(imgEl, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });

    // Check when photo is loaded
    imgEl.addEventListener('load', imageLoaded);

    // Put the <img> inside the <a>, and the put both inside imageContainerEl
    anchorEl.appendChild(imgEl);
    imgContainerEl.appendChild(anchorEl);
  });
}

// Get photos from Unsplash API
async function getPhotos() {
  try {
    const res = await fetch(apiUrl);
    photosArray = await res.json();
    displayPhotos();
  } catch (error) {}
}

// Chack to see if scrolling near bottom of page, Load more photos
window.addEventListener('scroll', () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
    ready
  ) {
    ready = false;
    getPhotos();
    console.log('load more');
  }
});

//On load
getPhotos();
