import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {
 
  const [name, setName] = React.useState('');
  const [description, setDescription ] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);
  

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]); 

  function handleSubmit(e) {
    e.preventDefault();
  
    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser({
      name,
      about: description,
    });
  } 

  return (
    <PopupWithForm isOpen={props.isOpen} name={'profile'} title={'Редактировать профиль'} 
      buttonName={'Сохранить'} onClose={props.onClose} onSubmit={handleSubmit}>
      <input value={name} onChange={handleNameChange} id="profile-name-input" className="popup__form-input popup__form-input_type_name" 
      type="text" required minLength="2" maxLength="40" placeholder="Имя" name="name" />
      <span className="profile-name-input-error popup__input-error"></span>
      <input value={description} onChange={handleDescriptionChange} id="profile-activity-input" className="popup__form-input popup__form-input_type_activity" 
      type="text" required minLength="2" maxLength="200" placeholder="Профессиональная деятельность"
      name="about" />
      <span className="profile-activity-input-error popup__input-error"></span>

    </PopupWithForm> 
  )
}

export default EditProfilePopup