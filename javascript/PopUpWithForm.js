'use strict';
import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector,  submitForm ) {
    super(popupSelector);
    
    this._form = popupSelector.querySelector('.popup__form');
    this._submitForm = submitForm;

  }

  _getInputValues() {
    this._inputList = Array.from(this._form.querySelectorAll('.popup__input'));
    this._inputs = {};
    this._inputList.forEach((input) => { this._inputs[input.name] = input.value; });
    return this._inputs;

  }

  setEventListeners(){
    super.setEventListeners();
    this._form.addEventListener('submit',  (evt) => {
    evt.preventDefault();
    const formData = this._getInputValues();
    this._submitForm(formData);
    this.close();
});



}

 open() {
   super.open();
   this.setEventListeners();
 }
 
close() {
  super.close();

}

}