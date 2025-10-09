import { type FC, type ReactElement } from 'react';

import preloader from '../../assets/globe.gif';
import { useDetails } from '../hooks';

import { Info } from '.';

import type { CountryDetailsProps } from '../types';

export const CountryDetails: FC<CountryDetailsProps> = ({ name, navigate }): ReactElement => {
  const { currentCountry, error, status } = useDetails(name);

  return (
    <>
      {error && <h2>Can't fetch data</h2>}
      {status === 'loading' && (
        <img
          style={{
            display: 'flex',
            margin: '200px auto',
            width: '40px',
            height: '40px',
          }}
          src={preloader}
          alt='Preloader'
        />
      )}

      {status === 'received' && currentCountry && <Info push={navigate} {...currentCountry} />}
    </>
  );
};
