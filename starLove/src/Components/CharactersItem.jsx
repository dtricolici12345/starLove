import React from 'react';
import { useState} from 'react';


function CharactersItem({ onChangeFavorite, name, gender, image, favorite}) {
  // create a state isFavorite that has the inital value of isFavorite that comes from the props
  const [isFavorite, setIsFavorite] = useState(favorite);

 

  const handleClickFavorite = () => {
    setIsFavorite(!isFavorite);
    onChangeFavorite(!isFavorite);
  };

  return (
    <div >
      {name} {gender} 
        <div className="characterImage">
      <img src={image} alt="character"></img>
        </div>
        <div
          id="favorite"
          className={isFavorite ? 'isFavorite' : 'notFavorite'}
          onClick={handleClickFavorite}
        />

      {/* <div className="leftContainer">
        <div className="imgContainer">
          <img src={img} alt="plate"></img>
        </div>
        <div className="itemDescription">
          <h3>{name}</h3>
          <p>{desc}</p>
        </div>
      </div>
      <div className="rightContainer">
        <div>{price} EUR</div>
        <div
          id="favorite"
          className={isFavorite ? 'isFavorite' : 'notFavorite'}
          onClick={handleClickFavorite}
        />
      </div> */}
    </div>
  );
}


export default CharactersItem;