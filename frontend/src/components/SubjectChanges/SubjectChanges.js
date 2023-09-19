import React, { useState } from 'react';
import SearchSelect from '../Search/SearchSelect';
import { subjectsSelect } from '../Utils/SubjectSelect';

function SubjectSelect() {
  const [selectedOption, setSelectedOption] = useState(null);


  const handleSelect = (subjectsSelect) => {
    setSelectedOption(subjectsSelect);
  };

  const placeholder = 'Select Subject';

  return (
    <div className="w-full">
      <SearchSelect options={subjectsSelect} placeholder={placeholder}  onSelect={handleSelect} />
    </div>
  );
}

export default SubjectSelect;