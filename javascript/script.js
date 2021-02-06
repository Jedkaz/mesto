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
  imgPreview = document.querySelector('.preview-card'),
  imglink = document.querySelector('.preview-card__picture'),
  imgCaption = document.querySelector('.preview-card__caption'),
  newCardLink = document.querySelector('.new-card__text_link'),
  previewCloseBtn = document.querySelector('.preview-card__button-close');
 // const activeOverley = document.querySelector('.popup_active');

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
  initialCards.forEach(createCard);
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  autor.textContent = nameInput.value;
  jobeDescr.textContent = jobeInput.value;
  closeForm(overlay);
}

function createCard(cards) {
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

  createCard(newCard);
  addingCardClose();
  
}


function addingUserForm() {
  openModal(overlay);
  nameInput.value = autor.textContent;
  jobeInput.value = jobeDescr.textContent;
}

function addingCardForm() {
  openModal(cardOverlay);
  newCardName.value = "Название";
  newCardLink.value = "Ссылка на картинку";
}

//------------------------------------------------------


// overlay.addEventListener('click', function (evt) {
//   if (evt.target === evt.currentTarget) {
//     closePopup(overlay)
//   };
// });

function closeByClick (evt) {
    if (evt.target === evt.currentTarget) {
      const popUpActive = document.querySelector('.popup_active'); 
    closeForm(popUpActive);
  }
}

//-----------------------------------------------------------

function addingCardClose() {
  closeForm(cardOverlay);
}

function userformClose() {
  closeForm(overlay);
}

function closingPreview() {
  closeForm(imgPreview);
}

function closePopupByEsc(evt) {
  if (evt.key === "Escape") {
    const popUpActive = document.querySelector('.popup_active');
    closeForm(popUpActive);
  }
}

function openModal(item) {
  item.classList.add('popup_active');
  document.addEventListener('keydown', closePopupByEsc);
  document.addEventListener('mousedown', closeByClick);
  
}

function closeForm(item) {
  item.classList.remove('popup_active');
  document.removeEventListener('keydown', closePopupByEsc);
  document.removeEventListener('mousedown', closeByClick);
}


function addingCardClose() {
  closeForm(cardOverlay);
}

// function userformClose() {
//   closeForm(overlay);
// }

function closingPreview() {
  closeForm(imgPreview);
}


openButton.addEventListener('click', addingUserForm);
closeButton.addEventListener('click', userformClose);
formElement.addEventListener('submit', handleFormSubmit);
newCardButton.addEventListener('click', addingCardForm);
cardCloseButton.addEventListener('click', addingCardClose);
previewCloseBtn.addEventListener('click', closingPreview);
cardOverlay.addEventListener('submit', handleCardSubmit);

render();



// //------------------------------------------------------------------------------------




// // Функция isValid теперь принимает formElement и inputElement,
// // а не берёт их из внешней области видимости

// const isValid = (formElement, inputElement) => {
//   if (!inputElement.validity.valid) {
//     // showInputError теперь получает параметром форму, в которой
//     // находится проверяемое поле, и само это поле
//     showInputError(formElement, inputElement, inputElement.validationMessage);
//   } else {
//     // hideInputError теперь получает параметром форму, в которой
//     // находится проверяемое поле, и само это поле
//     hideInputError(formElement, inputElement);
//   }
// }; 


// const showInputError = (formElement, inputElement, errorMessage) => {
//   // Находим элемент ошибки внутри самой функции
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   // Остальной код такой же
//   inputElement.classList.add('form__input_type_error');
//   errorElement.textContent = errorMessage;
//   errorElement.classList.add('form__input-error_active');
// };

// const hideInputError = (formElement, inputElement) => {
//   // Находим элемент ошибки
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   // Остальной код такой же
//   inputElement.classList.remove('form__input_type_error');
//   errorElement.classList.remove('form__input-error_active');
//   errorElement.textContent = '';
// }; 



// const setEventListeners = (formElement) => {
//   // Находим все поля внутри формы,
//   // сделаем из них массив методом Array.from
//   const inputList = Array.from(formElement.querySelectorAll('.form__input'));

//   // Обойдём все элементы полученной коллекции
//   inputList.forEach((inputElement) => {
//     // каждому полю добавим обработчик события input
//     inputElement.addEventListener('input', () => {
//       // Внутри колбэка вызовем isValid,
//       // передав ей форму и проверяемый элемент
//       isValid(formElement, inputElement)
//     });
//   });
// }; 


// const enableValidation = () => {
//   // Найдём все формы с указанным классом в DOM,
//   // сделаем из них массив методом Array.from
//   const formList = Array.from(document.querySelectorAll('.form'));

//   // Переберём полученную коллекцию
//   formList.forEach((formElement) => {
//     formElement.addEventListener('submit', (evt) => {
//       // У каждой формы отменим стандартное поведение
//       evt.preventDefault();
//     });

//     // Для каждой формы вызовем функцию setEventListeners,
//     // передав ей элемент формы
//     setEventListeners(formElement);
//   });
// };

// // Вызовем функцию
// enableValidation(); 



// // enableValidation({
// //   formSelector: '.popup__form',
// //   inputSelector: '.popup__input',
// //   submitButtonSelector: '.popup__button',
// //   inactiveButtonClass: 'popup__button-save_inactive',
// //   inputErrorClass: 'popup__input_type_error',
// //   //errorClass: 'popup__error_visible'
// // });



