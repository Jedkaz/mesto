'use strict';
const openButton = document.querySelector('.user__edit-profile'),
  overlay = document.querySelector('.popup'),
  closeButton = overlay.querySelector('.popup__button-close'),
  autor = document.querySelector('.user__title'),
  jobeDescr = document.querySelector('.user__profession'),
  nameInput = document.querySelector('.popup__text_name'),
  jobeInput = document.querySelector('.popup__text_description'),
  formElement = overlay.querySelector('.popup__field'),
  cardsContainer = document.querySelector('.cards__container'),
  cardsTemplate = document.querySelector('.cards__template').content,
  cardOverlay = document.querySelector('.new-card'),
  newCardButton = document.querySelector('.user__add-item'),
  cardCloseButton = document.querySelector('.new-card__button-close'),
  newCardName = document.querySelector('.new-card__text_name'),
  newCardElement = document.querySelector('.new-card__field'),
  //cardSaveButton = cardOverlay,
  imgPreview = document.querySelector('.preview-card'),
  imglink = document.querySelector('.preview-card__picture'),
  imgCaption = document.querySelector('.preview-card__caption'),
  newCardLink = document.querySelector('.new-card__text_link'),
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
  initialCards.forEach(createCards);
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  autor.textContent = nameInput.value;
  jobeDescr.textContent = jobeInput.value;
  overlay.classList.remove('popup_active');
}

function createCards(cards) {
  const cardsElement = cardsTemplate.cloneNode(true);
  cardsElement.querySelector('.cards__item-picture').src = cards.link;
  cardsElement.querySelector('.cards__item-picture').alt = cards.name;
  cardsElement.querySelector('.cards__item-heading').textContent = cards.name;

  setListeners(cardsElement);
  cardsContainer.prepend(cardsElement);
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
  imgPreview.classList.add('preview-card_active');
  imglink.src = evt.target.src;
  imgCaption.textContent = evt.target.alt;
}

function closingPreview() {
  imgPreview.classList.remove('preview-card_active');
}

function handleCardSubmit(evt) {
  evt.preventDefault();
  const newCard = {
    name: newCardName.value,
    link: newCardLink.value
  };

  createCards(newCard);
  addingCardClose();
}

function addingCardForm() {
  cardOverlay.classList.add('new-card_active');
  newCardName.value = "Название";
  newCardLink.value = "Ссылка на картинку";
}

function addingCardClose() {
  cardOverlay.classList.remove('new-card_active');
}

function openForm() {
  overlay.classList.add('popup_active');
  nameInput.value = autor.textContent;
  jobeInput.value = jobeDescr.textContent;
}

function closeForm() {
  overlay.classList.remove('popup_active');
}

openButton.addEventListener('click', openForm);
closeButton.addEventListener('click', closeForm);
formElement.addEventListener('submit', handleFormSubmit);
newCardButton.addEventListener('click', addingCardForm);
cardCloseButton.addEventListener('click', addingCardClose);
previewCloseBtn.addEventListener('click', closingPreview);
cardOverlay.addEventListener('submit', handleCardSubmit);

render();






function openProfileModal() {
  openModal(profileModal);
  profileInput.value = '';
  // ...
} 