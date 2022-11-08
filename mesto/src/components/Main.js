function Main() {
    function handleEditProfileClick() {
        const popupEditProfileInfo = document.querySelector('.popup_theme_profile-info');
        popupEditProfileInfo.classList.add('popup_opened')
    }

    function handleEditAvatarClick() {
        const popupEditAvatar = document.querySelector('.popup_theme_edit-photo');
        popupEditAvatar.classList.add('popup_opened')
    }

    function handleAddPlaceClick() {
        const popupAddCard = document.querySelector('.popup_theme_add-card');
        popupAddCard.classList.add('popup_opened')
    }

    return (
        <main className="main">
            <section className="profile">
                <div className="profile__photo-container" onClick={handleEditAvatarClick}>
                    <img alt="Фото профиля" className="profile__photo"/>
                </div>
                <div className="profile__info">
                    <h1 className="profile__name"></h1>
                    <p className="profile__description"></p>
                    <button aria-label="изменить" type="button" className="profile__edit-button"
                            onClick={handleEditProfileClick}></button>
                </div>
                <button aria-label="добавить" type="button" className="profile__add-button"
                        onClick={handleAddPlaceClick}></button>
            </section>
            <section className="cards">
            </section>
        </main>
    )
}

export default Main;