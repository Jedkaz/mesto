'use strict';
import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector, name, link, { imgLink, imgCaption } ) {
    super(popupSelector);
    this._imgLink = imgLink;
    this._imgCaption = imgCaption;
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