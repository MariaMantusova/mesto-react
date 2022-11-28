import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";
import {api} from "../utils/api";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(null);
    const [currentUser, setCurrentUser] = React.useState({});

    React.useEffect(() => {
        api.getUserInfo()
            .then((user) => {
                setCurrentUser(user);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    function closeByEsc(evt)  {
        if (evt.key === 'Escape') {
            closeAllPopups();
        }
    }

    function closeByBackground(evt) {
        if (evt.target.classList.contains('popup')) {
            closeAllPopups();
        }
    }

    function addPopupListeners(){
        window.addEventListener('keydown', closeByEsc);
        window.addEventListener('click', (evt) => {
            closeByBackground(evt);
        });
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
        addPopupListeners();
    }

    function handleAddPlaceClick() {
        setAddPlacePopupOpen(true);
        addPopupListeners();
    }

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
        addPopupListeners();
    }

    function handleCardClick(card) {
        setSelectedCard(card);
        addPopupListeners();
    }

    function closeAllPopups() {
        setIsEditProfilePopupOpen(false);
        setAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        window.removeEventListener('keydown', closeByEsc);
        window.removeEventListener('click', closeByBackground);
        setSelectedCard(null);
    }

    function handleUpdateUser(name, description) {
        api.changeUserInfo(name, description)
            .then((userInfo) => {
                setCurrentUser(userInfo);
                closeAllPopups();
            })
            .catch((err) => console.log(err))
    }

    function handleUpdateAvatar(avatar) {
        api.changeProfilePhoto(avatar)
            .then((userInfo) => {
                setCurrentUser(userInfo);
                closeAllPopups();
            })
            .catch((err) => console.log(err))
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="page">
                <Header/>
                <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick}
                      onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>
                <Footer/>

                <ImagePopup card={selectedCard} onclose={closeAllPopups}/>

                <PopupWithForm name="confirm" title="Вы уверены?" buttonText="Да"/>

                <EditProfilePopup onClose={closeAllPopups} isOpen={isEditProfilePopupOpen}
                                  onUpdateUser={handleUpdateUser}/>

                <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}
                                 onUpdateAvatar={handleUpdateAvatar}/>

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
            </div>
        </CurrentUserContext.Provider>
    )

}

export default App;
