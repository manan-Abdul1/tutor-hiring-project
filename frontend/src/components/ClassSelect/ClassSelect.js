import React, { useState } from 'react';
import SearchSelect from '../Search/SearchSelect';
import { classesSelect } from '../Utils/ClassSelect';

function ClassSelect() {
  const [selectedOption, setSelectedOption] = useState(null);

  

  const handleSelect = (classesSelect) => {
    setSelectedOption(classesSelect);
  };

  const placeholder = 'Select Class';

  return (
    <div className="w-full">
      <SearchSelect placeholder={placeholder} options={classesSelect} onSelect={handleSelect} />
    </div>
  );
}

export default ClassSelect;