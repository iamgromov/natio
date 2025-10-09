import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadCountries, type AppDispatch, type RootState } from '../store';
import { selectControls, selectCountriesInfo, selectVisibleCountries } from '../store/selectors';

import type { UseCountriesReturn } from '../types';

export const useCountries = (): UseCountriesReturn => {
  const dispatch = useDispatch<AppDispatch>();
  const { search, region } = useSelector(selectControls);
  const countries = useSelector((state: RootState) =>
    selectVisibleCountries(state, { search, region })
  );
  const { status, error, quantity } = useSelector(selectCountriesInfo);

  useEffect(() => {
    if (!quantity) {
      dispatch(loadCountries());
    }
  }, [quantity, dispatch]);

  return [countries, { status, error }];
};
