import styled from 'styled-components';

export const Post = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.1s ease-in-out;
  cursor: pointer;
  :hover {
    transform: scale(1.05);
  }
  > img {
    max-width: 100%;
  }
`;

export const PostContent = styled.div`
  padding: 15px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;

  > h3, h2 {
  color: black;
  }
`;
