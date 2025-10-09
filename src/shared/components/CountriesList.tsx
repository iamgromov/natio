import { type FC, type ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

import preloader from '../../assets/globe.gif';
import { useCountries } from '../hooks/use-countries';

import { List, Card } from '.';

import type { CountryInfo } from '../types';

export const CountriesList: FC = (): ReactElement => {
  const navigate = useNavigate();
  const [countries, { status, error }] = useCountries();

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

      {status === 'received' && (
        <List>
          {countries.map((c) => {
            const countryInfo: CountryInfo = {
              img: c.flags.png,
              name: c.name,
              info: [
                {
                  title: 'Population',
                  description: c.population.toLocaleString(),
                },
                {
                  title: 'Region',
                  description: c.region,
                },
                {
                  title: 'Capital',
                  description: c.capital,
                },
              ],
            };

            return (
              <Card key={c.name} onClick={() => navigate(`/country/${c.name}`)} {...countryInfo} />
            );
          })}
        </List>
      )}
    </>
  );
};
