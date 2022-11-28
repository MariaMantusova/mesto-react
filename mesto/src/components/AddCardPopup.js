import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddCardPopup(props) {
    return(
        <PopupWithForm name="add-card" title="Новое место" buttonText="Создать"
                       isOpen={props.isOpen} onClose={props.onClose}>
            <input type="text" id="add-card-input-title" name="name"
                   className="popup__item popup__item_el_title"
                   placeholder="Название" minLength="2" maxLength="30" required/>
            <span className="add-card-input-title-error popup__item-error"></span>
            <input type="url" id="add-card-input-link" name="link"
                   className="popup__item popup__item_el_image"
                   placeholder="Ссылка на картинку" required/>
            <span className="add-card-input-link-error popup__item-error"></span>
        </PopupWithForm>
    )
}

export default AddCardPopup;