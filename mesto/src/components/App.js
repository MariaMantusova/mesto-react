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
import AddCardPopup from "./AddCardPopup";

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(null);
    const [currentUser, setCurrentUser] = React.useState({});
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getUserInfo()
            .then((user) => {
                setCurrentUser(user);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    React.useEffect(() => {
        api.getCards()
            .then((cardList) => {
                setCards(cardList);
            })
            .catch((err) => console.log(err))
    }, [])

    function handleCardLike(card, userInfo) {
        const isLiked = card.likes.some(i => i._id === userInfo._id)

        if (isLiked) {
            api.deleteLike(card._id)
                .then((newCard) => {
                    setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
                })
                .catch((err) => console.log(err));
        } else {
            api.addLike(card._id)
                .then((newCard) => {
                    setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
                })
                .catch((err) => console.log(err));
        }
    }

    function handleCardDelete(card) {
        api.deleteCard(card._id)
            .then(() => {
                setCards((state) => state.filter((c) => c._id !== card._id));
            })
            .catch((err) => console.log(err))
    }

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

    function handleAddCardSubmit(name, link) {
        api.saveNewCard(name, link)
            .then((newCard) => {
                newCard.name = name;
                newCard.link = link;
                setCards([newCard, ...cards]);
                closeAllPopups();
            })
            .catch((err) => console.log(err));
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="page">
                <Header/>
                <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick}
                      onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} cards={cards}
                      onLike={handleCardLike} onDelete={handleCardDelete}/>
                <Footer/>

                <ImagePopup card={selectedCard} onclose={closeAllPopups}/>

                <PopupWithForm name="confirm" title="Вы уверены?" buttonText="Да"/>

                <EditProfilePopup onClose={closeAllPopups} isOpen={isEditProfilePopupOpen}
                                  onUpdateUser={handleUpdateUser}/>

                <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}
                                 onUpdateAvatar={handleUpdateAvatar}/>

                <AddCardPopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddCard={handleAddCardSubmit} />
            </div>
        </CurrentUserContext.Provider>
    )

}

export default App;
