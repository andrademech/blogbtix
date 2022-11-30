import React from 'react';

import { FooterStyle, LinkItems } from './styles';

// Transformando Footer em componente
export const Footer = () => {
  return (
    <FooterStyle>
      <div>
        <h2>
          <LinkItems>Logo</LinkItems>
        </h2>
      </div>
      <div>
        <LinkItems href="#">Aditional Link</LinkItems>
        <LinkItems href="#">Aditional Link</LinkItems>
        <LinkItems href="#">Aditional Link</LinkItems>
      </div>
      <div>
        <h4>Your Company 2022. We Love You</h4>
      </div>
    </FooterStyle>
  );
};
