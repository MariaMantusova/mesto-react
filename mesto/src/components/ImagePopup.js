function ImagePopup() {
    return(
        <div className="popup popup_theme_image">
            <figure className="popup__image-container">
                <button aria-label="закрыть" type="button"
                        className="popup__button-close popup__button-close_theme_image"></button>
                <img className="popup__image"/>
                <figcaption className="popup__caption"></figcaption>
            </figure>
        </div>
    )
}

export default ImagePopup;