import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddCardPopup(props) {
    const cardNameRef = React.useRef();
    const cardLinkRef = React.useRef();
    const [newCardName, setNewCardName] = React.useState('');
    const [newCardLink, setNewCardLink] = React.useState('');

    React.useEffect(() => {
        setNewCardName(cardNameRef.current)
        setNewCardLink(cardLinkRef.current);
    }, []);

    function handleSubmit(e) {
        e.preventDefault();

        props.onAddCard(newCardName.value, newCardLink.value);
        newCardName.value = ''
        newCardLink.value = ''
    }

    return(
        <PopupWithForm name="add-card" title="Новое место" buttonText="Создать"
                       isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
            <input type="text" id="add-card-input-title" name="name"
                   className="popup__item popup__item_el_title"
                   placeholder="Название" minLength="2" maxLength="30" ref={cardNameRef} required/>
            <span className="add-card-input-title-error popup__item-error"></span>
            <input type="url" id="add-card-input-link" name="link"
                   className="popup__item popup__item_el_image"
                   placeholder="Ссылка на картинку" ref={cardLinkRef} required/>
            <span className="add-card-input-link-error popup__item-error"></span>
        </PopupWithForm>
    )
}

export default AddCardPopup;