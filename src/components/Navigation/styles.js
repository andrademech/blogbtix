import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
  height: 65px;
  margin: 4px;
  font-size: 0.7rem;
`;

export const Logo = styled.div`
  width: 75px;
  height: 35px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  display: flex;
  cursor: pointer;
  color: var(--primary);

  > a {
    cursor: pointer;
    color: var(--primary);
  }

  > a:link, a:visited {
    color: var(--primary);
  }

  > h2:link, h2:visited {
    color: var(--primary);
  }

  > h2 {
    cursor: pointer;
  }
`;

export const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 100%;
`;

export const Items = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 40px;
  color: var(--primary);
  border-radius: 5px;
  cursor: pointer;
  :hover {
    background-color: var(--primary);
    color: var(--white);
    transition: var(--transition);
  }
`;

export const Separator = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  > div {
    border-bottom: 1px solid var(--secondary);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
  }
`;
