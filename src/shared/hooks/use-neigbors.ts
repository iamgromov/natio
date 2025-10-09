import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadNeighborsByBorder } from '../store';
import { selectNeighbors } from '../store/selectors';

import type { UseNeigborsReturn } from '../types';

export const useNeigbors = (borders: string[]): UseNeigborsReturn => {
  const dispatch = useDispatch();
  const neighbors = useSelector(selectNeighbors);

  useEffect(() => {
    if (borders.length) {
      dispatch(loadNeighborsByBorder(borders));
    }
  }, [borders, dispatch]);

  return neighbors;
};
