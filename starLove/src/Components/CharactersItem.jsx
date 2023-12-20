/* eslint-disable react/prop-types */
import { useState } from 'react';

import "./Styles/CharactersItem.css"
function CharactersItem({ name, gender, homeworld, image, favorite }) {
  // create a state isFavorite that has the inital value of isFavorite that comes from the props
  const [isFavorite, setIsFavorite] = useState(favorite);

  const handleClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="characterGlobal">
      <div className="characterDisplay">
        <div>{name} </div>
        <div>{gender} </div>
        <div>From homeworld: {homeworld} </div>
      </div>
      <div className="characterImage">
        <img src={image} alt="character" className='characterImg' />
      </div>
      <div
        id="favorite"
        className={isFavorite ? 'isFavorite' : 'notFavorite'}
        onClick={handleClickFavorite}
      />
    </div>
  );
}


export default CharactersItem;