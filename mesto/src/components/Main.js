import React from "react";
import {api} from "../utils/api"

function Main(props) {
    let [userName, setUserName] = React.useState();
    let [userDescription, setUserDescription] = React.useState();
    let [userAvatar, setUserAvatar] = React.useState();
    let [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getUserInfo()
            .then((userInfo) => {
                setUserName(userInfo.name);
                setUserDescription(userInfo.about);
                setUserAvatar(userInfo.avatar);
            })
        api.getCards()
            .then((cardList) => {
               setCards(cardList);
            })
    })

    return (
        <main className="main">
            <section className="profile">
                <div className="profile__photo-container" onClick={props.onEditAvatar}>
                    <img alt="Фото профиля" className="profile__photo" src={`${userAvatar}`}/>
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">{`${userName}`}</h1>
                    <p className="profile__description">{`${userDescription}`}</p>
                    <button aria-label="изменить" type="button" className="profile__edit-button"
                            onClick={props.onEditProfile}></button>
                </div>
                <button aria-label="добавить" type="button" className="profile__add-button"
                        onClick={props.onAddPlace}></button>
            </section>
            <section className="cards">
                {cards.map((card, i) => (
                    <article className="card" key={i}>
                        <button aria-label="удалить" type="button" className="card__delete-button"></button>
                        <img className="card__image" src={`${card.link}`} alt={`${card.name}`}/>
                        <div className="card__info">
                            <h2 className="card__title">{`${card.name}`}</h2>
                            <button type="button" className="card__like"></button>
                            <span className="card__like_sum">{`${card.likes.length}`}</span>
                        </div>
                    </article>
                ))}
            </section>
        </main>
    )
}

export default Main;