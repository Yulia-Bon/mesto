import Popup from './Popup.js';
import {popupFullImage, popupFullFigcaption} from './index.js';

export class PopupWithImage extends Popup{
    constructor(popupSelector){
      super(popupSelector)
    }
    open({name, link}){
      popupFullImage.src = link;
      popupFullImage.alt = name;
      popupFullFigcaption.textContent = name;
      super.open();
    }
  
  }