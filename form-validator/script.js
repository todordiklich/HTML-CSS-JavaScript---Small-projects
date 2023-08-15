const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordMatch = false;

function changeMessage(text, isError = true) {
  message.textContent = text;
  if (isError) {
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
  } else {
    message.style.color = 'green';
    messageContainer.style.borderColor = 'green';
  }
}

function validateForm() {
  // Using Constraint API
  isValid = form.checkValidity();
  // Style main message for an error
  if (!isValid) {
    changeMessage('Please fill out all fields.');
    return;
  }
  // Check if passwords match
  if (password1El.value === password2El.value) {
    passwordMatch = true;
    password1El.style.borderColor = 'green';
    password2El.style.borderColor = 'green';
  } else {
    passwordMatch = false;
    changeMessage('Make sure passwords match.');
    password1El.style.borderColor = 'red';
    password2El.style.borderColor = 'red';
    return;
  }

  // If form is valid and passwords match
  if (isValid && passwordMatch) {
    changeMessage('Successfully Registered!', false);
  }
}

function storeFormData() {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };

  console.log(user);
}

function processFormData(e) {
  e.preventDefault();
  // Validate Form
  validateForm();

  // Submit Data if valid
  if (isValid && passwordMatch) {
    storeFormData();
  }
}

// Event Listener
form.addEventListener('submit', processFormData);
