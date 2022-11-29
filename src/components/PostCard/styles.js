import styled from 'styled-components';

export const Post = styled.div`
  background-color: var(--white);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.1s ease-in-out;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  :hover {
    transform: scale(1.05);
  }

  > img {
  max-width: 100%;
  }
`;

export const PostContent = styled.div`
  padding: 15px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > h3 {
  display: block;
  margin-bottom: 0;
  }
`;
