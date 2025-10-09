import type { ChangeEvent } from 'react';

import type { SelectOption } from '.';
import type { CurrentCountry, ICountry, Status, ThemeType } from '../store/types';

interface CountriesInfo {
  status: Status;
  error: string | null;
  quantity?: number;
}

export type UseCleanupReturn = () => void;

export type UseCountriesReturn = [ICountry[], CountriesInfo];

export interface UseDetailsReturn {
  currentCountry: CurrentCountry | null;
  error: string | null;
  status: Status;
}

export type UseNeigborsReturn = string[];

export type UseRegionReturn = [string, (reg: SelectOption | null) => void];

export type UseSearchReturn = [string, (event: ChangeEvent<HTMLInputElement>) => void];

export type UseThemeReturn = [ThemeType, () => void];
