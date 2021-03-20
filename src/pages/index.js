'use strict';


import Card from '../components/Сard.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import Popup from '../components/Popup.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import '../pages/index.css';

export const ESC = 'Escape';

const openButton = document.querySelector('.user__edit-profile'),
  userPopup = document.querySelector('.popup-user'),
  autor = document.querySelector('.user__title'),
  jobeDescr = document.querySelector('.user__profession'),
  nameInput = document.querySelector('.popup__text_name'),
  jobeInput = document.querySelector('.popup__text_description'),
  cardOverlay = document.querySelector('.new-card'),
  newCardButton = document.querySelector('.user__add-item'),
  newCardElement = document.querySelector('.new-card__field'),
  imgPreview = document.querySelector('.preview-card'),
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
const openImgPopup = new PopupWithImage(imgPreview);
const authorInfo = new UserInfo(autor, jobeDescr);
const ownerForm = new PopupWithForm(userPopup, (data) => {
  handleFormSubmit(data);
});

const cardForm = new PopupWithForm(cardOverlay, (data) => {
  handleCardSubmit(data);
});

const cardList = new Section({
    items: initialCards,
    renderer: (cards) => {
      const dataCard = new Card(cards, handlePreview, templateData);
      const cardElement = dataCard.generateCard();
      cardList.addingCard(cardElement);
    },
  },
  cardsContainer
);

function handleFormSubmit(data) {
  authorInfo.setUserInfo(data);
}

function handleCardSubmit(formData) {
  const newCard = {
    name: formData.name,
    link: formData.link
  };
  const dataCard = new Card(newCard, handlePreview, templateData);
  const cardElement = dataCard.generateCard();
  cardList.addingCard(cardElement);
  const addCardSubmitButton = newCardElement.querySelector('.popup__button');
  addCardSubmitButton.classList.add('popup__button_disabled');
}

function handlePreview(cardData) {
  openImgPopup.open(cardData);
}

function addUserForm() {
  const info = authorInfo.getUserInfo();
  nameInput.value = info.name;
  jobeInput.value = info.about;
  ownerForm.open();
  userValidate.resetValidation();
}

function addCardForm() {
  cardForm.open();
  cardValidate.resetValidation();
}

userValidate.enableValidation();
cardValidate.enableValidation();
ownerForm.setEventListeners();
cardForm.setEventListeners();

openButton.addEventListener('click', addUserForm);
newCardButton.addEventListener('click', addCardForm);

cardList.renderer();
