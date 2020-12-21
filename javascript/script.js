
let openButton = document.querySelector('.cards__edit-profile');
let overlay = document.querySelector('.popup');
let closeButton = overlay.querySelector('.popup__button-close');

openButton.addEventListener('click', () => {
  console.log("cliked");
  overlay.classList.add('popup_active');
});


closeButton.addEventListener('click', () => {
  console.log("cliked");
  overlay.classList.remove ('popup_active');
});



let formField = overlay.querySelector('.popup__field');

formField.addEventListener('submit', event => {
  event.preventDefault();
  console.log('submit');

  let nameInput = document.querySelector('.popup__text_name');
  let jobeInput = overlay.querySelector('.popup__text_description');
  
  let ownerName = document.querySelector('.cards__title');
  let ownerDescription = document.querySelector('.cards__profession');
  
  ownerName.textContent = nameInput.value;
  ownerDescription.textContent = jobeInput.value;


});

formField.addEventListener('submit', formField);
/*
function handleFormSubmit (evt) {
  evt.preventDefault();
  let nameInput = document.querySelector('.popup__text_name');
  let jobeInput = overlay.querySelector('.popup__text_description');
  console.log('nameInput');

  nameInput.value();
  jobeInput.value();

  let ownerName = document.querySelector('.cards__title');
  let ownerDescription = document.querySelector('.cards__profession');

  ownerName.textContent = nameInput.value;
  ownerDescription.textContent = jobeInput.value;


}

formField.addEventListener('submit', handleFormSubmit);

*/