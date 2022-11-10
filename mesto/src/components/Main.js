import React from "react";
import {api} from "../utils/api"
import Card from "./Card";

function Main(props) {
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        Promise.all([api.getUserInfo(), api.getCards()])
            .then(([userInfo, cardList]) => {
                setUserName(userInfo.name);
                setUserDescription(userInfo.about);
                setUserAvatar(userInfo.avatar);

                setCards(cardList);
            })
            .catch((err) => console.log(err))
    }, [])

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
                {cards.map((card) => (
                   <Card card={card} key={card._id} onCardClick={props.onCardClick} />
                ))}
            </section>
        </main>
    )
}

export default Main;