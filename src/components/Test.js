import React, { useState } from 'react';

const YourComponent = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const data = ['apple', 'banana', 'orange', 'grape', 'pear']; // Your data array

    const handleChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i');
            const filteredSuggestions = data.filter((item) => regex.test(item));
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    const handleSelectSuggestion = (value) => {
        setSearchTerm(value);
        setSuggestions([]);
    };

    return (
        <div>
            <input
                type='text'
                value={searchTerm}
                onChange={handleChange}
                placeholder='Search...'
            />
            <ul>
                {suggestions.map((suggestion, index) => (
                    <li key={index} onClick={() => handleSelectSuggestion(suggestion)}>
                        {suggestion}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default YourComponent;
