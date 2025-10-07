import styled from 'styled-components';

import Select, { type StylesConfig } from 'react-select';

interface SelectOption {
  value: string;
  label: string;
}

const customStyles: StylesConfig<SelectOption, false> = {
  control: (provided) => ({
    ...provided,
    backgroundColor: 'var(--colors-ui-base)',
    color: 'var(--colors-text)',
    borderRadius: 'var(--radii)',
    padding: '0.25rem',
    border: 'none',
    boxShadow: 'var(--shadow)',
    height: '50px',
  }),
  option: (provided, state) => ({
    ...provided,
    cursor: 'pointer',
    color: 'var(--colors-text)',
    backgroundColor: state.isSelected ? 'var(--colors-bg)' : 'var(--colors-ui-base)',
  }),
};

export const CustomSelect = styled(Select<SelectOption>).attrs({
  styles: customStyles,
})`
  width: 200px;
  border-radius: var(--radii);
  font-family: var(--family);
  border: none;

  & > * {
    box-shadow: var(--shadow);
  }

  & input {
    padding-left: 0.25rem;
  }

  & * {
    color: var(--colors-text) !important;
  }

  & > div[id] {
    background-color: var(--colors-ui-base);
  }
`;
