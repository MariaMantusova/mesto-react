import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(null);

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setAddPlacePopupOpen(true);
    }

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    function handleCardClick(card) {
        setSelectedCard(card);
    }

    function closeAllPopups() {
        setIsEditProfilePopupOpen(false);
        setAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setSelectedCard(null);
    }

    return (
        <div className="page">
            <Header/>
            <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick}
                  onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>
            <Footer/>

            <ImagePopup card={selectedCard} onclose={closeAllPopups}/>

            <PopupWithForm name="confirm" title="Вы уверены?" buttonText="Да"/>

            <PopupWithForm name="profile-info" title="Редактировать профиль" buttonText="Сохранить"
                           isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
                <input type="text" id="profile-info-input-name" name="name"
                       className="popup__item popup__item_el_name"
                       placeholder="Имя пользователя" minLength="2" maxLength="40" required/>
                <span className="profile-info-input-name-error popup__item-error"></span>
                <input type="text" id="profile-info-input-job" name="job"
                       className="popup__item popup__item_el_job"
                       placeholder="Род деятельности" minLength="2" maxLength="200" required/>
                <span className="profile-info-input-job-error popup__item-error"></span>
            </PopupWithForm>

            <PopupWithForm name="add-card" title="Новое место" buttonText="Создать"
                           isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
                <input type="text" id="add-card-input-title" name="name"
                       className="popup__item popup__item_el_title"
                       placeholder="Название" minLength="2" maxLength="30" required/>
                <span className="add-card-input-title-error popup__item-error"></span>
                <input type="url" id="add-card-input-link" name="link"
                       className="popup__item popup__item_el_image"
                       placeholder="Ссылка на картинку" required/>
                <span className="add-card-input-link-error popup__item-error"></span>
            </PopupWithForm>

            <PopupWithForm name="edit-photo" title="Обновить аватар" buttonText="Сохранить"
                           isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
                <input type="url" id="edit-photo-input-link" name="avatar"
                       className="popup__item popup__item_el_image"
                       placeholder="Ссылка на аватар" required/>
                <span className="edit-photo-input-link-error popup__item-error"></span>
            </PopupWithForm>
        </div>
    )

}

export default App;
