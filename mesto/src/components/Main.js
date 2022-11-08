function Main() {
    return (
        <main className="main">
            <section className="profile">
                <div className="profile__photo-container">
                    <img alt="Фото профиля" className="profile__photo"/>
                </div>
                <div className="profile__info">
                    <h1 className="profile__name"></h1>
                    <p className="profile__description"></p>
                    <button aria-label="изменить" type="button" className="profile__edit-button"></button>
                </div>
                <button aria-label="добавить" type="button" className="profile__add-button"></button>
            </section>
            <section className="cards">
            </section>
        </main>
    )
}

export default Main;