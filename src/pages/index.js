'use strict';


import Card from '../components/Сard.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import Popup from '../components/Popup.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import '../pages/index.css';

import {
  openButton, userPopup, autor, jobeDescr, nameInput, jobeInput, cardOverlay,
  newCardButton, newCardElement, imgPreview, cardsContainer, userForm, newCardForm,
  templateData, cards, formConfig 
} from '../utils/constants.js';

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
