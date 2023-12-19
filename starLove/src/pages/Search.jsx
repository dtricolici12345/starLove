import DropDownSearch from "../components/DropDownSearch";

function Search() {
    const handleDropdownChange = (selectedValue1, selectedValue2) => {
        console.log(`Option sélectionnée : ${selectedValue1} ${selectedValue2}`);
    };
    return (
        <div>
            <DropDownSearch handleDropdownChange={handleDropdownChange} />
        </div>
    );
}

export default Search;
