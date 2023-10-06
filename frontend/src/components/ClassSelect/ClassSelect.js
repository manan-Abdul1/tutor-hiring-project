import React, { useState } from 'react';
import SearchSelect from '../Search/SearchSelect';

function ClassSelect({onSelect}) {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: 'all', label: 'ALL' },
    { value: 'pg', label: 'PG' },
    { value: 'nursery', label: 'NURSERY' },
    { value: 'prep', label: 'Prep' },
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' },
    { value: 'three', label: 'Three' },
    { value: 'four', label: 'Four' },
    { value: 'five', label: 'Five' },
    { value: 'six', label: 'Six' },
    { value: 'seven', label: 'Seven' },
    { value: 'eight', label: 'Eight' },
    { value: 'nine', label: 'Nine' },
    { value: 'matric', label: 'Matric' },
    { value: 'ics', label: 'ICS' },
    { value: 'fa', label: 'FA' },
    { value: 'i-com', label: 'I.Com' },
    { value: 'o-level', label: 'O-Level' },
    { value: 'a-level', label: 'A-Level' },
    { value: 'fsc-eng', label: 'FSc-Eng' },
    { value: 'fsc-med', label: 'FSc-Med' },
  ];

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option.value)
  };

  const placeholder = 'Select Class';

  return (
    <div className="w-full">
      <SearchSelect placeholder={placeholder} options={options} onSelect={handleSelect} />
    </div>
  );
}

export default ClassSelect;