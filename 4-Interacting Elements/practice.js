
// click
document.querySelector('#login').click();

// double click
document.querySelector('.edit > label').dispatchEvent(new Event('dblclick', {'bubbles':true}));

// hash
location.hash = "/login"
location.hash = "/register"
location.hash = "/"

// enter values
document.querySelector('input#username').value="ganeshk627";
document.querySelector('input#username').dispatchEvent(new Event('change', {'bubbles':true}));

// remove focus after re-entering value
document.querySelector('.edit').dispatchEvent(new Event('blur'));

