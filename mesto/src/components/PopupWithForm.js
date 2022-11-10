function PopupWithForm(props) {
    return(
        <div className={`popup popup_theme_${props.name}`}>
            <div className="popup__container">
                <button type="button"
                        className="popup__button-close"></button>
                <h2 className="popup__title">{`${props.title}`}</h2>
                <form className="popup__form" name={`${props.name}`} noValidate>
                    <>{props.children}</>
                    <button className="popup__button popup__button_theme_edit-photo">
                        {`${props.buttonText}`}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm;