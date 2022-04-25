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
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setIsImagePopupOpen(true);
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false);
    setIsAddPlacePopupOpen(false);
  }


  return (
  <div className="wrapper">
      <div className="root">
        <Header/>
        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} 
        onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>
        <Footer/>
      </div>

    <PopupWithForm isOpen={isEditProfilePopupOpen} name={'profile'} title={'Редактировать профиль'} 
      buttonName={'Сохранить'} onClose={closeAllPopups}>
      <input id="profile-name-input" className="popup__form-input popup__form-input_type_name" 
      type="text" required minLength="2" maxLength="40" placeholder="Имя" name="name" />
      <span className="profile-name-input-error popup__input-error"></span>
      <input id="profile-activity-input" className="popup__form-input popup__form-input_type_activity" 
      type="text" required minLength="2" maxLength="200" placeholder="Профессиональная деятельность"
      name="about" />
      <span className="profile-activity-input-error popup__input-error"></span>

    </PopupWithForm>    

    <PopupWithForm isOpen={isAddPlacePopupOpen} name={'card'} title={'Новое место'} buttonName={'Создать'}
      onClose={closeAllPopups}>
      <input id="card-name-input" className="popup__form-input popup__form-input_type_card-name" type="text" 
      placeholder="Название" required minLength="2" maxLength="30" name="name" />
      <span className="card-name-input-error popup__input-error"></span>
      <input id="card-link-input" className="popup__form-input popup__form-input_type_card-link" type="url" 
      placeholder="Ссылка на картинку" required name="link" />
      <span className="card-link-input-error popup__input-error"></span>

    </PopupWithForm>   

    <PopupWithForm name={'delete'} title={'Вы уверены?'} buttonName={'Да'}/>

    <PopupWithForm isOpen={isEditAvatarPopupOpen} name={'update-avatar'} title={'Обновить аватар'} 
      buttonName={'Сохранить'} onClose={closeAllPopups}>
      <input name="avatar" className="popup__form-input popup__form-input_type_update-avatar" type="url" 
        placeholder="https://somewebsite.com/someimage.jpg"  required id="avatar-link-input" />
      <span className="avatar-link-input-error popup__input-error"></span>
    </PopupWithForm>  

    <ImagePopup card={selectedCard} isOpen={isImagePopupOpen} onClose={closeAllPopups} />
      
</div>
  );
}

export default App;
