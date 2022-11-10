import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";

function App() {
    function handleEditProfileClick() {
        const popupEditProfileInfo = document.querySelector('.popup_theme_profile-info');
        popupEditProfileInfo.classList.add('popup_opened')
    }

    function handleEditAvatarClick() {
        const popupEditAvatar = document.querySelector('.popup_theme_edit-photo');
        popupEditAvatar.classList.add('popup_opened')
    }

    function handleAddPlaceClick() {
        const popupAddCard = document.querySelector('.popup_theme_add-card');
        popupAddCard.classList.add('popup_opened')
    }

    return (
        <div className="page">
            <Header/>
            <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick}
                  onEditAvatar={handleEditAvatarClick}/>
            <Footer/>

            <ImagePopup/>

            <PopupWithForm name="confirm" title="Вы уверены?" buttonText="Да"/>

            <PopupWithForm name="profile-info" title="Редактировать профиль" buttonText="Сохранить">
                <input type="text" id="profile-info-input-name" name="name"
                       className="popup__item popup__item_el_name"
                       placeholder="Имя пользователя" minLength="2" maxLength="40" required/>
                <span className="profile-info-input-name-error popup__item-error"></span>
                <input type="text" id="profile-info-input-job" name="job"
                       className="popup__item popup__item_el_job"
                       placeholder="Род деятельности" minLength="2" maxLength="200" required/>
                <span className="profile-info-input-job-error popup__item-error"></span>
            </PopupWithForm>

            <PopupWithForm name="add-card" title="Новое место" buttonText="Создать">
                <input type="text" id="add-card-input-title" name="name"
                       className="popup__item popup__item_el_title"
                       placeholder="Название" minLength="2" maxLength="30" required/>
                <span className="add-card-input-title-error popup__item-error"></span>
                <input type="url" id="add-card-input-link" name="link"
                       className="popup__item popup__item_el_image"
                       placeholder="Ссылка на картинку" required/>
                <span className="add-card-input-link-error popup__item-error"></span>
            </PopupWithForm>

            <PopupWithForm name="edit-photo" title="Обновить аватар" buttonText="Сохранить">
                <input type="url" id="edit-photo-input-link" name="avatar"
                       className="popup__item popup__item_el_image"
                       placeholder="Ссылка на аватар" required/>
                <span className="edit-photo-input-link-error popup__item-error"></span>
            </PopupWithForm>

            <template id="card">
                <article className="card">
                    <button aria-label="удалить" type="button" className="card__delete-button"></button>
                    <img className="card__image"/>
                    <div className="card__info">
                        <h2 className="card__title"></h2>
                        <button type="button" className="card__like"></button>
                        <span className="card__like_sum">0</span>
                    </div>
                </article>
            </template>
        </div>
    )

}

export default App;
