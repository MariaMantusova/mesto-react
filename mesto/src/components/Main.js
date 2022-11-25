import React from "react";
import {api} from "../utils/api"
import Card from "./Card";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Main(props) {
    const userInfo = React.useContext(CurrentUserContext);
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getCards()
            .then((cardList) => {
                setCards(cardList);
            })
            .catch((err) => console.log(err))
    }, [])

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === userInfo._id);

        if (!isLiked) {
            api.addLike(card._id)
                .then((newCard) => {
                    setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
                })
                .catch((err) => console.log(err));
        } else {
            api.deleteLike(card._id)
                .then((newCard) => {
                    setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
                })
                .catch((err) => console.log(err));
        }
    }

    return (
        <main className="main">
            <section className="profile">
                <div className="profile__photo-container" onClick={props.onEditAvatar}>
                    <img alt="Фото профиля" className="profile__photo" src={userInfo.avatar}/>
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">{userInfo.name}</h1>
                    <p className="profile__description">{userInfo.about}</p>
                    <button aria-label="изменить" type="button" className="profile__edit-button"
                            onClick={props.onEditProfile}></button>
                </div>
                <button aria-label="добавить" type="button" className="profile__add-button"
                        onClick={props.onAddPlace}></button>
            </section>
            <section className="cards">
                {cards.map((card) => (
                   <Card card={card} key={card._id} onCardClick={props.onCardClick} onCardLike={handleCardLike} />
                ))}
            </section>
        </main>
    )
}

export default Main;