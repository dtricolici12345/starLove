import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom"
import './DropDownSearch.css';

function DropDownSearch({ onChange }) {
    const [selectedOption, setSelectedOption] = useState('');
    const navigate = useNavigate();

    function handleSelectChange(event) {
        setSelectedOption(event.target.value);
        if (onChange) {
            onChange(event.target.value);
        }
    }
    function handleConfirm() {
        navigate('/soulmates');
    }

    return (
        <>

            <div className="dropdown">
                <h1 className="choose">Choose your travel partner</h1>
                <select value={selectedOption} onChange={handleSelectChange}>
                    <option value="">Vitality</option>
                    <option value="option1">Dead</option>
                    <option value="option2">Alive</option>
                </select>

                <select value={selectedOption} onChange={handleSelectChange}>
                    <option value="">sex</option>
                    <option value="option3">Male</option>
                    <option value="option4">Female</option>
                </select>
                <button className="dropbtn" onClick={handleConfirm}>Confirm</button>
            </div>

        </>
    );
}

export default DropDownSearch;
