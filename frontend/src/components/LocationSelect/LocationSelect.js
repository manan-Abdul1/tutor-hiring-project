import React, { useState } from 'react';
import SearchSelect from '../Search/SearchSelect';

function LocationSelect({ width, onSelect }) {
    const [selectedOption, setSelectedOption] = useState(null);

    const options = [
        { value: 'online', label: 'Online' },
        { value: 'physical', label: 'Physical' },
        { value: 'both', label: 'Both' },
    ];

    const handleSelect = (option) => {
        setSelectedOption(option);
        onSelect(option.value)
    };

    const placeholder = 'How do you want to learn?';

    return (
        <div className="w-full">
            <SearchSelect options={options} width={width} placeholder={placeholder} onSelect={handleSelect} />
        </div>
    );
}

export default LocationSelect;