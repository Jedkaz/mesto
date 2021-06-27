'use strict';

const apiConfig = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-24/',
  headers: {
    authorization: '7aeca446-1489-41b5-a34a-aad5b40673a1',
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
  templateData, formConfig, avaImg
} from '../utils/constants.js';
//import { forEach } from 'core-js/core/array';

const api = new Api(apiConfig);
const userValidate = new FormValidator(formConfig, userForm);
const cardValidate = new FormValidator(formConfig, newCardForm);
const openImgPopup = new PopupWithImage(imgPreview);
const authorInfo = new UserInfo(autor, jobeDescr, avaImg);
const ownerForm = new PopupWithForm(userPopup, (data) => {
  handleFormSubmit(data);
});

const cardForm = new PopupWithForm(cardOverlay, (data) => {
  handleCardSubmit(data);
});



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
 api.getUserData().then(data => authorInfo.setUserInfo(data));



 function handleCardSubmit(formData) {
   const newCard = {
     name: formData.name,
     link: formData.link,
     //owner: formData.owner,
     //likes: formData.likes,
     //cardId: formData._id
   };
   api.postUserCard(newCard).then(cardData => {
     const dataCard = new Card(cardData, handlePreview, templateData);
     const cardElement = dataCard.generateCard();
     cardList.addingCard(cardElement);
     
   });
   const addCardSubmitButton = newCardElement.querySelector('.popup__button');
   addCardSubmitButton.classList.add('popup__button_disabled');

 }












// function handleCardSubmit(formData) {
//   const newCard = {
//     name: formData.name,
//     link: formData.link,
//     // owner: formData.owner,
//     likes: '',
//     // cardId: formData._id
//   };
//  // const dataCard = new Card(newCard, handlePreview, templateData);
//  // const cardElement = dataCard.generateCard();
//   api.postUserCard(newCard)
//   .then(data => cardList.addingCard(data)); 

//   //cardList.addingCard(cardElement); /// !!!!!!!!!!!!!!!!!!!!!!!
  
//   const addCardSubmitButton = newCardElement.querySelector('.popup__button');
//   addCardSubmitButton.classList.add('popup__button_disabled');
// }

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


