import React, { useState } from 'react';
import { AutoComplete } from 'antd';

const { Option } = AutoComplete;

const AutoCompleteInput = ({ opt }) => {
  const [selectedOption, setSelectedOption] = useState(null); // Store selected option
  const [filteredOptions, setFilteredOptions] = useState([]);

  const handleSearch = (value) => {
    // Check if value is a string before applying toLowerCase
    if (typeof value === 'string') {
      setFilteredOptions(
        opt?.filter((item) => item.recipe_name.toLowerCase().includes(value.toLowerCase()))
          .map((item) => ({ value: item?.recipe_id, label: item?.recipe_name })) // Create options with ID and label
      );
    } else {
      console.warn('Invalid search value type. Please enter a string.');
    }
  };

  const handleSelect = (value) => {
    console.log({value});
    const selectedItem = opt.find((item) => item.id === value); // Find selected item by ID
    setSelectedOption(selectedItem); // Update selected option with both ID and recipe name
    console.log("Selected option:", selectedItem); // Log the recipe name
  };

  return (
    <AutoComplete
      style={{ width: 200 }}
      placeholder="Type to search"
      dataSource={filteredOptions}
      onChange={handleSearch}
      onSelect={handleSelect}
    >
      {filteredOptions.map((option) => (
        <Option key={option?.value} value={option.label}>
          {option?.label}
        </Option>
      ))}
    </AutoComplete>
  );
};

export default AutoCompleteInput;
