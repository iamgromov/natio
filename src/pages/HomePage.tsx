import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import type { RootState } from '../shared/store/store';
import {
  selectCountriesInfo,
  selectVisibleCountries,
} from '../shared/store/countries/countries-selectors';
import { loadCountries } from '../shared/store/countries/countries-actions';
import { selectControls } from '../shared/store/controls/controls-selectors';
import { List } from '../components/List';
import { Card } from '../components/Card';
import { Controls } from '../components/Controls';

import preloader from '../assets/globe.gif';

interface CountryInfoItem {
  title: string;
  description: string;
}

export interface CountryInfo {
  img: string;
  name: string;
  info: CountryInfoItem[];
}

export const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  return (
    <>
      <Controls />

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
