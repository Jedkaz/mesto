'use strict';

export default class Popup {

  constructor( popupSelector ) {
    this._popupSelector = popupSelector;
    this._buttonClose = this._popupSelector.querySelector('.popup__button-close');
  }

    open() {
    this._popupSelector.classList.add('popup_active');
    this._handleEscClose(this._popupSelector);
   
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
}