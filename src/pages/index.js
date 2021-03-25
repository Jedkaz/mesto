'use strict';

const config = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-21/',
  headers: {
    authorization: '0839d508-7d69-4143-bca5-773ed4487ac0',
    'Content-Type': 'application/json'
  },
};


import Card from '../components/Сard.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import Popup from '../components/Popup.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import '../pages/index.css';

import {
  openButton, userPopup, autor, jobeDescr, nameInput, jobeInput, cardOverlay,
  newCardButton, newCardElement, imgPreview, cardsContainer, userForm, newCardForm,
  templateData, formConfig
} from '../utils/constants.js';
//import { forEach } from 'core-js/core/array';

const api = new Api(config);
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

// function getServCard() {
//  const initialCards = servApi.getInitialCards();
//  return initialCards;
// }




const cardList = new Section({
  items:[], 
     renderer: (cards) => {
      const dataCard = new Card(cards, handlePreview, templateData);
      const cardElement = dataCard.generateCard();
      cardList.addingCard(cardElement);
    },
  },
  cardsContainer);

  api.getInitialCards().then(data => cardList.renderer(data));
  



function handleCardSubmit(formData) {
  const newCard = {
    name: formData.name,
    link: formData.link
  };
  const dataCard = new Card(newCard, handlePreview, templateData);
  const cardElement = dataCard.generateCard();
  cardList.addingCard(cardElement); /// !!!!!!!!!!!!!!!!!!!!!!!
  const addCardSubmitButton = newCardElement.querySelector('.popup__button');
  addCardSubmitButton.classList.add('popup__button_disabled');
}

function handleFormSubmit(data) {
  authorInfo.setUserInfo(data);
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

// function render() {
//   const cards = servApi.getInitialCards();
//   cardList.renderer(cards);

// }

//render();
//  servApi.getInitialCards((data) =>
//  cardList.renderer(data));
//debugger;

//cardList.renderer();

//console.log(Api.api);


