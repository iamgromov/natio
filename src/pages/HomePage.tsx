import type { FC, ReactElement } from 'react';

import { Controls } from '../shared/components/Controls';
import { CountriesList } from '../shared/components/CountriesList';

export const Home: FC = (): ReactElement => {
  return (
    <>
      <Controls />
      <CountriesList />
    </>
  );
};
