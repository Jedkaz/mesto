'use strict';



// export default class FormValidator {
//   // в конструктор принимаем объект с селекторами формы и текущую форму
// 	constructor(data, formElement) {
//       // селекторы формы
// 	  this._formSelector = data.formSelector;
// 	  this._inputSelector = data.inputSelector;
// 	  this._submitButtonSelector = data.submitButtonSelector;
//       this._inactiveButtonClass = data.inactiveButtonClass;
//       this._inputErrorClass = data.inputErrorClass;
//       this._errorClass = data.errorClass;
//       this._fieldsSelector = data.fieldsSelector;
//       // текущее поле ввода
//       this._formElement = formElement;
//       // тут как раз ты используешь свою переменную из конструктора. получается, что в переменную ниже ты собираешь все поля ввода для текущей формы
//       this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));



class FormValidator { 
  constructor(config, formList){
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector; 
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._formElement = formList;
    //this._formElement = document.querySelector(formElement);
    //this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
console.log(this._formElement);
  }

  
//--------------------------
 
//-----------------------------------------------------------------

 
  _showInputError (inputElement, errorMessage)  {
  const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(this._inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(this._errorClass);
}

  _hideInputError (inputElement) {
  const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(this._inputErrorClass);
  errorElement.classList.remove(this._errorClass);
  errorElement.textContent = '';
}

  _setEventListeners  ()  {
  const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
  
  const buttonElement = this._formElement.querySelector(this._submitButtonSelector);
   this._toggleButtonState(inputList, buttonElement);
   inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
     this._isValid(inputElement);
     this._toggleButtonState(inputList, buttonElement);
        
    });
    
  });
}



_isValid (inputElement)  {
  if (!inputElement.validity.valid) {
    this._showInputError(inputElement, inputElement.validationMessage);
  } else {
    this._hideInputError(inputElement);
  }
}




  _hasInvalidInput  (inputList)  {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

  _toggleButtonState  (inputList, buttonElement)  {
  if (this._hasInvalidInput(inputList)) {
    buttonElement.disabled = 'disabled';
    buttonElement.classList.add(this._inactiveButtonClass);
    } else {
    buttonElement.disabled = '';
    buttonElement.classList.remove(this._inactiveButtonClass);
  }
}

   enableValidation  ()  {
  
  //const formList = Array.from(document.querySelectorAll('.popup__form'));
  const formList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
 
  formList.forEach((formElement) => {
     formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    this._setEventListeners(formElement);
     

  });

}



}


const formValidation = ({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input_error_active'
});

//const formList = document.querySelectorAll('.popup__form');
const formList = document.querySelectorAll('.popup__form');

formList.forEach((item) => {

  const formValidate = new FormValidator(formValidation, item);
  formValidate.enableValidation();
});

//formValidate.enableValidation();
//FormValidator.enableValidation();





// formList.forEach((item) => {
// 	const formValidator = new FormValidator(configValidation, item);
//   formValidator.enableValidation();
// });

























//-----------------------------------------------------------------

// const isValid = (formElement, inputElement, config) => {
//   if (!inputElement.validity.valid) {
//     showInputError(formElement, inputElement, inputElement.validationMessage, config);
//   } else {
//     hideInputError(formElement, inputElement, config);
//   }
// };

// const showInputError = (formElement, inputElement, errorMessage, config) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.add(config.inputErrorClass);
//   errorElement.textContent = errorMessage;
//   errorElement.classList.add(config.errorClass);
// };

// const hideInputError = (formElement, inputElement, config) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.remove(config.inputErrorClass);
//   errorElement.classList.remove(config.errorClass);
//   errorElement.textContent = '';
// };

// const setEventListeners = (formElement, config) => {
//   const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
//   const buttonElement = formElement.querySelector(config.submitButtonSelector);
//    toggleButtonState(inputList, buttonElement, config);
//    inputList.forEach((inputElement) => {
//     inputElement.addEventListener('input', () => {
//      isValid(formElement, inputElement, config);
//      toggleButtonState(inputList, buttonElement, config);

//     });
//   });
// };

// const hasInvalidInput = (inputList) => {
//   return inputList.some((inputElement) => {
//     return !inputElement.validity.valid;
//   });
// };

// const toggleButtonState = (inputList, buttonElement, config) => {
//   if (hasInvalidInput(inputList, config)) {
//     buttonElement.disabled = 'disabled';
//     buttonElement.classList.add(config.inactiveButtonClass);
//     } else {
//     buttonElement.disabled = '';
//     buttonElement.classList.remove(config.inactiveButtonClass);
//   }
// };

// const enableValidation = (config) => {
//   const formList = Array.from(document.querySelectorAll(config.formSelector));
//   formList.forEach((formElement) => {
//     formElement.addEventListener('submit', (evt) => {
//       evt.preventDefault();

//     });

//     setEventListeners(formElement, config);

//   });

// };











