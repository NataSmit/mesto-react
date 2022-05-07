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
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import {api} from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function App() {

  const [currentUser, setCurrentUser] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserData()
      .then((res) => {
        
        setCurrentUser(res);
      })
      .catch((err) => console.log(err))

  }, []); 

  React.useEffect(() => {
    api.getInitialCards()
      .then ((res) => {
        
        setCards(res);
      })
      .catch((err) => console.log(err))
  }, []); 

  
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

  function handleCardLike(card) {
    
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.handleLikeClick(card._id, isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      });
  } 
  
  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then ((res) => {
        setCards((state) => state.filter((c) => c._id !== card._id));
      }) 
      .catch((err) => console.log(err))
  }  

  function handleUpdateUser(info) {
    api.editProfile(info)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => console.log(err))
  }
  
  function handleUpdateAvatar(obj) {
    api.updateAvatar(obj)
      .then((res) => {
        
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => console.log(err))
  }

  function handleAddCard(obj) {
    api.addCard(obj)
      .then((newCard) => {
        setCards([newCard, ...cards ]);
        closeAllPopups();
      })
      .catch((err) => console.log(err))
  }

  return (
  <div className="wrapper">
    <CurrentUserContext.Provider value={currentUser}>
      <div className="root">
        <Header/>

        <Main onEditProfile={handleEditProfileClick} 
        onAddPlace={handleAddPlaceClick} 
        onEditAvatar={handleEditAvatarClick} 
        onCardClick={handleCardClick} 
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete} 
        cards={cards}/>

        <Footer/> 
      </div>
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/> 
      <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddCard={handleAddCard}/>
      <PopupWithForm name={'delete'} title={'Вы уверены?'} buttonName={'Да'}/>
      <ImagePopup card={selectedCard} isOpen={isImagePopupOpen} onClose={closeAllPopups} />
      
    </CurrentUserContext.Provider>    
  </div>
  );
}

export default App;
