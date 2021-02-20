'use strict';
























const openButton = document.querySelector('.user__edit-profile'),
  userPopup = document.querySelector('.popup-user'),
  closeButton = document.querySelector('.popup__button-close'),
  autor = document.querySelector('.user__title'),
  jobeDescr = document.querySelector('.user__profession'),
  nameInput = document.querySelector('.popup__text_name'),
  jobeInput = document.querySelector('.popup__text_description'),
  formElement = document.querySelector('.popup__field'),
  cardsContainer = document.querySelector('.cards__container'),
  cardsTemplate = document.querySelector('.cards__template').content,
  cardOverlay = document.querySelector('.new-card'),
  newCardButton = document.querySelector('.user__add-item'),
  cardCloseButton = document.querySelector('.new-card__button-close'),
  newCardName = document.querySelector('.new-card__text_name'),
  newCardElement = document.querySelector('.new-card__field'),
  imgPreview = document.querySelector('.preview-card'),
  imglink = document.querySelector('.preview-card__picture'),
  imgCaption = document.querySelector('.preview-card__caption'),
  newCardLink = document.querySelector('.new-card__text_link'),
  newCardBtnsave = document.querySelector('.new-card__button-save'),
  previewCloseBtn = document.querySelector('.preview-card__button-close');


const cards = [{
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const initialCards = cards.reverse();

function render() {
  initialCards.forEach(renderCard);

}

function renderCard(cards) {
cardsContainer.prepend(createCard(cards));
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  autor.textContent = nameInput.value;
  jobeDescr.textContent = jobeInput.value;
  closeModal(userPopup);

}

function createCard(cards) {
  const cardsElement = cardsTemplate.cloneNode(true);
  cardsElement.querySelector('.cards__item-picture').src = cards.link;
  cardsElement.querySelector('.cards__item-picture').alt = cards.name;
  cardsElement.querySelector('.cards__item-heading').textContent = cards.name;
  setListeners(cardsElement);

  return cardsElement;
}



function setListeners(element) {

  element.querySelector('.cards__remoover').addEventListener('click', handleRemoover);
  element.querySelector('.cards__item-like').addEventListener('click', handleLike);
  element.querySelector('.cards__item-picture').addEventListener('click', handlePreview);
}

function handleRemoover(evt) {
  evt.target.closest('.cards__item').remove();
}

function handleLike(evt) {
  evt.target.classList.toggle('cards__item-like_active');
}

function handlePreview(evt) {
  openModal(imgPreview);
  imglink.src = evt.target.src;
  imgCaption.textContent = evt.target.alt;

}

function handleCardSubmit(evt) {
  evt.preventDefault();
  const newCard = {
    name: newCardName.value,
    link: newCardLink.value
  };
  renderCard(newCard);
  addCardClose();
  const addCardSubmitButton =  newCardElement.querySelector('.popup__button');
  addCardSubmitButton.classList.add('popup__button_disabled');
  newCardElement.reset();

}

function addUserForm() {
  openModal(userPopup);
  nameInput.value = autor.textContent;
  jobeInput.value = jobeDescr.textContent;

}


function addCardForm() {
  openModal(cardOverlay);
 
}


function closeByClick (evt) {
  const popUpActive = document.querySelector('.popup_active');
  if (evt.target === popUpActive) {
  closeModal(popUpActive);
  }
}

function addCardClose() {
  closeModal(cardOverlay);
}

function userformClose() {
  closeModal(userPopup);
}

function closingPreview() {
  closeModal(imgPreview);
}

function closePopupByEsc(evt) {
  const popUpActive = document.querySelector('.popup_active');
  if (evt.key === "Escape" && popUpActive != null) {
     closeModal(popUpActive);
  }
}

function openModal(item) {
  item.classList.add('popup_active');
  document.addEventListener('keydown', closePopupByEsc);
  document.addEventListener('mousedown', closeByClick);
  
}

function closeModal(item) {
  item.classList.remove('popup_active');
  document.removeEventListener('keydown', closePopupByEsc);
  document.removeEventListener('mousedown', closeByClick);
 
}


openButton.addEventListener('click', addUserForm);
closeButton.addEventListener('click', userformClose);
formElement.addEventListener('submit', handleFormSubmit);
newCardButton.addEventListener('click', addCardForm);
cardCloseButton.addEventListener('click', addCardClose);
previewCloseBtn.addEventListener('click', closingPreview);
cardOverlay.addEventListener('submit', handleCardSubmit);

render();


