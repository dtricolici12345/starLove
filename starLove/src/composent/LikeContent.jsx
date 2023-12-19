import React from 'react';
import CharactersItem from '../Components/CharactersItem';

const LikeContent = ({ favorites }) => {
  return (
    <div>
      <h2>Favoris</h2>
      <ul>
        {favorites.map((favorite, index) => (
          <li key={index}>{favorite}</li>
        ))}
      </ul>
    </div>
  );
};

export default LikeContent;