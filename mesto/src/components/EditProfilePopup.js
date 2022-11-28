import React from "react";

function EditProfilePopup(props) {
    return(
        <div className={`popup popup_theme_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__container">
                <button type="button"
                        className="popup__button-close" onClick={props.onClose}></button>
                <h2 className="popup__title">Редактировать профиль</h2>
                <form className="popup__form" name="profile-info" noValidate>
                    <input type="text" id="profile-info-input-name" name="name"
                           className="popup__item popup__item_el_name"
                           placeholder="Имя пользователя" minLength="2" maxLength="40" required/>
                    <span className="profile-info-input-name-error popup__item-error"></span>
                    <input type="text" id="profile-info-input-job" name="job"
                           className="popup__item popup__item_el_job"
                           placeholder="Род деятельности" minLength="2" maxLength="200" required/>
                    <span className="profile-info-input-job-error popup__item-error"></span>
                    <button className="popup__button popup__button_theme_edit-photo" onSubmit={props.onClose}>
                        Сохранить
                    </button>
                </form>
            </div>
        </div>
    )
}

export default EditProfilePopup;