import { useState } from "react";
// import { useNavigate } from "react-router-dom"
import './DropDownSearch.css';

function DropDownSearch({ handleDropdownChange }) {
    const [selectedOption1, setSelectedOption1] = useState('');
    const [selectedOption2, setSelectedOption2] = useState('');
    // const navigate = useNavigate();

    function handleSelectChange1(event) {
        setSelectedOption1(event.target.value);
        // if (onChange) {
        // }
    }
    function handleSelectChange2(event) {
        setSelectedOption2(event.target.value);
    }

    function handleConfirm() {
        handleDropdownChange(selectedOption1, selectedOption2);
        // navigate('/soulmates');
    }

    return (
        <>

            <div className="dropdown">
                <h1 className="choose">Choose your travel partner</h1>
                <select value={selectedOption1} onChange={handleSelectChange1}>
                    <option value="">Eye Color</option>
                    <option value="gray-blue">gray-blue</option>
                    <option value="blue">blue</option>
                </select>

                <select value={selectedOption2} onChange={handleSelectChange2}>
                    <option value="">Sex</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <button className="dropbtn" onClick={handleConfirm}>Confirm</button>
            </div>

        </>
    );
}

export default DropDownSearch;
