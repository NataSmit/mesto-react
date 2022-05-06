import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { CardContext } from '../contexts/CardContext';

export default function AddPlacePopup(props) {

  const [cardTitle, setCardTitle] = React.useState('');
  const [cardLink, setCardLink] = React.useState('');
  const cards = React.useContext(CardContext);

  function handleCardTitleChange(e) {
    setCardTitle(e.target.value);
  }

  function handleCardLinkChange(e) {
    setCardLink(e.target.value);
  }

  React.useEffect(() => {
    setCardTitle(cards.name);
    setCardLink(cards.about);
  }, [cards]); 


  function handleAddPlaceSubmit(e) {
    e.preventDefault();
    
    props.onAddCard({
      name: cardTitle,
      link: cardLink
    })

  }

  return (
    <PopupWithForm isOpen={props.isOpen} name={'card'} title={'Новое место'} buttonName={'Создать'}
      onClose={props.onClose} onSubmit={handleAddPlaceSubmit} >
      <input value={cardTitle} onChange={handleCardTitleChange} id="card-name-input" className="popup__form-input popup__form-input_type_card-name" type="text" 
      placeholder="Название" required minLength="2" maxLength="30" name="name" />
      <span className="card-name-input-error popup__input-error"></span>
      <input value={cardLink} onChange={handleCardLinkChange} id="card-link-input" className="popup__form-input popup__form-input_type_card-link" type="url" 
      placeholder="Ссылка на картинку" required name="link" />
      <span className="card-link-input-error popup__input-error"></span>
    
    </PopupWithForm>
  )
}
