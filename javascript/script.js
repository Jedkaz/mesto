let openButton = document.querySelector('.user__edit-profile'),
    overlay = document.querySelector('.popup'),
    closeButton = overlay.querySelector('.popup__button-close'),
    autor = document.querySelector('.user__title'),
    jobeDescr = document.querySelector('.user__profession'),
    nameInput = document.querySelector('.popup__text_name'),
    jobeInput = document.querySelector('.popup__text_description'),
    formElement = overlay.querySelector('.popup__field');

function openForm() {
  overlay.classList.add('popup_active');
  nameInput.value = autor.textContent;
  jobeInput.value = jobeDescr.textContent;
}

function closeForm() {
  overlay.classList.remove('popup__active');
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  autor.textContent = nameInput.value;
  jobeDescr.textContent = jobeInput.value;
  overlay.classList.remove('popup_active');
}

openButton.addEventListener('click', openForm);
closeButton.addEventListener('click', closeForm);
formElement.addEventListener('submit', handleFormSubmit);
