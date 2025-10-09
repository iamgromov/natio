import type { ReactNode } from 'react';
import type { NavigateFunction } from 'react-router-dom';

import type { CountryInfo } from '.';
import type { CurrentCountry } from '../store/types';

export interface CountryDetailsProps {
  name: string | undefined;
  navigate: NavigateFunction;
}

export interface CardProps extends CountryInfo {
  onClick: () => void;
}

export interface InfoProps extends CurrentCountry {
  push: NavigateFunction;
}

export interface ListProps {
  children: ReactNode;
}

export interface MainProps {
  children: ReactNode;
}
