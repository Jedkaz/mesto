'use strict';

import Card from './Сard.js';
import FormValidator from './FormValidator.js';
import Section from './Section.js';

const openButton = document.querySelector('.user__edit-profile'),
  formList = document.querySelectorAll('.popup__form'),
  userPopup = document.querySelector('.popup-user'),
  closeButton = document.querySelector('.popup__button-close'),
  autor = document.querySelector('.user__title'),
  jobeDescr = document.querySelector('.user__profession'),
  nameInput = document.querySelector('.popup__text_name'),
  jobeInput = document.querySelector('.popup__text_description'),
  formElement = document.querySelector('.popup__field'),
  cardOverlay = document.querySelector('.new-card'),
  newCardButton = document.querySelector('.user__add-item'),
  cardCloseButton = document.querySelector('.new-card__button-close'),
  newCardName = document.querySelector('.new-card__text_name'),
  newCardElement = document.querySelector('.new-card__field'),
  newCardLink = document.querySelector('.new-card__text_link'),
  previewCloseBtn = document.querySelector('.preview-card__button-close'),
  imgPreview = document.querySelector('.preview-card'),
  imglink = document.querySelector('.preview-card__picture'),
  imgCaption = document.querySelector('.preview-card__caption'),
  cardsContainer = document.querySelector('.cards__container'),
  userForm = document.querySelector('.popup__field'),
  newCardForm = document.querySelector('.new-card__field'),
  templateData = document.querySelector('.cards__template').content;

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


const formConfig = ({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input_error_active'
});
const initialCards = cards.reverse();

const userValidate = new FormValidator(formConfig, userForm);
const cardValidate = new FormValidator(formConfig, newCardForm);
//const dataCard = new Card(initialCards, handlePreview, templateData);


//---------------------------------------

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
   const dataCard = new Card(cards, handlePreview, templateData);
   const cardElement = dataCard.generateCard();
   createCard(cardElement);
  },
  cardsContainer
});


cardList.renderer();

//---------------------------------------------


// function render() {
//   initialCards.forEach(renderCard);
// }

// function createCard(cards) {
//   cardsContainer.prepend(cards);
// }

// function renderCard(cards) {
//   const dataCard = new Card(cards, handlePreview, templateData);
//   const cardElement = dataCard.generateCard();
//   createCard(cardElement);
// }

function handleFormSubmit(evt) {
  evt.preventDefault();
  autor.textContent = nameInput.value;
  jobeDescr.textContent = jobeInput.value;
  closeModal(userPopup);

}

function handleCardSubmit(evt) {
  evt.preventDefault();
  const newCard = {
    name: newCardName.value,
    link: newCardLink.value
  };
  renderCard(newCard);
  addCardClose();
  const addCardSubmitButton = newCardElement.querySelector('.popup__button');
  addCardSubmitButton.classList.add('popup__button_disabled');
  newCardElement.reset();
}

function handlePreview(name, link) {
  imglink.src = link;
  imgCaption.textContent = name;
  openModal(imgPreview);
}

function addUserForm() {
  openModal(userPopup);
  nameInput.value = autor.textContent;
  jobeInput.value = jobeDescr.textContent;
  userValidate.resetValidation();
}

function addCardForm() {
  openModal(cardOverlay);
  cardValidate.resetValidation();
}


function closeByClick(evt) {
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


userValidate.enableValidation();
cardValidate.enableValidation();



openButton.addEventListener('click', addUserForm);
closeButton.addEventListener('click', userformClose);
formElement.addEventListener('submit', handleFormSubmit);
newCardButton.addEventListener('click', addCardForm);
cardCloseButton.addEventListener('click', addCardClose);
previewCloseBtn.addEventListener('click', closingPreview);
cardOverlay.addEventListener('submit', handleCardSubmit);

//render();
