import type { FC, ReactElement } from 'react';

import styled from 'styled-components';

import { useRegion } from '../hooks';

import { CustomSelect, Search } from '.';

import type { OptionsMap, SelectOption } from '../types';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const optionsMap: OptionsMap = {
  Africa: { value: 'Africa', label: 'Africa' },
  America: { value: 'America', label: 'America' },
  Asia: { value: 'Asia', label: 'Asia' },
  Europe: { value: 'Europe', label: 'Europe' },
  Oceania: { value: 'Oceania', label: 'Oceania' },
};

const options: SelectOption[] = Object.values(optionsMap);

export const Controls: FC = (): ReactElement => {
  const [region, handleSelect] = useRegion();

  return (
    <Wrapper>
      <Search />
      <CustomSelect
        options={options}
        placeholder='Filter by Region'
        isClearable
        isSearchable={false}
        value={region ? optionsMap[region] : null}
        onChange={handleSelect}
      />
    </Wrapper>
  );
};
