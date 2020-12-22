let openButton = document.querySelector('.cards__edit-profile'),
  overlay = document.querySelector('.popup'),
  closeButton = overlay.querySelector('.popup__button-close'),
  autor = document.querySelector('.cards__title'),
  jobeDescr = document.querySelector('.cards__profession'),
  nameInput = document.querySelector('.popup__text_name'),
  jobeInput = document.querySelector('.popup__text_description');

openButton.addEventListener('click', () => {

  overlay.classList.add('popup_active');
  nameInput.value = autor.textContent;
  jobeInput.value = jobeDescr.textContent;
});


closeButton.addEventListener('click', () => {
  overlay.classList.remove('popup_active');
});


let formElement = overlay.querySelector('.popup__field');


function handleFormSubmit(evt) {

  evt.preventDefault();

  autor.textContent = nameInput.value;
  jobeDescr.textContent = jobeInput.value;
  overlay.classList.remove('popup_active');
  

}

formElement.addEventListener('submit', handleFormSubmit);

