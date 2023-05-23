import React, { useState } from 'react';

function SearchSelect({ options, onSelect, placeholder }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleOptionSelect = (option) => {
    onSelect(option);
    setSelectedOption(option);
    setSearchQuery('');
    setIsOpen(false);
  };

  const handleClearSelect = () => {
    setSelectedOption(null);
    setSearchQuery('');
  };

  return (
    <div className="relative">
      <input
        className="p-2 md:w-full border outline-none border-gray-300 rounded"
        type="text"
        placeholder= {placeholder}
        value={selectedOption ? selectedOption.label : searchQuery}
        onChange={handleInputChange}
        onFocus={() => setIsOpen(true)}
      />
      {selectedOption ? (
        <button className="absolute top-2 md:right-2 -right-48 px-1" onClick={handleClearSelect}>
          <i className="fa-sharp fa-solid fa-xmark"></i>
        </button>
      ) : (
        <i className="fa-sharp fa-solid fa-caret-down fa-lg absolute -right-48 px-1 top-5 md:right-2"></i>
      )}
      {isOpen && (
        <div style={{zIndex:'99999'}} className="absolute z-20 w-full md:max-h-64 bg-white border border-gray-300 rounded md:overflow-y-auto h-fit">
          {filteredOptions.map((option) => (
            <div
              key={option.value}
              className="p-2 cursor-pointer hover:bg-green-200 !important"
              onClick={() => handleOptionSelect(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchSelect;
