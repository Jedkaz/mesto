'use strict';
import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector, name, link) {
    super(popupSelector);
    this._imgLink = popupSelector.querySelector('.preview-card__picture');
    this._imgCaption = popupSelector.querySelector('.preview-card__caption');
    this._name = name;
    this._link = link; 

  }

open(){
super.open();
super.setEventListeners();
this._imgLink.src = this._link;
this._imgCaption.textContent = this._name;


}


}