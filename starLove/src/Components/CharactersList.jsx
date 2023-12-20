import { useState, useEffect } from "react";

import CharactersItem from "./CharactersItem";
import DropDownSearch from "./DropDownSearch";

import "./Styles/CharactersList.css";

function CharactersList() {
  const [characters, setCharacters] = useState([]);
  const [filterCharacters, setFilterCharacters] = useState([]);

  useEffect(() => {
    console.log("je suis dans useEffect");
    fetch("https://miadil.github.io/starwars-api/api/all.json")
      .then((res) => res.json())
      .then((data) => setCharacters(data) || setFilterCharacters(data));
  }, []);

  const handleDropdownChange = (selectedValue1, selectedValue2) => {
    console.log(`Option sélectionnée : ${selectedValue1} ${selectedValue2}`);
    setFilterCharacters(
      characters.filter((character) => {
        return (
          character.gender === selectedValue2 &&
          character.eyeColor === selectedValue1
        );
      })
    );
  };

  const handleChangeFavorite = (id, isFavorite) => {
    let pouletFavData = localStorage.getItem("fav");
    let datafav = JSON.parse(pouletFavData);
    let tmp = [];
    // console.log("data", JSON.parse(pouletFavData));
    if (datafav) {
      if (datafav.find((elem) => elem.id === id)) {
        return;
      } else {
        tmp = [...datafav, characters.find((item) => item.id === id)];
      }
    } else {
      tmp = [characters.find((item) => item.id === id)];
    }
    tmp.find((item) => item.id === id).favorite = isFavorite;
    console.log(tmp);
    localStorage.setItem("fav", JSON.stringify(tmp));
  };

  return (
    <>
      <DropDownSearch handleDropdownChange={handleDropdownChange} />
      <div className="characterListGlobal">
        {console.log("poulet")}
        {filterCharacters?.map((character) => (
          <CharactersItem
            key={character.id}
            onChangeFavorite={(isFavorite) =>
              handleChangeFavorite(character.id, isFavorite)
            }
            name={character.name}
            gender={character.gender}
            homeworld={character.homeworld}
            image={character.image}
            favorite={character.favorite}
          />
        ))}
      </div>
    </>
  );
}

export default CharactersList;
