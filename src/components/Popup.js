'use strict';
import {ESC} from '../pages/index.js';

export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._buttonClose = this._popupSelector.querySelector('.popup__button-close');
    this._handleEscClose = this._handleEscClose.bind(this);
    this._handleClickClose = this._handleClickClose.bind(this);
  }

  open() {
    this._popupSelector.classList.add('popup_active');
   document.addEventListener('keydown', this._handleEscClose);
   document.addEventListener('mousedown', this._handleClickClose);

  }

  close() {
    this._popupSelector.classList.remove('popup_active');
   document.removeEventListener('keydown', this._handleEscClose);
   document.removeEventListener('mousedown', this._handleClickClose);
  }


  _handleEscClose(evt) {
    if (evt.code === ESC) {
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
