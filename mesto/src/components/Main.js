function Main(props) {
    return (
        <main className="main">
            <section className="profile">
                <div className="profile__photo-container" onClick={props.onEditAvatar}>
                    <img alt="Фото профиля" className="profile__photo"/>
                </div>
                <div className="profile__info">
                    <h1 className="profile__name"></h1>
                    <p className="profile__description"></p>
                    <button aria-label="изменить" type="button" className="profile__edit-button"
                            onClick={props.onEditProfile}></button>
                </div>
                <button aria-label="добавить" type="button" className="profile__add-button"
                        onClick={props.onAddPlace}></button>
            </section>
            <section className="cards">
            </section>
        </main>
    )
}

export default Main;