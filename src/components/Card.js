import React from 'react';


export default function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  } 

  return (

    <article className="elements__card element" key={props.card.id}>
      <div className="element__photo" onClick={handleClick}>
        <img className="element__photo-img" src={props.card.link} alt={props.card.name}/>
      </div>
      <div className="element__subtitle">
        <h2 className="element__name">{props.card.name}</h2>
        <div className="element__likes">
          <button className="element__icon" type="button" aria-label="Нравится"></button>
          <span className="element__like-counter">{props.card.likes.length}</span>
        </div>
      </div>
      <button className="element__delete-button" type="button" aria-label="Удалить"></button>
    </article>

  )
}