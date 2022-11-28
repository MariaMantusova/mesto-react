import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
    return (
        <PopupWithForm name="edit-photo" title="Обновить аватар" buttonText="Сохранить"
                       isOpen={props.isOpen} onClose={props.onClose}>
            <input type="url" id="edit-photo-input-link" name="avatar"
                   className="popup__item popup__item_el_image"
                   placeholder="Ссылка на аватар" required/>
            <span className="edit-photo-input-link-error popup__item-error"></span>
        </PopupWithForm>
    )

}

export default EditAvatarPopup