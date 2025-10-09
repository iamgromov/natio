import { useDispatch, useSelector } from 'react-redux';

import { setRegion, type AppDispatch } from '../store';
import { selectRegion } from '../store/selectors';

import type { SelectOption, UseRegionReturn } from '../types';

export const useRegion = (): UseRegionReturn => {
  const dispatch = useDispatch<AppDispatch>();
  const region = useSelector(selectRegion);

  const handleSelect = (reg: SelectOption | null) => {
    dispatch(setRegion(reg?.value || ''));
  };

  return [region, handleSelect];
};
