import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { clearDetails, loadCountryByName } from '../store';
import { selectDetails } from '../store/selectors';

import type { UseDetailsReturn } from '../types';

export const useDetails = (name: string | undefined): UseDetailsReturn => {
  const dispatch = useDispatch();
  const { currentCountry, error, status } = useSelector(selectDetails);

  useEffect(() => {
    if (name) {
      dispatch(loadCountryByName(name));
    }

    return () => {
      dispatch(clearDetails());
    };
  }, [dispatch, name]);

  return { currentCountry, error, status };
};
