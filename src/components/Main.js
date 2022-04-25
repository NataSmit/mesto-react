import React from 'react';
import editIcon from '../images/pen.svg';
import addIcon from '../images/plus.svg';
import {api} from '../utils/Api'
import Card from './Card';


function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  api.getUserData()
    .then((res) => {
      setUserName(res.name);
      setUserDescription(res.about);
      setUserAvatar(res.avatar);
    })

  api.getInitialCards()
    .then ((res) => {
      
      const cardInfo = res.map((cardData) =>{
        return {
          name: cardData.name,
          link: cardData.link,
          likes: cardData.likes,
          id: cardData._id
        }
      })
      
      setCards(cardInfo);
    })

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__body">
          <div className="profile__avatar" onClick={onEditAvatar}>
            <img className="profile__avatar-img" src={userAvatar} alt="Фото профайла"/>
          </div>
          <div className="profile__details">
            <div className="profile__container">
              <h1 className="profile__name">{userName}</h1>
              <button onClick={onEditProfile} type="button" className="profile__edit-button" aria-label="Редактировать" >               
                <img className="profile__button-item" src={editIcon} alt="Редактировать"/>             
              </button>
            </div>
            <p className="profile__profession">{userDescription}</p>
          </div>
        </div>       
        <button onClick={onAddPlace} type="button" className="profile__add-button" aria-label="Добавить">
          <img className="profile__add-image" src={addIcon} alt="Добавить"/>
        </button>
      </section>
      <section className="elements">
        {
          cards.map((card) => (
            <Card card={card} onCardClick={onCardClick} />))
        }

      </section>
    </main>
  )
}

export default Main