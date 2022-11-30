import React from 'react';

import { Container, Logo, Nav, Items, Separator } from './styles';

// Transformando Navigation em componente
export const Navigation = () => {
  return (
    <>
      <Container>
        <Logo>
          <div>
            <h1>
              <a href="#">Logo</a>
            </h1>
          </div>
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
          <Items>
            <h3>Menu</h3>
          </Items>
        </Nav>
      </Container>
      <Separator>
        <div></div>
      </Separator>
    </>
  );
};
