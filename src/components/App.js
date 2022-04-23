import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import logoHeader from '../images/logo.svg';
import editIcon from '../images/pen.svg';
import addIcon from '../images/plus.svg';
import closeIcon from '../images/Close-Icon.svg';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';


function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
  }


  return (
  <body className="wrapper">
      <div className="root">
        <Header/>
        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick}/>
        <Footer/>
      </div>

    <PopupWithForm isOpen={isEditProfilePopupOpen} name={'profile'} title={'Редактировать профиль'} 
      buttonName={'Сохранить'} onClose={closeAllPopups}>
      <input id="profile-name-input" className="popup__form-input popup__form-input_type_name" 
      type="text"  value="" required minLength="2" maxLength="40" placeholder="Имя" name="name" />
      <span className="profile-name-input-error popup__input-error"></span>
      <input id="profile-activity-input" className="popup__form-input popup__form-input_type_activity" 
      type="text" value="" required minLength="2" maxLength="200" placeholder="Профессиональная деятельность"
      name="about" />
      <span className="profile-activity-input-error popup__input-error"></span>

    </PopupWithForm>    

    <PopupWithForm isOpen={isAddPlacePopupOpen} name={'card'} title={'Новое место'} buttonName={'Создать'}
      onClose={closeAllPopups}>
      <input id="card-name-input" className="popup__form-input popup__form-input_type_card-name" type="text" 
      placeholder="Название" value="" required minLength="2" maxLength="30" name="name"/>
      <span className="card-name-input-error popup__input-error"></span>
      <input id="card-link-input" className="popup__form-input popup__form-input_type_card-link" type="url" 
      placeholder="Ссылка на картинку" value="" required name="link"/>
      <span className="card-link-input-error popup__input-error"></span>

    </PopupWithForm>   

    <PopupWithForm name={'delete'} title={'Вы уверены?'} buttonName={'Да'}/>

    <PopupWithForm isOpen={isEditAvatarPopupOpen} name={'update-avatar'} title={'Обновить аватар'} 
      buttonName={'Сохранить'} onClose={closeAllPopups}>
      <input name="avatar" className="popup__form-input popup__form-input_type_update-avatar" type="url" 
        placeholder="https://somewebsite.com/someimage.jpg" value="" required id="avatar-link-input"/>
      <span className="avatar-link-input-error popup__input-error"></span>
    </PopupWithForm>  

    <ImagePopup/>
      

  <template className="card-template">
    <article className="elements__card element">
      <div className="element__photo">
        <img className="element__photo-img" src="#" alt="#"/>
      </div>
      <div className="element__subtitle">
        <h2 className="element__name"></h2>
        <div className="element__likes">
          <button className="element__icon" type="button" aria-label="Нравится"></button>
          <span className="element__like-counter"></span>
        </div>
      </div>
      <button className="element__delete-button" type="button" aria-label="Удалить"></button>
    </article>
  </template>


</body>
  );
}

export default App;
