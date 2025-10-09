import type { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { useCleanup } from '../hooks';

import { Container, ThemeSwitcher } from '.';

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const Title = styled(Link)`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;

export const Header: FC = (): ReactElement => {
  const cleanUp = useCleanup();

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title to='/' onClick={cleanUp}>
            Where is the world?
          </Title>
          <ThemeSwitcher />
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};
