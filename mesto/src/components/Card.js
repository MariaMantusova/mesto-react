import React from "react";

function Card(props) {

    function handleClick() {
        props.onCardClick(props.card);
    }

    return(
        <article className="card" key={props.card._id}>
            <button aria-label="удалить" type="button" className="card__delete-button"></button>
            <img className="card__image" src={`${props.card.link}`} alt={`${props.card.name}`} onClick={handleClick} />
            <div className="card__info">
                <h2 className="card__title">{`${props.card.name}`}</h2>
                <button type="button" className="card__like"></button>
                <span className="card__like_sum">{`${props.card.likes.length}`}</span>
            </div>
        </article>
    )
}

export default Card;