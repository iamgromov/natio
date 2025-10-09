import { type FC, type ReactElement } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { IoArrowBack } from 'react-icons/io5';

import { Button, CountryDetails } from '../shared/components';

export const Details: FC = (): ReactElement => {
  const navigate = useNavigate();
  const { name } = useParams();

  return (
    <>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>

      <CountryDetails name={name} navigate={navigate} />
    </>
  );
};
