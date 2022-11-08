import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
      <div className="page">
          <Header />
          <Main />
          <Footer />

          <div className="popup popup_theme_profile-info">
              <div className="popup__container">
                  <button aria-label="закрыть" type="button"
                          className="popup__button-close popup__button-close_theme_profile-info"></button>
                  <h2 className="popup__title">Редактировать профиль</h2>
                  <form className="popup__form popup__form_theme_profile-info" noValidate>
                      <input type="text" id="profile-info-input-name" name="name"
                             className="popup__item popup__item_el_name"
                             placeholder="Имя пользователя" minLength="2" maxLength="40" required />
                          <span className="profile-info-input-name-error popup__item-error"></span>
                          <input type="text" id="profile-info-input-job" name="job"
                                 className="popup__item popup__item_el_job"
                                 placeholder="Род деятельности" minLength="2" maxLength="200" required />
                              <span className="profile-info-input-job-error popup__item-error"></span>
                              <button className="popup__button popup__button_theme_profile-info">
                                  Сохранить
                              </button>
                  </form>
              </div>
          </div>

          <div className="popup popup_theme_add-card">
              <div className="popup__container">
                  <button aria-label="закрыть" type="button"
                          className="popup__button-close popup__button-close_theme_add-card"></button>
                  <h2 className="popup__title">Новое место</h2>
                  <form className="popup__form popup__form_theme_add-card" noValidate>
                      <input type="text" id="add-card-input-title" name="name"
                             className="popup__item popup__item_el_title"
                             placeholder="Название" minLength="2" maxLength="30" required />
                          <span className="add-card-input-title-error popup__item-error"></span>
                          <input type="url" id="add-card-input-link" name="link"
                                 className="popup__item popup__item_el_image"
                                 placeholder="Ссылка на картинку" required />
                              <span className="add-card-input-link-error popup__item-error"></span>
                              <button className="popup__button popup__button_theme_add-card">
                                  Создать
                              </button>
                  </form>
              </div>
          </div>

          <div className="popup popup_theme_image">
              <figure className="popup__image-container">
                  <button aria-label="закрыть" type="button"
                          className="popup__button-close popup__button-close_theme_image"></button>
                  <img className="popup__image" />
                      <figcaption className="popup__caption"></figcaption>
              </figure>
          </div>

          <div className="popup popup_theme_confirm">
              <div className="popup__container">
                  <button type="button" className="popup__button-close popup__button-close_theme_confirm"></button>
                  <h2 className="popup__title popup__title_theme_confirm">Вы уверены?</h2>
                  <button className="popup__button popup__button_theme_confirm">Да</button>
              </div>
          </div>

          <div className="popup popup_theme_edit-photo">
              <div className="popup__container">
                  <button type="button" className="popup__button-close popup__button-close_theme_edit-button"></button>
                  <h2 className="popup__title popup__title_theme_edit-photo">Обновить аватар</h2>
                  <form className="popup__form popup__form_theme_edit-photo">
                      <input type="url" id="edit-photo-input-link" name="avatar"
                             className="popup__item popup__item_el_image"
                             placeholder="Ссылка на аватар" required />
                          <span className="edit-photo-input-link-error popup__item-error"></span>
                          <button className="popup__button popup__button_theme_edit-photo">Сохранить</button>
                  </form>
              </div>
          </div>

          <template id="card">
              <article className="card">
                  <button aria-label="удалить" type="button" className="card__delete-button"></button>
                  <img className="card__image" />
                      <div className="card__info">
                          <h2 className="card__title"></h2>
                          <button type="button" className="card__like"></button>
                          <span className="card__like_sum">0</span>
                      </div>
              </article>
          </template>
      </div>
  )
}

export default App;
