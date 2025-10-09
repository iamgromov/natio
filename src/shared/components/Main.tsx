import type { FC, ReactElement } from 'react';

import styled from 'styled-components';

import { Container } from './Container';

import type { MainProps } from '../types';

const Wrapper = styled.main`
  padding: 2rem 0;

  @media (min-width: 767px) {
    padding: 4rem 0;
  }
`;

export const Main: FC<MainProps> = ({ children }): ReactElement => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};
