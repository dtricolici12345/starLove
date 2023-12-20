import { useState, useEffect } from 'react';

import CharactersItem from './CharactersItem';
import DropDownSearch from './DropDownSearch';

import "./Styles/CharactersList.css"

function CharactersList() {
  const [characters, setCharacters] = useState([])
  const [filterCharacters, setFilterCharacters] = useState([])

  useEffect(() => {
    console.log("je suis dans useEffect");
    fetch("https://miadil.github.io/starwars-api/api/all.json")
      .then((res) => res.json())
      .then((data) => setCharacters(data) || setFilterCharacters(data));
  }, []);

  const handleDropdownChange = (selectedValue1, selectedValue2) => {
    console.log(`Option sélectionnée : ${selectedValue1} ${selectedValue2}`);
    setFilterCharacters(characters.filter((character) => {
      return character.gender === selectedValue2 && character.eyeColor === selectedValue1
    }))
  };

  return (
    <>
      <DropDownSearch handleDropdownChange={handleDropdownChange} />
      <div className='characterListGlobal'>
        {console.log(filterCharacters)}
        {filterCharacters?.map((character) => (
          <CharactersItem
            key={character.id}
            name={character.name}
            gender={character.gender}
            homeworld={character.homeworld}
            image={character.image}
            favorite={false}
          />
        ))}
      </div>
    </>
  );
}

export default CharactersList;