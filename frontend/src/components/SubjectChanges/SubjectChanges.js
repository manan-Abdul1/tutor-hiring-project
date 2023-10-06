import React, { useState } from 'react';
import SearchSelect from '../Search/SearchSelect';

function SubjectSelect({onSelect}) {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: 'english', label: 'English' },
    { value: 'urdu', label: 'Urdu' },
    { value: 'math', label: 'Math' },
    { value: 'science', label: 'Science' },
    { value: 'islamiyat', label: 'Islamiyat' },
    { value: 'pak-studies', label: 'Pak Study' },
    { value: 'history', label: 'History' },
    { value: 'geography', label: 'Geography' },
    { value: 'biology', label: 'Biology' },
    { value: 'physics', label: 'Physics' },
    { value: 'chemistry', label: 'Chemistry' },
    { value: 'computer', label: 'Computer' },
    { value: 'accounting', label: 'Accounting' },
    { value: 'stat', label: 'Stat' },
    { value: 'economics', label: 'Economics' },
    { value: 'business-study', label: 'Busines Study' },
    { value: 'psychology', label: 'Psychology' },
    { value: 'sociology', label: 'Sociology' },
    { value: 'commerce', label: 'Commerce' },
  ];

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option.value)

  };

  const placeholder = 'Select Subject';

  return (
    <div className="w-full">
      <SearchSelect options={options} placeholder={placeholder}  onSelect={handleSelect} />
    </div>
  );
}

export default SubjectSelect;