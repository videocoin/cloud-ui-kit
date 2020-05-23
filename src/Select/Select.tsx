import React, { useState } from 'react';
import BaseSelect, { components } from 'react-select';
import Icon from '../Icon/Icon';

export interface Option {
  value: string | number;
  label: string;
}

export interface SelectProps {
  options: Option[];
  onChange: (value: Option) => void;
  onBlur?: (value: Option) => void;
  name?: string;
  placeholder?: string;
  value: Option | null;
  isDisabled?: boolean;
}

const customStyles = {
  container: (provided: any) => ({
    ...provided,
    zIndex: 100,
  }),
  menu: (provided: any) => ({
    ...provided,
    backgroundColor: '#281741',
    borderRadius: 4,
  }),
  option: (provided: any, state: any) => {
    return {
      ...provided,
      color: state.isSelected ? '#9683B2' : '#9683B2',
      backgroundColor: state.isSelected || state.isFocused ? '#1b0d2f' : 'none',
      padding: 20,
      ':active': { backgroundColor: 'none' },
    };
  },
  input: (provided: any) => {
    return {
      ...provided,
      caretColor: '#fff',
      color: '#fff',
      '::placeholder': {
        color: '#ccb1f2',
      },
    };
  },
  placeholder: (provided: any) => ({
    ...provided,
    color: '#ccb1f2',
  }),
  control: (provided: any) => ({
    ...provided,
    backgroundColor: 'transparent',
    borderColor: '#a38fc0',
    minHeight: 56,
    boxShadow: 'none',
    ':hover': {
      borderColor: '#D3B7FB',
    },
  }),
  dropdownIndicator: (provided: any) => ({
    ...provided,
    backgroundColor: '#fff',
    color: '#1B0D2F',
    borderRadius: '0 4px 4px 0',
    padding: 15,
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  valueContainer: (base: any) => ({
    ...base,
    paddingLeft: 32,
  }),
  singleValue: (provided: any, state: any) => {
    const opacity = state.isDisabled ? 0.5 : 0.94;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition, color: '#fff' };
  },
};

const DropdownIndicator = (props: any) => {
  return (
    // @ts-ignore
    <components.DropdownIndicator {...props}>
      <Icon name="arrowDown" width={24} height={24} color="#1B0D2F" />
    </components.DropdownIndicator>
  );
};

const Select = ({ onChange, options = [], ...selectProps }: SelectProps) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const handleChange = async (value: Option) => {
    const prevValue = selectedOption;
    setSelectedOption(value);
    try {
      return await onChange(value);
    } catch (e) {
      setSelectedOption(prevValue);
      throw e;
    }
  };
  return (
    // @ts-ignore
    <BaseSelect
      components={{ DropdownIndicator }}
      styles={customStyles}
      value={selectedOption}
      onChange={handleChange}
      options={options}
      {...selectProps}
    />
  );
};

export default Select;
