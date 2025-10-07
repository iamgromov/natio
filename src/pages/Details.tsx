import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';

import { selectDetails } from '../shared/store/details/details-selectors';
import { clearDetails, loadCountryByName } from '../shared/store/details/details-actions';
import { Button } from '../components/Button';
import { Info } from '../components/Info';

import preloader from '../assets/globe.gif';

export const Details = () => {
  const dispatch = useDispatch();
  const { currentCountry, error, status } = useSelector(selectDetails);
  const { name } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (name) {
      dispatch(loadCountryByName(name));
    }

    return () => {
      dispatch(clearDetails());
    };
  }, [dispatch, name]);

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>

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
    </div>
  );
};
