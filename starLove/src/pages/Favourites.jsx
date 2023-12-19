import CharactersList from "../Components/CharactersList";
import { characters } from '../Table';
import Favorites from '../assets/Styles/Favorites.css'


function Favourites() {
const favorites = characters.filter(item => item.favorite)

return (<>
    <div>My Favorites</div>
    <CharactersList
    characters={favorites} />
    </>);
}

export default Favourites;
