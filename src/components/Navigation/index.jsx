import React from 'react';

import { Container, Logo, Nav, Items, Separator } from './styles';

export const Navigation = () => {
  return (
    <>
      <Container>
        <Logo>
          <h3>Logo</h3>
        </Logo>
        <Nav>
          <Items>
            <h3>Menu</h3>
          </Items>
          <Items>
            <h3>Menu</h3>
          </Items>
          <Items>
            <h3>Menu</h3>
          </Items>
          <Items>
            <h3>Menu</h3>
          </Items>
        </Nav>
        <Logo>
          <h3>Logo</h3>
        </Logo>
      </Container>
      <Separator>
        <div></div>
      </Separator>
    </>
  );
};
