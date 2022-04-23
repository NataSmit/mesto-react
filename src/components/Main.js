import React from 'react';
import editIcon from '../images/pen.svg';
import addIcon from '../images/plus.svg';


function Main({onEditProfile, onAddPlace, onEditAvatar}) {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__body">
          <div className="profile__avatar" onClick={onEditAvatar}>
            <img className="profile__avatar-img" src="<%=require('./images/avatar.jpg')%>" alt="Фото профайла"/>
          </div>
          <div className="profile__details">
            <div className="profile__container">
              <h1 className="profile__name">Кусто</h1>
              <button onClick={onEditProfile} type="button" className="profile__edit-button" aria-label="Редактировать" >               
                <img className="profile__button-item" src={editIcon} alt="Редактировать"/>             
              </button>
            </div>
            <p className="profile__profession">Исследователь</p>
          </div>
        </div>       
        <button onClick={onAddPlace} type="button" className="profile__add-button" aria-label="Добавить">
          <img className="profile__add-image" src={addIcon} alt="Добавить"/>
        </button>
      </section>
      <section className="elements">
      </section>
    </main>
  )
}

export default Main