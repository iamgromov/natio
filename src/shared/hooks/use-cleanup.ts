import { useDispatch } from 'react-redux';

import { clearControls, type AppDispatch } from '../store';

import type { UseCleanupReturn } from '../types';

export const useCleanup = (): UseCleanupReturn => {
  const dispatch = useDispatch<AppDispatch>();

  const cleanUp = () => {
    dispatch(clearControls());
  };

  return cleanUp;
};
