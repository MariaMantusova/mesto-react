import React from "react";
import {api} from "../utils/api"
import Card from "./Card";

function Main(props) {
    let [userName, setUserName] = React.useState();
    let [userDescription, setUserDescription] = React.useState();
    let [userAvatar, setUserAvatar] = React.useState();
    let [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        Promise.all([api.getUserInfo(), api.getCards()])
            .then((values) => {
                const userInfo = values[0];
                setUserName(userInfo.name);
                setUserDescription(userInfo.about);
                setUserAvatar(userInfo.avatar);

                const cardList = values[1];
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
                {cards.map((card, i) => (
                   <Card card={card} key={i} />
                ))}
            </section>
        </main>
    )
}

export default Main;