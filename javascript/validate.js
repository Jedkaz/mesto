'use strict';

class FormValidator { 
  constructor(config, formElement){
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector; 
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;

  }

  
//--------------------------
 
//-----------------------------------------------------------------

  _isValid (inputElement)  {
  if (!inputElement.validity.valid) {
    this._showInputError(inputElement, inputElement.validationMessage);
  } else {
    this._hideInputError(inputElement);
  }
}

  _showInputError (formElement, inputElement, errorMessage, config)  {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(this._inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(this._errorClass);
}

  _hideInputError (formElement, inputElement, config) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(this._inputErrorClass);
  errorElement.classList.remove(this._errorClass);
  errorElement.textContent = '';
}

  _setEventListeners  ()  {
  const inputList = Array.from(this._formSelector.querySelectorAll(this._inputSelector));
  console.log(inputList);
  const buttonElement = this._formSelector.querySelector(this._submitButtonSelector);
   this._toggleButtonState(inputList, buttonElement);
   inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
     this._isValid(inputElement);
     this._toggleButtonState(inputList, buttonElement);

    });
  });
}




  _hasInvalidInput  (inputList)  {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

  _toggleButtonState  (inputList, buttonElement, config)  {
  if (this._hasInvalidInput(inputList, config)) {
    buttonElement.disabled = 'disabled';
    buttonElement.classList.add(this._inactiveButtonClass);
    } else {
    buttonElement.disabled = '';
    buttonElement.classList.remove(this._inactiveButtonClass);
  }
}

   enableValidation  (config)  {
  const formList = Array.from(document.querySelectorAll(this._formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();

    });

    this._setEventListeners(formElement, config);
  


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


const formValidate = new FormValidator(formValidation);
formValidate.enableValidation();

//enableValidation();































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











