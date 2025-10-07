import { useDispatch, useSelector } from 'react-redux';

import { selectRegion } from '../shared/store/controls/controls-selectors';
import { setRegion } from '../shared/store/controls/controls-action';
import { Search } from './Search';
import { CustomSelect } from './CustomSelect';
import styled from 'styled-components';

export interface SelectOption {
  value: string;
  label: string;
}

interface OptionsMap {
  [key: string]: SelectOption;
}

const optionsMap: OptionsMap = {
  Africa: { value: 'Africa', label: 'Africa' },
  America: { value: 'America', label: 'America' },
  Asia: { value: 'Asia', label: 'Asia' },
  Europe: { value: 'Europe', label: 'Europe' },
  Oceania: { value: 'Oceania', label: 'Oceania' },
};

const options: SelectOption[] = Object.values(optionsMap);

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

export const Controls = () => {
  const dispatch = useDispatch();
  const region = useSelector(selectRegion);

  const handleSelect = (reg: SelectOption | null) => {
    dispatch(setRegion(reg?.value || ''));
  };

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
