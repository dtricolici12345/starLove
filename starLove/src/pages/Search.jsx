import DropDownSearch from "../components/DropDownSearch";

function Search() {
    const handleDropdownChange = (selectedValue) => {
        console.log(`Option sélectionnée : ${selectedValue}`);
    };
    return (
        <div><DropDownSearch onChange={handleDropdownChange} /></div>

    );
}

export default Search;
