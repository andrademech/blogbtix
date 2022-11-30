import styled from 'styled-components';

export const FooterStyle = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1600px;
  height: 150px;
  background-color: rgba(0, 0, 0, 0.8);
  color: var(--white);
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 0.7rem;

  > div {
    display: flex;
    justify-content: space-around;
    gap: 30px;
    color: var(--white);
  }


  > h2:link, h2:visited {
    color: var(--white);
  }
`;

export const LinkItems = styled.a`
  cursor: pointer;
  color: var(--white);

  :link, :visited {
    color: var(--white);
  }
`;
