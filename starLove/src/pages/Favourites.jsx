import { useEffect, useState } from "react";
import CharactersList from "../Components/CharactersList";
import CharactersItem from "../Components/CharactersItem";

function Favourites() {
  const [favorites, setFavorite] = useState([]);

  //   const favorites = characters.filter((item) => item.favorite);
  useEffect(() => {
    let dataLocalFav = localStorage.getItem("fav");
    // console.log("test", JSON.parse(dataLocalFav));
    setFavorite(JSON.parse(dataLocalFav));
  }, []);

  return (
    <div>
      {console.log(favorites)}
      {favorites?.map((favorite) => (
        <CharactersItem
          key={favorite.id}
          name={favorite.name}
          gender={favorite.gender}
          image={favorite.image}
        />
      ))}
    </div>
  );
}

export default Favourites;
