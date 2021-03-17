'use strict';

export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._buttonClose = this._popupSelector.querySelector('.popup__button-close');

  }

  open() {
    this._popupSelector.classList.add('popup_active');
   document.addEventListener('keydown', this._handleEscClose.bind(this));
   document.addEventListener('mousedown', this._handleClickClose.bind(this));

  }

  close() {
    this._popupSelector.classList.remove('popup_active');
   document.removeEventListener('keydown', this._handleEscClose.bind(this));
   document.removeEventListener('mousedown', this._handleClickClose.bind(this));
  }


  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }
  _handleClickClose(evt) {
    this._popUpActive = document.querySelector('.popup_active');
    if (evt.target === this._popUpActive) {
      this.close();
    }

  }


  setEventListeners() {
    this._buttonClose.addEventListener('click', () => {
      this.close();
    });
  }

}
