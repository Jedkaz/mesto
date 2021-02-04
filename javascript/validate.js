

// Функция isValid теперь принимает formElement и inputElement,
// а не берёт их из внешней области видимости

const isValid = (formSelector, inputSelector) => {
  if (!inputSelector.validity.valid) {
    // showInputError теперь получает параметром форму, в которой
    // находится проверяемое поле, и само это поле
    showInputError(formSelector, inputSelector, inputSelector.validationMessage);
  } else {
    // hideInputError теперь получает параметром форму, в которой
    // находится проверяемое поле, и само это поле
    hideInputError(formSelector, inputSelector);
  }
}; 


const showInputError = (formSelector, inputSelector, errorMessage) => {
  // Находим элемент ошибки внутри самой функции
  const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);
  // Остальной код такой же
  inputSelector.classList.add('popup__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__input-error_active');
};

const hideInputError = (formSelector, inputSelector) => {
  // Находим элемент ошибки
  const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);
  // Остальной код такой же
  inputSelector.classList.remove('popup__input_type_error');
  errorElement.classList.remove('popup__input-error_active');
  errorElement.textContent = '';
}; 



const setEventListeners = (formSelector) => {
  // Находим все поля внутри формы,
  // сделаем из них массив методом Array.from
  const inputList = Array.from(formSelector.querySelectorAll('.popup__input'));

  // Обойдём все элементы полученной коллекции
  inputList.forEach((inputSelector) => {
    // каждому полю добавим обработчик события input
    inputSelector.addEventListener('input', () => {
      // Внутри колбэка вызовем isValid,
      // передав ей форму и проверяемый элемент
      isValid(formSelector, inputSelector)
    });
  });
}; 


const enableValidation = () => {
  // Найдём все формы с указанным классом в DOM,
  // сделаем из них массив методом Array.from
  //const formList = Array.from(document.formSelector);
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  // Переберём полученную коллекцию
  formList.forEach((formSelector) => {
    formSelector.addEventListener('submit', (evt) => {
      // У каждой формы отменим стандартное поведение
      evt.preventDefault();
    });

    // Для каждой формы вызовем функцию setEventListeners,
    // передав ей элемент формы
    setEventListeners(formSelector);
  });
};

// Вызовем функцию
//enableValidation(); 



enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button-save_inactive',
  inputErrorClass: 'popup__input_type_error',
  //errorClass: 'popup__error_visible'
});