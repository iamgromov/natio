import type { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setSearch, type AppDispatch } from '../store';
import { selectSearch } from '../store/selectors';

import type { UseSearchReturn } from '../types';

export const useSearch = (): UseSearchReturn => {
  const dispatch = useDispatch<AppDispatch>();
  const search = useSelector(selectSearch);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(event.target.value));
  };

  return [search, handleSearch];
};
