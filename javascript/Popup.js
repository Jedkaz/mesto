const imgPreview = document.querySelector('.preview-card');

export default class Popup {

  constructor( popupSelector ) {
    this._popupSelector = popupSelector;
    this._buttonClose = this._popupSelector.querySelector('.popup__button-close');

    //this._popup = this._popupSelector.querySelector('.popup');
  }

    open() {
    this._popupSelector.classList.add('popup_active');
    this._handleEscClose(this._popupSelector);
   // this._popUpActive = this._popupSelector.querySelector('.popup_active');
  }

    close() {
     this._popupSelector.classList.remove('popup_active');
    }

    _handleEscClose() {
      this._popUpActive = document.querySelector('.popup_active');
      document.addEventListener('keydown',  (evt) => {
      if (evt.key === "Escape" && this._popUpActive != null) {
        this.close();
       }



     });




  }

  setEventListeners() {

    this._buttonClose.addEventListener('click', () => {
      this.close();
    });




  }


  // function closePopupByEsc(evt) {
  //   const popUpActive = document.querySelector('.popup_active');
  //   if (evt.key === "Escape" && popUpActive != null) {
  //     closeModal(popUpActive);
  //   }
  // }





    //this._buttonClose.addEventListener('click', this.close.bind(this));







}



// class Popup {
//   constructor(element) {
//       this.element = element;
//       this.element
//           .querySelector('.popup__close')
//           .addEventListener('click', this.close)
//   }

//   open() {
//       if (evt.target.classList.contains('user-info__button')) {
//           this.element.classList.add('popup_is-opened');
//       }
//       if (et.target.matches("#user-info__button-edit")) {
//           this.element.classList.add('popup_is-opened');
//           inputTypeName.value = userInfoName.textContent;
//           inputTypeLink.value = userInfoJob.textContent;
//       }
//   }

//   close() {
//       evt.target.closest('.popup').classList.remove('popup_is-opened');

//       //обнуляем данные в форме "новая карточка"
//       document.forms.new.reset();

//       //скрываем ошибки
//       hideError(document.querySelector(`#error-name`));
//       hideError(document.querySelector(`#error-link`));
//       hideError(document.querySelector(`#error-user-name`));
//       hideError(document.querySelector(`#error-user-about`));
//   }
// }
