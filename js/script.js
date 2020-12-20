
let openButton = document.querySelector('.cards__edit-profile');
let overlay = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__button-close');

openButton.addEventListener('click', () => {
  console.log("cliked");
  overlay.style.display = 'flex';
});


closeButton.addEventListener('click', () => {
  console.log("cliked");
  overlay.style.display = 'none';
});
